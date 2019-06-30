const compose = (...funcs) => comp => funcs.reduceRight(
  (wrapped, f) => f(wrapped), comp,
);

export default compose;
