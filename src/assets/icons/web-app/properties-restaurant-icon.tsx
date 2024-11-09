import { IAssetsProps } from "@/interfaces";

const PropertiesRestaurantIcon = ({ fill = "#252C32" }: IAssetsProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8.22259V5.33325M16 8.22259C18.829 8.22259 21.5421 9.34639 23.5425 11.3468C25.5429 13.3472 26.6667 16.0603 26.6667 18.8893V22.6666H5.33333V18.8893C5.33333 16.0603 6.45714 13.3472 8.45753 11.3468C10.4579 9.34639 13.171 8.22259 16 8.22259ZM4 26.6666H28"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PropertiesRestaurantIcon;
