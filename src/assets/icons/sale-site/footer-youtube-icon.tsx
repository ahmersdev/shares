import { IAssetsProps } from "@/interfaces";

const FooterYoutubeIcon = ({
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
        d="M28.1665 30.6663H19.8332C17.3332 30.6663 15.6665 28.9997 15.6665 26.4997V21.4997C15.6665 18.9997 17.3332 17.333 19.8332 17.333H28.1665C30.6665 17.333 32.3332 18.9997 32.3332 21.4997V26.4997C32.3332 28.9997 30.6665 30.6663 28.1665 30.6663Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 21.9168L25.5833 23.1668C26.3333 23.6668 26.3333 24.4168 25.5833 24.9168L23.5 26.1668C22.6667 26.6668 22 26.2501 22 25.3334V22.8334C22 21.7501 22.6667 21.4168 23.5 21.9168Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FooterYoutubeIcon;
