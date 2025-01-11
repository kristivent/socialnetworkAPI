const dateFormat = (timestamp: string | number | Date): string => {
  return new Date(timestamp).toLocaleString();
};

export default dateFormat;