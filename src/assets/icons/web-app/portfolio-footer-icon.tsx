import { IAssetsProps } from "@/interfaces";

const PortfolioFooterIcon = ({
  fill = "#FFD646",
  stroke = "#252C32",
}: IAssetsProps) => {
  return (
    <svg
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="68" height="68" rx="34" fill={fill} />
      <g clipPath="url(#clip0_416_10797)">
        <path
          d="M44 46H32V38H30V46H24V38H22V46C22 46.5304 22.2107 47.0391 22.5858 47.4142C22.9609 47.7893 23.4696 48 24 48H44C44.5304 48 45.0391 47.7893 45.4142 47.4142C45.7893 47.0391 46 46.5304 46 46V38H44V46Z"
          fill={stroke}
        />
        <path
          d="M49.79 29.27L45.71 21.11C45.5444 20.7768 45.2892 20.4964 44.973 20.3003C44.6568 20.1042 44.2921 20.0002 43.92 20H24.08C23.7079 20.0002 23.3433 20.1042 23.0271 20.3003C22.7108 20.4964 22.4556 20.7768 22.29 21.11L18.21 29.27C18.0707 29.5495 17.9988 29.8577 18 30.17V33.25C17.9991 33.7173 18.1619 34.1702 18.46 34.53C18.9007 35.0351 19.4449 35.4395 20.0557 35.7156C20.6666 35.9916 21.3297 36.133 22 36.13C23.0938 36.1317 24.1542 35.7535 25 35.06C25.8458 35.7539 26.906 36.1331 28 36.1331C29.094 36.1331 30.1542 35.7539 31 35.06C31.8458 35.7539 32.906 36.1331 34 36.1331C35.094 36.1331 36.1542 35.7539 37 35.06C37.8458 35.7539 38.906 36.1331 40 36.1331C41.094 36.1331 42.1542 35.7539 43 35.06C43.9442 35.8352 45.1521 36.2142 46.3699 36.1172C47.5877 36.0202 48.7204 35.4549 49.53 34.54C49.8318 34.1816 49.9981 33.7285 50 33.26V30.17C50.0012 29.8577 49.9293 29.5495 49.79 29.27ZM31 30.4V31.92L30.18 33C29.9283 33.3431 29.5993 33.6221 29.2197 33.8144C28.8401 34.0067 28.4206 34.1069 27.995 34.1069C27.5695 34.1069 27.1499 34.0067 26.7703 33.8144C26.3907 33.6221 26.0617 33.3431 25.81 33L25 31.88V30.4L27.59 22H32L31 30.4ZM43 31.88L42.19 33C41.9383 33.3431 41.6093 33.6221 41.2297 33.8144C40.8501 34.0067 40.4305 34.1069 40.005 34.1069C39.5795 34.1069 39.1599 34.0067 38.7803 33.8144C38.4007 33.6221 38.0717 33.3431 37.82 33L37 31.88V30.4L36 22H40.45L43 30.4V31.88Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_416_10797">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PortfolioFooterIcon;
