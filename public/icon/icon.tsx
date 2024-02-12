/* eslint-disable import/prefer-default-export */
import { createIcon } from '@chakra-ui/react';

export const Search = createIcon({
  displayName: 'Search',
  viewBox: '0 0 24 24',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path style={{ fill: 'transparent' }} d="M0 0h24v24H0z" />
      <g
        data-name="타원 1"
        style={{
          stroke: '#346cfd',
          strokeLinecap: 'round',
          strokeWidth: '2px',
          fill: 'none',
        }}
        transform="translate(3 2.866)"
      >
        <ellipse
          cx="7.94"
          cy="7.954"
          rx="7.94"
          ry="7.954"
          style={{ stroke: 'none' }}
        />
        <ellipse
          cx="7.94"
          cy="7.954"
          rx="6.94"
          ry="6.954"
          style={{ fill: 'none' }}
        />
      </g>
      <path
        data-name="패스 1"
        d="m1614.76 263 4.36 4.36"
        transform="translate(-1598.12 -246.226)"
        style={{
          stroke: '#346cfd',
          strokeLinecap: 'round',
          strokeWidth: '2px',
          fill: 'none',
        }}
      />
    </svg>
  ),
});

export const ArrowDown = createIcon({
  displayName: 'ArrowDown',
  viewBox: '0 0 24 24',
  path: (
    <svg
      data-name="icon_down arrow_solid_24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        data-name="다각형 14"
        d="M5.5 0 11 5.5H0z"
        transform="rotate(180 9 7.25)"
        fill="#515151"
      />
    </svg>
  ),
});

export const XIcon = createIcon({
  displayName: 'XIcon',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
    >
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  ),
});

export const Star = createIcon({
  displayName: 'Star',
  viewBox: '0 0 18 18',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path data-name="패스 625" d="M0 0h18v18H0z" fill="transparent" />
      <g data-name="그룹 215">
        <path
          data-name="패스 604"
          d="M13.672 16.791a.75.75 0 0 1-.349-.086L9.5 14.695 5.677 16.7a.75.75 0 0 1-1.088-.79l.73-4.257-3.093-3.01a.75.75 0 0 1 .416-1.279l4.274-.621L8.828 2.87a.78.78 0 0 1 1.345 0l1.912 3.873 4.274.621a.75.75 0 0 1 .416 1.279l-3.093 3.015.73 4.257a.75.75 0 0 1-.739.877z"
          transform="translate(-.5 -.985)"
        />
      </g>
    </svg>
  ),
});

export const List = createIcon({
  displayName: 'List',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
    >
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
    </svg>
  ),
});

export const CheckCircle = createIcon({
  displayName: 'CheckCircle',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#55BE60"
      viewBox="0 0 256 256"
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  ),
});

export const Warning = createIcon({
  displayName: 'Warning',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#FF7744"
      viewBox="0 0 256 256"
    >
      <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
    </svg>
  ),
});

export const Error = createIcon({
  displayName: 'Error',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#EE4444"
      viewBox="0 0 256 256"
    >
      <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
    </svg>
  ),
});

export const Bell = createIcon({
  displayName: 'Bell',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#5786EB"
      viewBox="0 0 256 256"
    >
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" />
    </svg>
  ),
});

export const BellRegular = createIcon({
  displayName: 'BellRegular',
  viewBox: '0 0 32 32',
  path: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256"
    >
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
    </svg>
  ),
});
