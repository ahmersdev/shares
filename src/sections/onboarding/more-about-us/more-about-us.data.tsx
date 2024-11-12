import { RHFAutocomplete, RHFTextField } from "@/components/react-hook-form";
import {
  COUNTRIES_DROPDOWN,
  MORE_ABOUT_US_DROPDOWN,
} from "@/constants/strings";
import { IFormArrayItem } from "@/interfaces";
import * as Yup from "yup";

export const moreAboutUsValidationSchema = Yup.object().shape({
  employmentStatus: Yup.string().required("Employment Status is Required"),
  employerName: Yup.string().trim(),
  employerAddress: Yup.string().trim(),
  countryOfEmployment: Yup.string(),
  jobTitle: Yup.string().trim(),
  employmentIndustry: Yup.string(),
  source: Yup.string().required("Source is Required"),
});

export const moreAboutUsDefaultValues = {
  employmentStatus: "",
  employerName: "",
  employerAddress: "",
  countryOfEmployment: "",
  jobTitle: "",
  employmentIndustry: "",
  source: "",
};

const EMPLOYMENT_INDUSTRY: string[] = [
  "Education",
  "Energy",
  "Healthcare",
  "Government",
  "Professional",
  "Services",
  "Food & Beverages",
  "Personal Services",
  "Finance",
  "Non Profits",
  "Technology",
  "Others",
];

const WEALTH_SOURCE: string[] = [
  "Saving From Employment Earnings",
  "Investments",
  "Winning",
  "Inheritance",
];

export const getMoreAboutUsDataArray = (
  employmentStatusWatch: string
): IFormArrayItem[] => [
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
  ...(employmentStatusWatch === MORE_ABOUT_US_DROPDOWN.EMPLOYED ||
  employmentStatusWatch === MORE_ABOUT_US_DROPDOWN.SELF_EMPLOYED
    ? [
        {
          id: 2,
          componentProps: {
            name: "employerName",
            label: "What Is Your Employer Name?",
            placeholder: "Enter Employer Name",
          },
          component: RHFTextField,
        },
        {
          id: 3,
          componentProps: {
            name: "employerAddress",
            label: "What Is Your Employer’s Address?",
            placeholder: "Enter Employer Address",
          },
          component: RHFTextField,
        },
        {
          id: 4,
          componentProps: {
            name: "countryOfEmployment",
            label: "Country of Employment",
            placeholder: "Select Option",
            options: COUNTRIES_DROPDOWN,
          },
          component: RHFAutocomplete,
        },
        {
          id: 5,
          componentProps: {
            name: "jobTitle",
            label: "What Is Your Job Title?",
            placeholder: "Enter Job Title",
          },
          component: RHFTextField,
        },
        {
          id: 6,
          componentProps: {
            name: "employmentIndustry",
            label: "What Is Your Employment Industry?",
            placeholder: "Select Option",
            options: EMPLOYMENT_INDUSTRY,
          },
          component: RHFAutocomplete,
        },
      ]
    : []),
  {
    id: 7,
    componentProps: {
      name: "source",
      label: "Wealth Source",
      placeholder: "Select Option",
      options: WEALTH_SOURCE,
    },
    component: RHFAutocomplete,
  },
];
