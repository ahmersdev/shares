import { IAssetsProps } from "@/interfaces";

const FooterFigmaIcon = ({
  fill = "#F5F0EB4D",
  stroke = "#4E4E4E",
}: IAssetsProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill={fill} />
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke={stroke} />
      <path
        d="M23.9998 15.667H21.2498C19.6665 15.667 18.4165 16.917 18.4165 18.417C18.4165 19.917 19.6665 21.167 21.1665 21.167H23.9998V15.667Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M24 21.25H21.25C19.75 21.25 18.5 22.5 18.5 24C18.5 25.5 19.75 26.75 21.25 26.75H24V21.25Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M24 26.75H21.25C19.75 26.75 18.5 28 18.5 29.5C18.5 31 19.75 32.25 21.25 32.25C22.75 32.25 24 31 24 29.5V26.75Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M24 15.667H26.75C28.25 15.667 29.5 16.917 29.5 18.417C29.5 19.917 28.25 21.167 26.75 21.167H24V15.667Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
      <path
        d="M26.75 21.25C28.25 21.25 29.5 22.5 29.5 24C29.5 25.5 28.25 26.75 26.75 26.75C25.25 26.75 24 25.5 24 24C24 22.5 25.25 21.25 26.75 21.25Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default FooterFigmaIcon;
