import { IAssetsProps } from "@/interfaces";

const StarIcon = ({ fill = "#4E4E4E" }: IAssetsProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.8469 18.2362C44.6593 17.6597 44.3054 17.1516 43.8296 16.7759C43.3538 16.4002 42.7774 16.1737 42.1731 16.125L31.1106 15.2325L26.8394 4.90311C26.6084 4.34027 26.2152 3.85882 25.7099 3.51999C25.2046 3.18116 24.61 3.00024 24.0016 3.00024C23.3932 3.00024 22.7985 3.18116 22.2932 3.51999C21.7879 3.85882 21.3947 4.34027 21.1637 4.90311L16.8962 15.2306L5.82811 16.125C5.22282 16.1762 4.64609 16.4049 4.17019 16.7824C3.69429 17.1599 3.34037 17.6694 3.15279 18.2472C2.96521 18.825 2.9523 19.4453 3.11568 20.0303C3.27905 20.6154 3.61146 21.1392 4.07124 21.5362L12.5087 28.8169L9.93812 39.7031C9.79435 40.2945 9.82955 40.9153 10.0392 41.4867C10.249 42.0581 10.6237 42.5543 11.1159 42.9123C11.6081 43.2703 12.1956 43.474 12.8038 43.4975C13.412 43.521 14.0135 43.3633 14.5319 43.0444L24.0006 37.2169L33.475 43.0444C33.9936 43.3595 34.5938 43.5142 35.2001 43.4889C35.8064 43.4637 36.3917 43.2596 36.8822 42.9023C37.3728 42.5451 37.7467 42.0507 37.9568 41.4814C38.1669 40.9121 38.2039 40.2934 38.0631 39.7031L35.4831 28.815L43.9206 21.5344C44.3841 21.138 44.7196 20.6131 44.8845 20.0259C45.0493 19.4388 45.0363 18.8159 44.8469 18.2362ZM41.9706 19.2619L32.8394 27.1369C32.6311 27.3163 32.4762 27.5496 32.3916 27.8112C32.3069 28.0727 32.2958 28.3525 32.3594 28.62L35.1494 40.395C35.1566 40.4112 35.1573 40.4296 35.1514 40.4463C35.1454 40.4631 35.1333 40.4769 35.1175 40.485C35.0837 40.5112 35.0744 40.5056 35.0462 40.485L24.7862 34.1756C24.5499 34.0303 24.278 33.9534 24.0006 33.9534C23.7232 33.9534 23.4513 34.0303 23.215 34.1756L12.955 40.4887C12.9269 40.5056 12.9194 40.5112 12.8837 40.4887C12.8679 40.4807 12.8558 40.4668 12.8499 40.4501C12.8439 40.4333 12.8446 40.415 12.8519 40.3987L15.6419 28.6237C15.7055 28.3563 15.6943 28.0765 15.6097 27.8149C15.525 27.5534 15.3701 27.3201 15.1619 27.1406L6.03061 19.2656C6.00811 19.2469 5.98749 19.23 6.00624 19.1719C6.02499 19.1137 6.03999 19.1212 6.06811 19.1175L18.0531 18.15C18.328 18.1264 18.5911 18.0275 18.8134 17.8641C19.0357 17.7006 19.2086 17.4791 19.3131 17.2237L23.9294 6.04686C23.9444 6.01498 23.95 5.99998 23.995 5.99998C24.04 5.99998 24.0456 6.01498 24.0606 6.04686L28.6881 17.2237C28.7936 17.4792 28.9676 17.7005 29.191 17.8633C29.4143 18.0261 29.6783 18.124 29.9537 18.1462L41.9387 19.1137C41.9669 19.1137 41.9837 19.1137 42.0006 19.1681C42.0175 19.2225 42.0006 19.2431 41.9706 19.2619Z"
        fill={fill}
      />
    </svg>
  );
};

export default StarIcon;
