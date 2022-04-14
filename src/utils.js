const MAX_LENGTH = 10;

export const addToArray = (item, array) => {
  if (array.length === MAX_LENGTH) {
    array.pop();
  }
  array.splice(0, 0, item);
  return array;
};
