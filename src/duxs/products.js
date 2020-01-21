import autodux from "autodux";

const initial = {
  loading: false,
  error: null,
  data: []
};

const productsDux = autodux({
  slice: "products",
  initial,
  actions: {
    fetch: state => state
  }
});

export default productsDux;
