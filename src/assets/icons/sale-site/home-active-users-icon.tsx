import { IAssetsProps } from "@/interfaces";

const HomeActiveUsersIcon = ({
  fill = "#4E4E4E1A",
  stroke = "#4E4E4E",
}: IAssetsProps) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="30" fill={fill} />
      <path
        d="M43.3158 38.9733C43.2543 39.3811 43.0992 39.769 42.8624 40.1067C42.6269 40.4384 42.3149 40.7086 41.9528 40.8942C41.5907 41.0799 41.1893 41.1756 40.7824 41.1733H38.5811C38.4245 41.1727 38.2704 41.135 38.1313 41.0631C37.9922 40.9912 37.8721 40.8873 37.7811 40.76C37.6889 40.6327 37.6276 40.4857 37.6021 40.3307C37.5767 40.1756 37.5877 40.0167 37.6344 39.8667C38.1278 38.2933 38.0211 36.52 33.5531 33.68C33.371 33.5607 33.2316 33.3866 33.1549 33.1829C33.0782 32.9792 33.0682 32.7564 33.1264 32.5467C33.1889 32.34 33.3157 32.1588 33.4884 32.0293C33.6611 31.8998 33.8706 31.8288 34.0864 31.8267C35.9933 31.8532 37.8542 32.4164 39.4558 33.4516C41.0574 34.4868 42.3351 35.9522 43.1424 37.68C43.3064 38.0901 43.366 38.5345 43.3158 38.9733ZM39.9811 24.2667C39.9776 25.8288 39.3553 27.326 38.2506 28.4305C37.1459 29.5349 35.6486 30.1568 34.0864 30.16C33.9116 30.1564 33.7406 30.1077 33.5901 30.0186C33.4396 29.9295 33.3147 29.8031 33.2275 29.6515C33.1403 29.4999 33.0938 29.3283 33.0924 29.1534C33.091 28.9785 33.1349 28.8063 33.2198 28.6533C34.036 27.348 34.4688 25.8395 34.4688 24.3C34.4688 22.7605 34.036 21.252 33.2198 19.9467C33.1152 19.7972 33.0535 19.622 33.0413 19.44C33.0291 19.258 33.067 19.0761 33.1507 18.9141C33.2345 18.752 33.361 18.616 33.5165 18.5207C33.672 18.4254 33.8507 18.3744 34.0331 18.3733C34.8138 18.3707 35.5868 18.5279 36.3045 18.8351C37.0222 19.1424 37.6695 19.5933 38.2064 20.16C39.3032 21.2675 39.9213 22.7613 39.9278 24.32L39.9811 24.2667Z"
        fill={stroke}
      />
      <path
        d="M36.2329 38.9333C36.287 39.5861 36.1586 40.241 35.8619 40.8249C35.5652 41.4089 35.112 41.8988 34.5529 42.24C33.9956 42.5827 33.3529 42.7627 32.6996 42.76H20.2023C19.5481 42.7629 18.9061 42.5828 18.3489 42.24C17.7887 41.9008 17.3351 41.4108 17.0399 40.8262C16.7447 40.2415 16.6199 39.5856 16.6796 38.9333C16.7294 38.2829 16.9603 37.6593 17.3463 37.1333C18.4088 35.7183 19.7779 34.5622 21.3509 33.7517C22.9239 32.9412 24.6599 32.4973 26.4289 32.4533C28.2039 32.4881 29.9478 32.9263 31.5283 33.7349C33.1089 34.5434 34.4847 35.701 35.5516 37.12C35.9396 37.651 36.1761 38.2781 36.2329 38.9333ZM32.9929 23.76C32.9894 25.4934 32.3 27.1549 31.0753 28.3816C29.8507 29.6082 28.1903 30.3003 26.4569 30.3067C25.4918 30.3043 24.5392 30.0883 23.6675 29.6741C22.7958 29.2599 22.0266 28.6579 21.4152 27.9112C20.8037 27.1645 20.3652 26.2917 20.131 25.3554C19.8969 24.4191 19.8729 23.4426 20.0609 22.496C20.2497 21.5492 20.646 20.6559 21.2213 19.8805C21.7966 19.1052 22.5365 18.4669 23.388 18.0118C24.2395 17.5566 25.1812 17.2958 26.1455 17.2481C27.1098 17.2004 28.0727 17.367 28.9649 17.736C30.1579 18.229 31.1782 19.0641 31.8972 20.1362C32.6162 21.2082 33.0016 22.4692 33.0049 23.76H32.9929Z"
        fill={stroke}
      />
    </svg>
  );
};

export default HomeActiveUsersIcon;
