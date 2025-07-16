import axios from "./axios-config";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users/all");
    return { status: "success", response };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const getUserData = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    return { status: "success", response };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const userStatusUpdate = async (data) => {
  try {
    const response = await axios.post("/users/changeUserStatus", data);

    return response;
  } catch (error) {
    console.error("Error updating user status:", error);
  }
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(`/auth/register`, data);

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.post(`/users/updateUser`, {
      user_id: id,
      ...data,
    });

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get(`/users/roles`);

    return { status: "success", response };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};
