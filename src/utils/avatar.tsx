export const getInitials = (name: any) => {
  if (!name) return "";
  const initials = name
    .split(" ")
    .map((n: any) => n[0])
    .join("")
    .toUpperCase();
  return initials.substring(0, 2);
};

export const truncateText = (text = "---", sliceLimit = 20) => {
  return text?.length > sliceLimit
    ? `${text?.slice?.(0, sliceLimit)} ...`
    : text;
};
