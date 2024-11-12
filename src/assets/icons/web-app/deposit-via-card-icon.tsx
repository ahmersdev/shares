import { IAssetsProps } from "@/interfaces";

const DepositViaCardIcon = ({
  fill = "#F5F0EB",
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
        d="M15 25C15 21.229 15 19.343 16.172 18.172C17.344 17.001 19.229 17 23 17H27C30.771 17 32.657 17 33.828 18.172C34.999 19.344 35 21.229 35 25C35 28.771 35 30.657 33.828 31.828C32.656 32.999 30.771 33 27 33H23C19.229 33 17.343 33 16.172 31.828C15.001 30.656 15 28.771 15 25Z"
        stroke={stroke}
        strokeWidth="2.08333"
      />
      <path
        d="M23 29H19M27 29H25.5M15 23H35"
        stroke={stroke}
        strokeWidth="2.08333"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DepositViaCardIcon;
