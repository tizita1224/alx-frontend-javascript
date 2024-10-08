export default function setFromArray(arr) {
  arr.pop();
  const set = new Set(arr);

  return set;
}
