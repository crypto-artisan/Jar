import * as React from "react";

import { IconSvgProps } from "../types";

export const CheckIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size} height={height || size} viewBox="0 0 40 39"
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

export const UnCheckIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg width={width || size} height={height || size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="22" fill="url(#pattern0_35_228)" />
    <defs>
      <pattern id="pattern0_35_228" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_35_228" transform="scale(0.0078125)" />
      </pattern>
      <image id="image0_35_228" width="128" height="128" href="data:image/png;base64,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" />
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