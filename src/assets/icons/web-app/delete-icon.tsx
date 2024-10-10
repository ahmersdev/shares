import { IAssetsProps } from "@/interfaces";

const DeleteIcon = ({ fill = "#FFEFEB", stroke = "#EF4444" }: IAssetsProps) => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="36" height="36" rx="8" fill={fill} />
      <path
        d="M16 11.5H20C20 10.9696 19.7893 10.4609 19.4142 10.0858C19.0391 9.71071 18.5304 9.5 18 9.5C17.4696 9.5 16.9609 9.71071 16.5858 10.0858C16.2107 10.4609 16 10.9696 16 11.5ZM14.5 11.5C14.5 11.0404 14.5905 10.5852 14.7664 10.1606C14.9423 9.73597 15.2001 9.35013 15.5251 9.02513C15.8501 8.70012 16.236 8.44231 16.6606 8.26642C17.0852 8.09053 17.5404 8 18 8C18.4596 8 18.9148 8.09053 19.3394 8.26642C19.764 8.44231 20.1499 8.70012 20.4749 9.02513C20.7999 9.35013 21.0577 9.73597 21.2336 10.1606C21.4095 10.5852 21.5 11.0404 21.5 11.5H27.25C27.4489 11.5 27.6397 11.579 27.7803 11.7197C27.921 11.8603 28 12.0511 28 12.25C28 12.4489 27.921 12.6397 27.7803 12.7803C27.6397 12.921 27.4489 13 27.25 13H25.93L24.76 25.111C24.6702 26.039 24.238 26.9002 23.5477 27.5268C22.8573 28.1534 21.9583 28.5004 21.026 28.5H14.974C14.0419 28.5001 13.1431 28.153 12.4529 27.5265C11.7628 26.8999 11.3307 26.0388 11.241 25.111L10.07 13H8.75C8.55109 13 8.36032 12.921 8.21967 12.7803C8.07902 12.6397 8 12.4489 8 12.25C8 12.0511 8.07902 11.8603 8.21967 11.7197C8.36032 11.579 8.55109 11.5 8.75 11.5H14.5ZM16.5 16.25C16.5 16.0511 16.421 15.8603 16.2803 15.7197C16.1397 15.579 15.9489 15.5 15.75 15.5C15.5511 15.5 15.3603 15.579 15.2197 15.7197C15.079 15.8603 15 16.0511 15 16.25V23.75C15 23.9489 15.079 24.1397 15.2197 24.2803C15.3603 24.421 15.5511 24.5 15.75 24.5C15.9489 24.5 16.1397 24.421 16.2803 24.2803C16.421 24.1397 16.5 23.9489 16.5 23.75V16.25ZM20.25 15.5C20.0511 15.5 19.8603 15.579 19.7197 15.7197C19.579 15.8603 19.5 16.0511 19.5 16.25V23.75C19.5 23.9489 19.579 24.1397 19.7197 24.2803C19.8603 24.421 20.0511 24.5 20.25 24.5C20.4489 24.5 20.6397 24.421 20.7803 24.2803C20.921 24.1397 21 23.9489 21 23.75V16.25C21 16.0511 20.921 15.8603 20.7803 15.7197C20.6397 15.579 20.4489 15.5 20.25 15.5Z"
        fill={stroke}
      />
    </svg>
  );
};

export default DeleteIcon;