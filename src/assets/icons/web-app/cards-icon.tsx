import { IAssetsProps } from "@/interfaces";

const CardsIcon = ({ fill = "#ECECEC", stroke = "#252C32" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill={fill} />
      <path
        d="M5.33398 12.0001C5.33398 9.48608 5.33398 8.22875 6.11532 7.44808C6.89598 6.66675 8.15332 6.66675 10.6673 6.66675H13.334C15.848 6.66675 17.1053 6.66675 17.886 7.44808C18.6673 8.22875 18.6673 9.48608 18.6673 12.0001C18.6673 14.5141 18.6673 15.7714 17.886 16.5521C17.1053 17.3334 15.848 17.3334 13.334 17.3334H10.6673C8.15332 17.3334 6.89598 17.3334 6.11532 16.5521C5.33398 15.7714 5.33398 14.5141 5.33398 12.0001Z"
        stroke={stroke}
      />
      <path
        d="M10.6673 14.6667H8.00065M13.334 14.6667H12.334M5.33398 10.6667H18.6673"
        stroke={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CardsIcon;
