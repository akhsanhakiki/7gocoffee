import React from "react";

interface GojekIconProps {
  fill?: string;
  width?: number;
  height?: number;
  className?: string;
}

const GojekIcon: React.FC<GojekIconProps> = ({
  fill = "#00AA13",
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ minWidth: width, display: "inline-block" }}
    >
      <rect width="512" height="512" fill="#ffffff" rx="15%" />
      <circle cx="256" cy="261" r="64" fill={fill} />
      <path
        fill={fill}
        d="M256 91a171 171 0 00-66 328 32 32 0 0044-24 32 32 0 00-19-35 106 106 0 0141-205 107 107 0 0141 205 32 32 0 0013 61 33 33 0 0012-3 170 170 0 00-66-327"
      />
    </svg>
  );
};

export default GojekIcon;
