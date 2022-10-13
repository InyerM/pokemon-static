type Capitalize = (str: string) => string;

export const capitalize: Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
