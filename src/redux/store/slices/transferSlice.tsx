// slices/transferSlice.ts
import { ITransfer } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Hex } from "viem";
import axios from 'axios';
import { Config } from "@/config/site";

// Define the state type
interface TransferState {
  transfers: ITransfer[];
  loading: boolean;
}

// Initial state
const initialState: TransferState = {
  transfers: [],
  loading: false,
};

// Async thunk to fetch transfers
export const fetchTransfers = createAsyncThunk<ITransfer[], { address: (Hex | undefined) }>(
  "transfers/getAllTransfers",
  async ({ address }, thunkApi) => {
    const response = await fetch(`${Config.apiBaseUrl}/user/transfer/all/${address}`);
    const data = await response.json();
    return data;
  }
);

// Async thunk to add a transfer
export const addTransfer = createAsyncThunk<ITransfer, { transfer: ITransfer, address: (Hex | undefined) }>(
  "transfers/addTransfer",
  async ({ transfer, address }, thunkApi) => {
    const response = await axios.post(`${Config.apiBaseUrl}/user/transfer/create/${address}`, transfer);
    return response.data;
  }
);

const transferSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransfers.fulfilled, (state, action: PayloadAction<ITransfer[]>) => {
      state.loading = false;
      state.transfers.push(...action.payload);
    });

    builder.addCase(fetchTransfers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addTransfer.fulfilled, (state, action: PayloadAction<ITransfer>) => {
      state.loading = false;
      state.transfers.push(action.payload);
    });

    builder.addCase(addTransfer.pending, (state) => {
      state.loading = true;
    });
  },
});

export default transferSlice.reducer;
