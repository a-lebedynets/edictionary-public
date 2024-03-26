import { y as computed } from "./index-69785e9f.js";
function useFilterByKey(options) {
  const { filterValue, key, list } = options;
  return computed(() => {
    if (filterValue.value) {
      const lowerFilterValue = filterValue.value.toLowerCase();
      return list.value.filter((i) => i[key].toLowerCase().includes(lowerFilterValue));
    }
    return list.value;
  });
}
export {
  useFilterByKey as u
};
