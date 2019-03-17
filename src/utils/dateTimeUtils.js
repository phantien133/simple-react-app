
export const convertTimeStampToDate = (timestamp) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  options.timeZone = 'UTC';
  return new Date(timestamp || new Date().getTime()).toLocaleDateString(
    'en-US',
    options,
  );
};
