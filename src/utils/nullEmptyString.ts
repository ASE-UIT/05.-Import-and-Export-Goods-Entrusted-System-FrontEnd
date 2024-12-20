// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nullEmptyString = <T extends Record<string, any>>(obj: T): T => {
  const result = {} as T;

  for (const key in obj) {
    if (obj[key] === '') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = null as any;
    } else {
      result[key] = obj[key];
    }
  }

  return result;
};

export default nullEmptyString;
