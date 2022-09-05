import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const truncateText = (string = '', maxLength = 60) =>
  string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string

export const formatTime = (timestamp) => dayjs
  .unix(Number(timestamp))
  .tz('Asia/Kolkata')
  .format('MMM DD, YYYY hh:mm A')
  .concat(' IST');
