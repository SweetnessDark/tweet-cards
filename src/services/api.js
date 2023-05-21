import axios from "axios";

// axios.defaults.baseURL = "https://64679964e99f0ba0a812fb3a.mockapi.io";
axios.defaults.baseURL = "https://6436f7fc8205915d34019426.mockapi.io/api/";

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?limit=9&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (id, userFollowers) => {
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers: userFollowers,
    });

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
