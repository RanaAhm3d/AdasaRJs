export function formatFullDate(dateString) {
  return new Date(dateString).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDayMonth(dateString) {
  return new Date(dateString).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });
}
