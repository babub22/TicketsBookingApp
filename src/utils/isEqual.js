export function isEqual(item1, item2) {
  if (!item1 || !item2) {
    return false;
  }

  return item1.toLowerCase() === item2.toLowerCase();
}
