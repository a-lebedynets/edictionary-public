function required(field) {
  return (value) => !!(value && value.length) || `${field} field is required`;
}
export {
  required as r
};
