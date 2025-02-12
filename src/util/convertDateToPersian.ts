export function convertDateToPersian(date: string) {
  return new Date(date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    calendar: 'persian',
  });
}
