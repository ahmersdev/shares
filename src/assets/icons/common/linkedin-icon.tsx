import { IAssetsProps } from "@/interfaces";

const LinkedInIcon = ({ fill = "#FCFCFC" }: IAssetsProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_177_8627)">
        <path
          d="M20.945 20.4533H17.3953V14.883C17.3953 13.5547 17.3675 11.8477 15.539 11.8477C13.688 11.8477 13.406 13.2885 13.406 14.7847V20.4525H9.85175V8.99925H13.2657V10.5615H13.3115C13.7885 9.65925 14.9487 8.7105 16.6798 8.7105C20.2805 8.7105 20.9487 11.0813 20.9487 14.1637V20.4525L20.945 20.4533ZM5.83625 7.434C5.56496 7.4341 5.29631 7.38068 5.04569 7.27679C4.79508 7.1729 4.56742 7.02059 4.37576 6.82858C4.1841 6.63658 4.03221 6.40864 3.92878 6.15784C3.82534 5.90704 3.77241 5.63829 3.773 5.367C3.77344 4.95866 3.89496 4.55963 4.12217 4.22034C4.34939 3.88106 4.6721 3.61677 5.04951 3.46088C5.42692 3.305 5.84208 3.26451 6.24249 3.34456C6.64291 3.4246 7.0106 3.62158 7.29907 3.91058C7.58755 4.19958 7.78385 4.56763 7.86317 4.96818C7.94249 5.36874 7.90126 5.78383 7.74468 6.16095C7.58811 6.53808 7.32323 6.86031 6.98354 7.08691C6.64384 7.31351 6.24459 7.4343 5.83625 7.434ZM7.61675 20.4533H4.055V9H7.61675V20.4533ZM22.727 0H2.27C1.29275 0 0.5 0.77325 0.5 1.73025V22.2705C0.5 23.2275 1.29275 24.0007 2.27 24.0007H22.7233C23.699 24.0007 24.5 23.2275 24.5 22.2705V1.73025C24.5 0.77325 23.699 0 22.7233 0H22.727Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_177_8627">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInIcon;
