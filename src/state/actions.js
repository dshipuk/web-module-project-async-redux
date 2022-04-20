import axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get("https://api.ipify.org/?format=json");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
