const get = (key) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const clear = () => {
  return localStorage.clear();
};

export { get, set, remove, clear };
