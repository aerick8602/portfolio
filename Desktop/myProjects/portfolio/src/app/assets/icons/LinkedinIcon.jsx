import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={32}
    height={32}
    viewBox='0 0 24 24'
    fill="none"
    stroke="#858585"
    strokeWidth={.3}
    {...props}
  >
    <g id='LinkedIn'>
      <path d='M18.44 3.06H5.56a2.507 2.507 0 0 0-2.5 2.5v12.88a2.507 2.507 0 0 0 2.5 2.5h12.88a2.5 2.5 0 0 0 2.5-2.5V5.56a2.5 2.5 0 0 0-2.5-2.5m1.5 15.38a1.51 1.51 0 0 1-1.5 1.5H5.56a1.51 1.51 0 0 1-1.5-1.5V5.56a1.51 1.51 0 0 1 1.5-1.5h12.88a1.51 1.51 0 0 1 1.5 1.5Z'></path>
      <path d='M6.376 10.748a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0Z'></path>
      <circle cx='7.376' cy='6.744' r='1'></circle>
      <path d='M17.62 13.37v3.88a1 1 0 1 1-2 0v-3.88a1.615 1.615 0 1 0-3.23 0v3.88a1 1 0 0 1-2 0v-6.5a1.016 1.016 0 0 1 1-1 .94.94 0 0 1 .84.47 3.61 3.61 0 0 1 5.39 3.15'></path>
    </g>
  </svg>
);

export default SvgIcon;
