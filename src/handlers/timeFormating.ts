import { format } from 'date-fns'


export const getTimeFromMins = (mins: any) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60
  return `${hours}ч ${minutes}м`
}

export const getTimeFormat = (date: string | number | Date) => {
  try {
    return format(new Date(date), 'HH:mm');
  } catch (error) {
    console.error(error);
    return '';
  }
}
