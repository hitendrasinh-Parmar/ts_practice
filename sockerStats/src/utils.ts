export const dateStringToDate = (dateString: string): Date => {
  const dateParsed = dateString.split('/').map((value: string): number => parseInt(value));
  return new Date(dateParsed[2], dateParsed[1] - 1, dateParsed[0]);
}