import { IAssetsProps } from "@/interfaces";

const FooterWhatsappIcon = ({
  fill = "#EEFFF7",
  stroke = "#47CE8E",
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
        d="M19.7498 31.167C20.9998 31.917 22.4998 32.3337 23.9998 32.3337C28.5832 32.3337 32.3332 28.5837 32.3332 24.0003C32.3332 19.417 28.5832 15.667 23.9998 15.667C19.4165 15.667 15.6665 19.417 15.6665 24.0003C15.6665 25.5003 16.0832 26.917 16.7498 28.167L16.1069 30.6396C15.9122 31.3886 16.6054 32.0654 17.3495 31.8528L19.7498 31.167Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.75 26.3737C27.75 26.5087 27.72 26.6475 27.6561 26.7825C27.5923 26.9175 27.5096 27.045 27.4007 27.165C27.2167 27.3675 27.0139 27.5138 26.7848 27.6075C26.5595 27.7013 26.3153 27.75 26.0525 27.75C25.6694 27.75 25.26 27.66 24.8281 27.4763C24.3962 27.2925 23.9643 27.045 23.5362 26.7338C23.1043 26.4188 22.6949 26.07 22.3043 25.6837C21.9175 25.2937 21.5682 24.885 21.2565 24.4575C20.9485 24.03 20.7007 23.6025 20.5204 23.1788C20.3401 22.7513 20.25 22.3425 20.25 21.9525C20.25 21.6975 20.2951 21.4538 20.3852 21.2288C20.4753 21 20.6181 20.79 20.8171 20.6025C21.0575 20.3663 21.3204 20.25 21.5983 20.25C21.7034 20.25 21.8086 20.2725 21.9025 20.3175C22.0001 20.3625 22.0865 20.43 22.1541 20.5275L23.0254 21.7538C23.093 21.8475 23.1418 21.9338 23.1756 22.0163C23.2094 22.095 23.2282 22.1738 23.2282 22.245C23.2282 22.335 23.2019 22.425 23.1493 22.5112C23.1005 22.5975 23.0292 22.6875 22.939 22.7775L22.6536 23.0737C22.6123 23.115 22.5935 23.1638 22.5935 23.2238C22.5935 23.2538 22.5973 23.28 22.6048 23.31C22.616 23.34 22.6273 23.3625 22.6348 23.385C22.7024 23.5087 22.8189 23.67 22.9841 23.865C23.1531 24.06 23.3334 24.2588 23.5287 24.4575C23.7315 24.6563 23.9268 24.84 24.1258 25.0087C24.3211 25.1737 24.4826 25.2862 24.6103 25.3537C24.6291 25.3612 24.6516 25.3725 24.6779 25.3837C24.7079 25.395 24.738 25.3987 24.7718 25.3987C24.8356 25.3987 24.8845 25.3763 24.9258 25.335L25.2112 25.0538C25.3051 24.96 25.3952 24.8887 25.4816 24.8438C25.568 24.7912 25.6544 24.765 25.7482 24.765C25.8196 24.765 25.8947 24.78 25.9773 24.8138C26.06 24.8475 26.1463 24.8963 26.2402 24.96L27.4834 25.8412C27.581 25.9087 27.6486 25.9875 27.6899 26.0812C27.7275 26.175 27.75 26.2687 27.75 26.3737Z"
        stroke={stroke}
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default FooterWhatsappIcon;