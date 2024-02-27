
export default (blogs = [], action) => {
  switch (action.type) {
    case "FETCH_BLOGS":
      return action.payload;
      break;
    default:
      return blogs;
  }
};
