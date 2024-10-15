import { IAssetsProps } from "@/interfaces";

const SecurityAndPrivacyIcon = ({ fill = "#4E4E4E" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.998 2C8.98997 2 7.03997 4.019 4.73397 4.755C3.79597 5.055 3.32697 5.204 3.13697 5.415C2.94697 5.625 2.89197 5.934 2.78097 6.55C1.59097 13.146 4.19097 19.244 10.391 21.618C11.056 21.873 11.389 22 12.001 22C12.613 22 12.947 21.872 13.613 21.617C19.812 19.244 22.409 13.146 21.219 6.55C21.108 5.934 21.052 5.625 20.862 5.414C20.672 5.203 20.204 5.054 19.266 4.755C16.959 4.019 15.006 2 11.998 2Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2501 9.95897C10.2501 9.89897 10.2581 9.55297 10.2601 9.11897C10.2601 8.72097 10.2261 8.33897 10.4161 7.98897C11.1261 6.57497 13.1661 6.71897 13.6701 8.15897C13.7571 8.39597 13.7631 8.77097 13.7601 9.11897C13.7571 9.56197 13.7661 9.95897 13.7661 9.95897M10.3371 10.38C9.25714 10.38 8.71714 11.16 8.59714 11.64C8.47714 12.12 8.47714 13.86 8.54914 14.58C8.78914 15.48 9.38914 15.852 9.97714 15.972C10.5171 16.02 12.7971 16.002 13.4571 16.002C14.4171 16.02 15.1371 15.66 15.4371 14.58C15.4971 14.22 15.5571 12.24 15.4071 11.64C15.0891 10.68 14.2971 10.38 13.6971 10.38H10.3371Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SecurityAndPrivacyIcon;