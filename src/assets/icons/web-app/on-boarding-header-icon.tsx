import { IAssetsPropsDimension } from "@/interfaces";

const OnBoardingHeaderIcon = ({
  fill = "#FF8A00",
  stroke = "#FCFCFC",
  width = "53",
  height = "53",
}: IAssetsPropsDimension) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="53" height="53" rx="8" fill={fill} />
      <path
        d="M29.666 14V19.3333C29.666 19.687 29.8065 20.0261 30.0565 20.2761C30.3066 20.5262 30.6457 20.6667 30.9993 20.6667H36.3327"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.3327 26L29.666 31.3333M29.666 26L24.3327 31.3333M33.666 38H20.3327C19.6254 38 18.9472 37.719 18.4471 37.219C17.947 36.7189 17.666 36.0406 17.666 35.3333V16.6667C17.666 15.9594 17.947 15.2811 18.4471 14.781C18.9472 14.281 19.6254 14 20.3327 14H29.666L36.3327 20.6667V35.3333C36.3327 36.0406 36.0517 36.7189 35.5516 37.219C35.0515 37.719 34.3733 38 33.666 38Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OnBoardingHeaderIcon;
