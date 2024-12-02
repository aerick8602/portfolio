const LeetCodeIcon = (props) => (
    <svg
      width={28}
      height={28}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="gray"
      strokeWidth={.5}
      {...props}
    >
      <defs>
        <style>
          {
            ".a,.b{fill:none;stroke:gray;stroke-linecap:round;stroke-linejoin:round;stroke-width:5;}" // Increased stroke-width
          }
        </style>
      </defs>
      <path
        className="a"
        d="M33.8092,34.8772,26.8725,41.814a5.7258,5.7258,0,0,1-8.1154,0L8.6127,31.67a5.726,5.726,0,0,1,0-8.1155L18.7571,13.41a5.7258,5.7258,0,0,1,8.1154,0L34.5,21.0373"
      />
      <path className="b" d="M18.7571,13.41,27.7647,4.5" />
      <path className="a" d="M19.5838,27.5918h21.49" />
    </svg>
  );
  
  export default LeetCodeIcon;
  