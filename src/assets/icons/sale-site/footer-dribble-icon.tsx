import { IAssetsProps } from "@/interfaces";

const FooterDribbleIcon = ({
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
        d="M29.4168 17.9912C27.2502 21.7829 23.0752 23.9579 18.7252 23.5662L16.0835 23.3245"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5835 30.1417C20.7502 26.3501 24.9252 24.1751 29.2752 24.5667L31.9168 24.8084"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9998 32.3337C28.6022 32.3337 32.3332 28.6027 32.3332 24.0003C32.3332 19.398 28.6022 15.667 23.9998 15.667C19.3975 15.667 15.6665 19.398 15.6665 24.0003C15.6665 28.6027 19.3975 32.3337 23.9998 32.3337Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3584 16.5L23.0084 19.7917C24.7834 21.9917 26.0417 24.55 26.7084 27.2917L27.7167 31.45"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FooterDribbleIcon;
