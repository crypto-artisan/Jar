import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ITransaction {
  id: string;
  result: string;
  date: string;
  name: string;
  address: string;
  hash: string;
  approvers: number;
  signatures: number;
  value: number;
}