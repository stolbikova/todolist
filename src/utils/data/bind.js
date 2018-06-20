export const bind = (obj, methodsNames) => {
  methodsNames.forEach((method) => {
    obj[method] = obj[method].bind(obj);
  });
};