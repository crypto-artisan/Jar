import * as React from "react";

import { IconSvgProps } from "@/types";

export const CheckIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    width="40" height="39" viewBox="0 0 40 39"
    fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.935608" y="0.285645" width="38.5639" height="37.8227" fill="url(#pattern0_101_89)" />
    <defs>
      <pattern id="pattern0_101_89" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_101_89"
          transform="matrix(0.0104167 0 0 0.0106208 0 -0.00979876)" />
      </pattern>
      <image id="image0_101_89" width="96" height="96"
        href="data:image/png;base64,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" />
    </defs>
  </svg>
);

export const PlusIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg height={size || height} width={size || width} viewBox="0 0 448 512">
      <path fill="#fff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);