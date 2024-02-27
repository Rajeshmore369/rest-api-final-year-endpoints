import * as api from "../api";

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_BLOGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
