type LocalStorageItem = "CurrentUser" | "Users" | "Cases";

export const getLocalStorageItem = (key: LocalStorageItem) => {
  const localStorageData = localStorage.getItem(key);
  if (!localStorageData) return;
  return JSON.parse(localStorageData);
};

export const setLocalStorageItem = (key: LocalStorageItem, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const incrementLocalStorageItem = (
  key: LocalStorageItem,
  value: any
) => {
  const currentItem = getLocalStorageItem(key) || [];
  currentItem.push(value);
  const localStorageData = JSON.stringify(currentItem);
  localStorage.setItem(key, localStorageData);
};

export const removeLocalStorageItem = (key: LocalStorageItem) => {
  localStorage.removeItem(key);
};
