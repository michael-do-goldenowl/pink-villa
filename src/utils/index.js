export const truncateText = (string = '', maxLength = 55) =>
  string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string

export const formatTime = (dateTime) => dateTime
