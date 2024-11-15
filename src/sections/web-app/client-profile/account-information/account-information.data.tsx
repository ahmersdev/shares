export const getAccountInformationData = (data: {
  fullName: string;
  email: string;
  phoneNumber?: string;
  employmentStatus?: string;
}) => ({
  Name: data?.fullName ?? "---",
  Email: data?.email ?? "---",
  "Phone Number": data?.phoneNumber ?? "---",
  "Employment Status": data?.employmentStatus ?? "---",
});
