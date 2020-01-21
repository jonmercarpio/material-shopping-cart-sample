import autodux from "autodux";

const initial = {
  products: []
};

const cartDux = autodux({
  slice: "cart",
  initial,
  actions: {
    add: state => state,
    remove: state => state
  }
});

export default cartDux;
