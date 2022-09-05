export const truncateText = (string = '', maxLength = 60) =>
  string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string

export const formatTime = (dateTime) => dateTime
