/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const clsx = (...values: any[]) => {
  let i = 0;
  let str = '';

  while (i < values.length) {
    const value = values[i++];

    if (typeof value === 'string' && value) {
      str += str ? ` ${value}` : value;
    }
  }

  return str;
};
