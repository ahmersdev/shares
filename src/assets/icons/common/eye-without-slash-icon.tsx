import { IAssetsProps } from "@/interfaces";

const EyeWithoutSlashIcon = ({ fill = "#B0BABF" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5799 12.4999C15.5799 14.4799 13.9799 16.0799 11.9999 16.0799C10.0199 16.0799 8.41992 14.4799 8.41992 12.4999C8.41992 10.5199 10.0199 8.91992 11.9999 8.91992C13.9799 8.91992 15.5799 10.5199 15.5799 12.4999Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 20.7702C15.5298 20.7702 18.8198 18.6902 21.1098 15.0902C22.0098 13.6802 22.0098 11.3102 21.1098 9.90021C18.8198 6.30021 15.5298 4.22021 11.9998 4.22021C8.46984 4.22021 5.17984 6.30021 2.88984 9.90021C1.98984 11.3102 1.98984 13.6802 2.88984 15.0902C5.17984 18.6902 8.46984 20.7702 11.9998 20.7702Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeWithoutSlashIcon;
