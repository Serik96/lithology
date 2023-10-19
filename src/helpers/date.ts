export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const formatTime = (dateStr: string, withoutSeconds: boolean = false) => {
  const date = new Date(dateStr);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  if (withoutSeconds) {
    return `${hours}:${minutes}`;
  } else {
    return `${hours}:${minutes}:${seconds}`;
  }
};
