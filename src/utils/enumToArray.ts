export const enumToArray = (values: Record<string, any>): Array<string> =>
  Object.keys(values).map(function (type) {
    return values[type];
  });
