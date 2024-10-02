import { IAssetsProps } from "@/interfaces";

const PasswordLockIcon = ({ fill = "#B0BABF" }: IAssetsProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.83317V7.1665C5 4.40817 5.83333 2.1665 10 2.1665C14.1667 2.1665 15 4.40817 15 7.1665V8.83317"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99984 15.9167C11.1504 15.9167 12.0832 14.9839 12.0832 13.8333C12.0832 12.6827 11.1504 11.75 9.99984 11.75C8.84924 11.75 7.9165 12.6827 7.9165 13.8333C7.9165 14.9839 8.84924 15.9167 9.99984 15.9167Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1665 18.8335H5.83317C2.49984 18.8335 1.6665 18.0002 1.6665 14.6668V13.0002C1.6665 9.66683 2.49984 8.8335 5.83317 8.8335H14.1665C17.4998 8.8335 18.3332 9.66683 18.3332 13.0002V14.6668C18.3332 18.0002 17.4998 18.8335 14.1665 18.8335Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PasswordLockIcon;
