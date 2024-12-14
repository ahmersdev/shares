import { IAssetsProps } from "@/interfaces";

const ChatHomeInactiveIcon = ({ stroke = "#6B7280" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.5L12 4.5L20 12.5M6 11V19.5C6 19.7652 6.10536 20.0196 6.29289 20.2071C6.48043 20.3946 6.73478 20.5 7 20.5H10V17.5C10 17.2348 10.1054 16.9804 10.2929 16.7929C10.4804 16.6054 10.7348 16.5 11 16.5H13C13.2652 16.5 13.5196 16.6054 13.7071 16.7929C13.8946 16.9804 14 17.2348 14 17.5V20.5H17C17.2652 20.5 17.5196 20.3946 17.7071 20.2071C17.8946 20.0196 18 19.7652 18 19.5V11"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatHomeInactiveIcon;
