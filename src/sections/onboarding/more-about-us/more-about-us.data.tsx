import RHFAutocomplete from "@/components/react-hook-form/rhf-autocomplete";
import { MORE_ABOUT_US_DROPDOWN } from "@/constants/strings";

export const getMoreAboutUsDataArray = () => [
  {
    id: 1,
    componentProps: {
      name: "employmentStatus",
      label: "What is your employment status?",
      placeholder: "Select Option",
      options: [
        MORE_ABOUT_US_DROPDOWN.EMPLOYED,
        MORE_ABOUT_US_DROPDOWN.SELF_EMPLOYED,
        MORE_ABOUT_US_DROPDOWN.STUDENT,
        MORE_ABOUT_US_DROPDOWN.HOMEMAKER,
        MORE_ABOUT_US_DROPDOWN.RETIRED,
      ],
    },
    component: RHFAutocomplete,
  },
];
