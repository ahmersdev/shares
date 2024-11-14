import { IAssetsProps } from "@/interfaces";

const DepositViaCryptoIcon = ({
  fill = "#E6ECF5",
  stroke = "#4E4E4E",
}: IAssetsProps) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill={fill} />
      <path
        d="M25 21.94V31M30 21.94V31M20 21.94V31M25.447 16.106L33.211 20.014C34.155 20.489 33.819 21.921 32.764 21.921H17.236C16.181 21.921 15.845 20.489 16.789 20.014L24.553 16.106C24.6918 16.0366 24.8448 16.0005 25 16.0005C25.1552 16.0005 25.3082 16.0366 25.447 16.106ZM32.5 34H17.5C17.1022 34 16.7206 33.8419 16.4393 33.5606C16.158 33.2793 16 32.8978 16 32.5C16 32.1021 16.158 31.7206 16.4393 31.4393C16.7206 31.158 17.1022 31 17.5 31H32.5C32.8978 31 33.2794 31.158 33.5607 31.4393C33.842 31.7206 34 32.1021 34 32.5C34 32.8978 33.842 33.2793 33.5607 33.5606C33.2794 33.8419 32.8978 34 32.5 34Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DepositViaCryptoIcon;
