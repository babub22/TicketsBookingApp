export function getNormalDate(date) {
  if (!date) {
    return "";
  }

  const newDate = new Date(date);

  return newDate.toLocaleDateString() + " " + newDate.toLocaleTimeString();
}
