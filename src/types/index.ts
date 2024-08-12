import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// types/index.ts
export interface ITransfer {
  id: string;
  name: string;
  hash: string;
  receiver: {
    addr: string;
    userName: string;
  };
  assets: number;
  reviews: Review[];
  result: string;
  enrolled_date: Date;
}

export interface Review {
  id: string;
  addr: string;
  userName: string;
  result: string;
}
