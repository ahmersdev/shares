import { IAssetsProps } from "@/interfaces";

const WalletIcon = ({ fill = "#6B7280" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1421_1547)">
        <path
          d="M21.3333 10.9376H20.6666V6.93758C20.6666 6.76077 20.5964 6.5912 20.4713 6.46618C20.3463 6.34115 20.1768 6.27091 19.9999 6.27091H3.99994C3.84208 6.27349 3.68843 6.21996 3.56635 6.11985C3.44427 6.01974 3.36167 5.87955 3.33327 5.72425V5.48425C3.36167 5.32894 3.44427 5.18876 3.56635 5.08865C3.68843 4.98854 3.84208 4.93501 3.99994 4.93758H19.7199C19.8968 4.93758 20.0663 4.86734 20.1913 4.74232C20.3164 4.61729 20.3866 4.44773 20.3866 4.27091C20.3866 4.0941 20.3164 3.92453 20.1913 3.79951C20.0663 3.67449 19.8968 3.60425 19.7199 3.60425H3.99994C3.46951 3.60425 2.9608 3.81496 2.58573 4.19003C2.21065 4.56511 1.99994 5.07382 1.99994 5.60425C1.99514 5.68418 1.99514 5.76432 1.99994 5.84425V19.5576C2.00256 19.9165 2.07585 20.2715 2.21564 20.6021C2.35542 20.9327 2.55896 21.2325 2.81464 21.4845C3.07031 21.7365 3.37311 21.9356 3.70574 22.0705C4.03837 22.2055 4.39433 22.2736 4.75327 22.2709H19.9999C20.1768 22.2709 20.3463 22.2007 20.4713 22.0757C20.5964 21.9506 20.6666 21.7811 20.6666 21.6042V17.6042H21.3333C21.5101 17.6042 21.6797 17.534 21.8047 17.409C21.9297 17.284 21.9999 17.1144 21.9999 16.9376V11.6042C21.9999 11.4274 21.9297 11.2579 21.8047 11.1328C21.6797 11.0078 21.5101 10.9376 21.3333 10.9376ZM19.3333 20.9376H4.75327C4.38248 20.9412 4.02526 20.7982 3.75934 20.5398C3.49341 20.2813 3.34029 19.9283 3.33327 19.5576V7.52425C3.54965 7.58708 3.77484 7.6141 3.99994 7.60425H19.3333V10.9376H14.6666C13.7826 10.9376 12.9347 11.2888 12.3096 11.9139C11.6845 12.539 11.3333 13.3869 11.3333 14.2709C11.3333 15.155 11.6845 16.0028 12.3096 16.6279C12.9347 17.2531 13.7826 17.6042 14.6666 17.6042H19.3333V20.9376ZM20.6666 16.2709H14.6666C14.1362 16.2709 13.6275 16.0602 13.2524 15.6851C12.8773 15.3101 12.6666 14.8013 12.6666 14.2709C12.6666 13.7405 12.8773 13.2318 13.2524 12.8567C13.6275 12.4816 14.1362 12.2709 14.6666 12.2709H20.6666V16.2709Z"
          fill={fill}
        />
        <path
          d="M15.34 15.2708C15.8923 15.2708 16.34 14.823 16.34 14.2708C16.34 13.7185 15.8923 13.2708 15.34 13.2708C14.7877 13.2708 14.34 13.7185 14.34 14.2708C14.34 14.823 14.7877 15.2708 15.34 15.2708Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1421_1547">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.9375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WalletIcon;