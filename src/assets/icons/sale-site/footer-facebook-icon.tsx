import { IAssetsProps } from "@/interfaces";

const FooterFacebookIcon = ({
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
        d="M25.6667 21.75V24.1667H27.8333C28 24.1667 28.0833 24.3333 28.0833 24.5L27.75 26.0833C27.75 26.1667 27.5833 26.25 27.5 26.25H25.6667V32.3333H23.1667V26.3333H21.75C21.5833 26.3333 21.5 26.25 21.5 26.0833V24.5C21.5 24.3333 21.5833 24.25 21.75 24.25H23.1667V21.5C23.1667 20.0833 24.25 19 25.6667 19H27.9167C28.0833 19 28.1667 19.0833 28.1667 19.25V21.25C28.1667 21.4167 28.0833 21.5 27.9167 21.5H25.9167C25.75 21.5 25.6667 21.5833 25.6667 21.75Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M26.4998 32.3337H21.4998C17.3332 32.3337 15.6665 30.667 15.6665 26.5003V21.5003C15.6665 17.3337 17.3332 15.667 21.4998 15.667H26.4998C30.6665 15.667 32.3332 17.3337 32.3332 21.5003V26.5003C32.3332 30.667 30.6665 32.3337 26.4998 32.3337Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FooterFacebookIcon;
