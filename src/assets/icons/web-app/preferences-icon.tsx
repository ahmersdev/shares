import { IAssetsProps } from "@/interfaces";

const PreferencesIcon = ({ fill = "#4E4E4E" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5966 7.77002C12.4893 7.77002 12.3953 7.72935 12.3146 7.64802C12.2333 7.56735 12.1926 7.47302 12.1926 7.36502V6.27002C12.1926 5.85202 12.3383 5.49769 12.6296 5.20702C12.9209 4.91569 13.2753 4.77002 13.6926 4.77002H14.7896C14.8969 4.77002 14.9909 4.81035 15.0716 4.89102C15.1523 4.97235 15.1926 5.06669 15.1926 5.17402V6.27002C15.1926 6.68802 15.0473 7.04269 14.7566 7.33402C14.4659 7.62535 14.1113 7.77069 13.6926 7.77002H12.5966ZM7.30859 12.77C6.61126 12.77 6.02026 12.5274 5.53559 12.042C5.05093 11.5574 4.80859 10.9664 4.80859 10.269V8.57702C4.80859 8.34502 4.88526 8.15235 5.03859 7.99902C5.19193 7.84569 5.38426 7.76902 5.61559 7.76902H7.30859C8.00593 7.76902 8.59693 8.01135 9.08159 8.49602C9.56626 8.98069 9.80859 9.57169 9.80859 10.269V11.961C9.80859 12.193 9.73193 12.3857 9.57859 12.539C9.42526 12.6924 9.23259 12.7694 9.00059 12.77H7.30859ZM16.0006 20.75C15.4019 20.75 14.8323 20.65 14.2916 20.45C13.7516 20.25 13.2656 19.975 12.8336 19.625L11.3536 21.104C11.2603 21.1974 11.1456 21.2474 11.0096 21.254C10.8736 21.2607 10.7526 21.2107 10.6466 21.104C10.5406 20.9974 10.4906 20.8764 10.4966 20.741C10.5026 20.6057 10.5526 20.4907 10.6466 20.396L12.1256 18.917C11.7756 18.485 11.5006 17.999 11.3006 17.459C11.1006 16.9184 11.0006 16.3487 11.0006 15.75C11.0006 14.3654 11.4879 13.185 12.4626 12.209C13.4366 11.2324 14.6159 10.744 16.0006 10.744H19.9486C20.2419 10.744 20.4886 10.844 20.6886 11.044C20.8886 11.244 20.9883 11.4904 20.9876 11.783V15.75C20.9876 17.1347 20.5026 18.3144 19.5326 19.289C18.5626 20.2637 17.3853 20.7507 16.0006 20.75ZM13.4156 18.335C13.5223 18.4417 13.6403 18.495 13.7696 18.495C13.8989 18.495 14.0169 18.4417 14.1236 18.335L16.3536 16.104C16.4603 15.9974 16.5136 15.8794 16.5136 15.75C16.5136 15.6207 16.4603 15.5027 16.3536 15.396C16.2469 15.2894 16.1293 15.236 16.0006 15.236C15.8719 15.236 15.7539 15.2894 15.6466 15.396L13.4166 17.627C13.3099 17.7337 13.2566 17.8517 13.2566 17.981C13.2566 18.1104 13.3099 18.228 13.4166 18.334"
        fill={fill}
      />
    </svg>
  );
};

export default PreferencesIcon;