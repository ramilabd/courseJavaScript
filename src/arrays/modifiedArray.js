const swap = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const tmp = arr[0];
  arr[0] = arr.pop();
  arr.push(tmp);

  return arr;
};

export default swap;
