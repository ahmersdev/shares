import { IAssetsProps } from "@/interfaces";

const BookmarksIcon = ({ fill = "#B0BABF" }: IAssetsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5.25C8.80109 5.25 8.61032 5.32902 8.46967 5.46967C8.32902 5.61032 8.25 5.80109 8.25 6C8.25 6.19891 8.32902 6.38968 8.46967 6.53033C8.61032 6.67098 8.80109 6.75 9 6.75H15C15.1989 6.75 15.3897 6.67098 15.5303 6.53033C15.671 6.38968 15.75 6.19891 15.75 6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H9Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.943 1.25C9.87 1.25 8.237 1.25 6.961 1.423C5.651 1.601 4.606 1.975 3.785 2.805C2.965 3.634 2.597 4.687 2.421 6.007C2.25 7.296 2.25 8.945 2.25 11.041V16.139C2.25 17.647 2.25 18.84 2.346 19.739C2.441 20.627 2.644 21.428 3.226 21.964C3.692 22.394 4.282 22.664 4.912 22.737C5.699 22.827 6.434 22.451 7.159 21.937C7.892 21.419 8.781 20.632 9.903 19.64L9.939 19.608C10.459 19.148 10.811 18.838 11.105 18.622C11.389 18.415 11.562 18.34 11.708 18.31C11.9008 18.272 12.0992 18.272 12.292 18.31C12.438 18.34 12.612 18.415 12.895 18.622C13.189 18.837 13.541 19.148 14.061 19.608L14.098 19.64C15.219 20.632 16.108 21.419 16.841 21.938C17.566 22.451 18.301 22.827 19.088 22.737C19.7177 22.6646 20.3081 22.3939 20.774 21.964C21.355 21.428 21.559 20.627 21.654 19.739C21.75 18.84 21.75 17.647 21.75 16.139V11.041C21.75 8.945 21.75 7.295 21.579 6.007C21.403 4.687 21.035 3.634 20.215 2.805C19.394 1.975 18.349 1.601 17.039 1.423C15.763 1.25 14.13 1.25 12.057 1.25H11.943ZM4.85 3.86C5.347 3.358 6.022 3.065 7.162 2.91C8.325 2.752 9.856 2.75 11.999 2.75C14.142 2.75 15.673 2.752 16.836 2.91C17.976 3.065 18.651 3.358 19.148 3.86C19.646 4.363 19.937 5.048 20.091 6.205C20.247 7.383 20.249 8.932 20.249 11.098V16.091C20.249 17.657 20.248 18.771 20.162 19.579C20.072 20.409 19.909 20.72 19.757 20.861C19.523 21.076 19.229 21.211 18.917 21.246C18.717 21.269 18.383 21.192 17.707 20.714C17.049 20.247 16.22 19.516 15.054 18.484L15.028 18.461C14.54 18.03 14.136 17.673 13.779 17.411C13.406 17.139 13.03 16.929 12.587 16.84C12.1989 16.7619 11.7991 16.7619 11.411 16.84C10.968 16.93 10.591 17.139 10.219 17.412C9.862 17.672 9.458 18.03 8.97 18.461L8.944 18.484C7.778 19.516 6.949 20.247 6.291 20.714C5.615 21.192 5.281 21.269 5.081 21.246C4.76726 21.21 4.47309 21.0752 4.241 20.861C4.089 20.72 3.925 20.409 3.837 19.579C3.75 18.77 3.749 17.657 3.749 16.091V11.097C3.749 8.932 3.751 7.383 3.907 6.205C4.061 5.048 4.352 4.363 4.85 3.86Z"
        fill={fill}
      />
    </svg>
  );
};

export default BookmarksIcon;
