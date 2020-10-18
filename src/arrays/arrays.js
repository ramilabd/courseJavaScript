export const get = (items, index, defaultValue = null) => {
  if (index >= 0 && index <= items.length - 1) {
    return items[index];
  }

  return defaultValue;
};

export const reverse = (items) => {
  const result = [];

  for (let i = items.length - 1; i >= 0; i -= 1) {
    result.push(items[i]);
  }

  return result;
};

export const reverseInPlace = (items) => {
  for (let i = 0, j = items.length - 1; i < j; i += 1, j -= 1) {
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }

  return items;
};

export const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const definition of definitions) {
    const name = definition[0];
    const description = definition[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
};
