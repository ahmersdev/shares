import { IAssetsProps } from "@/interfaces";

const HomeInvestedIcon = ({
  fill = "#4E4E4E1A",
  stroke = "#4E4E4E",
}: IAssetsProps) => {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.333496" width="60" height="60" rx="30" fill={fill} />
      <g clipPath="url(#clip0_177_189)">
        <path
          d="M34.9995 35.3333C34.9995 33.86 30.8208 32.6666 25.6662 32.6666M34.9995 35.3333C34.9995 36.8066 30.8208 38 25.6662 38C20.5115 38 16.3328 36.8066 16.3328 35.3333M34.9995 35.3333V41.916C34.9995 43.4346 30.8208 44.6666 25.6662 44.6666C20.5115 44.6666 16.3328 43.436 16.3328 41.916V35.3333M34.9995 35.3333C40.0982 35.3333 44.3328 34.0173 44.3328 32.6666V19.3333M25.6662 32.6666C20.5115 32.6666 16.3328 33.86 16.3328 35.3333M25.6662 32.6666C19.7755 32.6666 14.9995 31.3506 14.9995 30V23.3333M25.6662 20.6666C19.7755 20.6666 14.9995 21.86 14.9995 23.3333M14.9995 23.3333C14.9995 24.8066 19.7755 26 25.6662 26C25.6662 27.3506 30.0035 28.6666 35.1022 28.6666C40.2008 28.6666 44.3328 27.3506 44.3328 26M44.3328 19.3333C44.3328 17.86 40.1995 16.6666 35.1022 16.6666C30.0048 16.6666 25.8715 17.86 25.8715 19.3333M44.3328 19.3333C44.3328 20.8066 40.1995 22 35.1022 22C30.0048 22 25.8715 20.8066 25.8715 19.3333M25.8715 19.3333V32.888"
          stroke={stroke}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_177_189">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(13.6665 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeInvestedIcon;
