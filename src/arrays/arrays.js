const get = (items, index, defaultValue = null) => {
  if (index >= 0 && index <= items.length - 1) {
    return items[index];
  }

  return defaultValue;
};

export default get;
