import { IAssetsProps } from "@/interfaces";

const HomeInvestmentsIcon = ({
  fill = "#F5F0EB",
  stroke = "#545452",
}: IAssetsProps) => {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.666504" width="60" height="60" rx="30" fill={fill} />
      <g clipPath="url(#clip0_177_180)">
        <path
          d="M31.4771 44.8548V32.8548C31.4771 32.0971 31.7781 31.3703 32.3139 30.8345C32.8497 30.2987 33.5764 29.9977 34.3342 29.9977C35.092 29.9977 35.8187 30.2987 36.3545 30.8345C36.8903 31.3703 37.1913 32.0971 37.1913 32.8548V39.1405H41.7628C42.9752 39.1405 44.1379 39.6222 44.9953 40.4795C45.8526 41.3368 46.3342 42.4995 46.3342 43.712V44.8548"
          fill={stroke}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4048 24.112C14.4074 22.6563 14.7243 21.2183 15.3339 19.8964C15.9435 18.5744 16.8313 17.3997 17.9368 16.4526C19.0422 15.5055 20.3392 14.8082 21.739 14.4086C23.1388 14.0089 24.6083 13.9163 26.0472 14.137C27.4861 14.3577 28.8604 14.8865 30.076 15.6874C31.2916 16.4882 32.32 17.5421 33.0908 18.777C33.8616 20.0119 34.3565 21.3987 34.5419 22.8425C34.7273 24.2864 34.5986 25.7533 34.1648 27.1428C32.6792 27.1868 31.2691 27.8079 30.2339 28.8743C29.1986 29.9407 28.6196 31.3686 28.6196 32.8548V33.3554C27.0801 34.0395 25.394 34.328 23.7145 34.1947C22.0351 34.0614 20.4156 33.5105 19.0032 32.5921C17.5909 31.6737 16.4304 30.4168 15.6273 28.9359C14.8243 27.4549 14.404 25.7967 14.4048 24.112ZM24.5145 16.7108C25.3054 16.7108 25.9431 17.3508 25.9431 18.1394V18.7863C26.505 18.915 27.0253 19.1837 27.4557 19.5673C27.8861 19.9509 28.2125 20.437 28.4048 20.9805C28.4674 21.1575 28.4945 21.345 28.4846 21.5325C28.4747 21.7199 28.428 21.9035 28.3471 22.0729C28.2663 22.2423 28.1528 22.3941 28.0133 22.5196C27.8738 22.6451 27.7109 22.742 27.5339 22.8045C27.357 22.8671 27.1694 22.8942 26.982 22.8844C26.7946 22.8745 26.6109 22.8277 26.4416 22.7469C26.2722 22.666 26.1204 22.5526 25.9949 22.413C25.8693 22.2735 25.7725 22.1106 25.7099 21.9337C25.6712 21.824 25.5993 21.7291 25.5044 21.662C25.4094 21.5948 25.2959 21.5588 25.1796 21.5588H23.6368C23.5515 21.5603 23.4696 21.5929 23.4067 21.6505C23.3438 21.7082 23.3041 21.7868 23.2951 21.8716C23.2861 21.9565 23.3084 22.0417 23.3579 22.1112C23.4074 22.1807 23.4805 22.2298 23.5636 22.2491L25.9111 22.7611C26.67 22.928 27.3495 23.3482 27.8378 23.9526C28.3261 24.557 28.5942 25.3096 28.5979 26.0866C28.6017 26.8636 28.3408 27.6188 27.8583 28.2278C27.3758 28.8369 26.7003 29.2636 25.9431 29.4377V30.0868C25.9431 30.4657 25.7926 30.8291 25.5247 31.097C25.2567 31.3649 24.8934 31.5154 24.5145 31.5154C24.1356 31.5154 23.7723 31.3649 23.5043 31.097C23.2364 30.8291 23.0859 30.4657 23.0859 30.0868V29.44C22.5246 29.3103 22.0051 29.0413 21.5752 28.6578C21.1454 28.2742 20.8191 27.7886 20.6265 27.2457C20.5001 26.8883 20.5208 26.4954 20.6842 26.1533C20.8475 25.8113 21.14 25.5481 21.4974 25.4217C21.8547 25.2953 22.2477 25.316 22.5897 25.4794C22.9318 25.6427 23.195 25.9352 23.3214 26.2925C23.3604 26.402 23.4323 26.4968 23.5272 26.5638C23.6221 26.6309 23.7354 26.6671 23.8516 26.6674H25.1796C25.3166 26.664 25.4476 26.611 25.5483 26.5182C25.649 26.4254 25.7126 26.2991 25.7271 26.1629C25.7417 26.0268 25.7062 25.8899 25.6274 25.7779C25.5485 25.666 25.4316 25.5865 25.2985 25.5543L22.9534 25.04C22.2269 24.8816 21.5781 24.4758 21.1178 23.892C20.6576 23.3081 20.4145 22.5824 20.4301 21.8391C20.4458 21.0958 20.7192 20.3811 21.2037 19.8171C21.6881 19.2531 22.3535 18.875 23.0859 18.7474V18.1394C23.0859 17.3485 23.7259 16.7108 24.5145 16.7108ZM31.4768 32.8548V45.9977H46.3339V43.712C46.3339 42.4995 45.8523 41.3368 44.995 40.4795C44.1377 39.6222 42.9749 39.1405 41.7625 39.1405H37.1911V32.8548C37.1911 32.0971 36.8901 31.3703 36.3542 30.8345C35.8184 30.2987 35.0917 29.9977 34.3339 29.9977C33.5762 29.9977 32.8494 30.2987 32.3136 30.8345C31.7778 31.3703 31.4768 32.0971 31.4768 32.8548Z"
          fill={stroke}
        />
      </g>
      <defs>
        <clipPath id="clip0_177_180">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(14.3335 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeInvestmentsIcon;
