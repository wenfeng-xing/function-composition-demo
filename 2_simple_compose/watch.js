const watch = (comment) => (value) => {
  console.log(comment, value);
  return value;
};

module.exports = {
  watch
};
