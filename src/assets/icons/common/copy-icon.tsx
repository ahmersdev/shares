import { IAssetsProps } from "@/interfaces";

const CopyIcon = ({ fill = "#FCFCFC" }: IAssetsProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_416_10948)">
        <path
          d="M3.33398 9.99992H2.66732C2.3137 9.99992 1.97456 9.85944 1.72451 9.60939C1.47446 9.35935 1.33398 9.02021 1.33398 8.66659V2.66659C1.33398 2.31296 1.47446 1.97382 1.72451 1.72378C1.97456 1.47373 2.3137 1.33325 2.66732 1.33325H8.66732C9.02094 1.33325 9.36008 1.47373 9.61013 1.72378C9.86018 1.97382 10.0007 2.31296 10.0007 2.66659V3.33325M7.33398 5.99992H13.334C14.0704 5.99992 14.6673 6.59687 14.6673 7.33325V13.3333C14.6673 14.0696 14.0704 14.6666 13.334 14.6666H7.33398C6.5976 14.6666 6.00065 14.0696 6.00065 13.3333V7.33325C6.00065 6.59687 6.5976 5.99992 7.33398 5.99992Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_416_10948">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyIcon;
