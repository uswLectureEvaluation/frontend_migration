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
