import { IAssetsProps } from "@/interfaces";

const ChatMessagesActiveIcon = ({ fill = "#545452" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 3.5C19.0609 3.5 20.0783 3.92143 20.8284 4.67157C21.5786 5.42172 22 6.43913 22 7.5V15.5C22 16.5609 21.5786 17.5783 20.8284 18.3284C20.0783 19.0786 19.0609 19.5 18 19.5H13.276L8.514 22.357C8.37059 22.4431 8.20788 22.4918 8.04077 22.4987C7.87366 22.5056 7.70749 22.4705 7.55746 22.3966C7.40743 22.3227 7.27833 22.2123 7.18199 22.0756C7.08565 21.9389 7.02514 21.7802 7.006 21.614L7 21.5V19.5H6C4.97376 19.5 3.98677 19.1056 3.24319 18.3983C2.4996 17.691 2.05631 16.725 2.005 15.7L2 15.5V7.5C2 6.43913 2.42143 5.42172 3.17157 4.67157C3.92172 3.92143 4.93913 3.5 6 3.5H18ZM14 12.5H8C7.73478 12.5 7.48043 12.6054 7.29289 12.7929C7.10536 12.9804 7 13.2348 7 13.5C7 13.7652 7.10536 14.0196 7.29289 14.2071C7.48043 14.3946 7.73478 14.5 8 14.5H14C14.2652 14.5 14.5196 14.3946 14.7071 14.2071C14.8946 14.0196 15 13.7652 15 13.5C15 13.2348 14.8946 12.9804 14.7071 12.7929C14.5196 12.6054 14.2652 12.5 14 12.5ZM16 8.5H8C7.73478 8.5 7.48043 8.60536 7.29289 8.79289C7.10536 8.98043 7 9.23478 7 9.5C7 9.76522 7.10536 10.0196 7.29289 10.2071C7.48043 10.3946 7.73478 10.5 8 10.5H16C16.2652 10.5 16.5196 10.3946 16.7071 10.2071C16.8946 10.0196 17 9.76522 17 9.5C17 9.23478 16.8946 8.98043 16.7071 8.79289C16.5196 8.60536 16.2652 8.5 16 8.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChatMessagesActiveIcon;