export function validateSearchQuery({ to, from, departure }) {
  let error = [];

  if (!from) {
    error.push({ type: "From", text: "Choose where you are flying from" });
  }
  if (!to) {
    error.push({ type: "To", text: "Choose where you are flying to" });
  }
  if (!departure) {
    error.push({ type: "Departure", text: "Select the departure date" });
  }

  return error;
}
