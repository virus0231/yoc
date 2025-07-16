import axios from "./axios-config";

export const getPermissions = async () => {
  try {
    const response = await axios.get("/permissions/get");

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

export const getPermissionsByRole = async (id) => {
  try {
    const response = await axios.get(`/permissions/get/${id}`);
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

export const updatePermissions = async (data) => {
  try {
    const response = await axios.post(`/permissions/role/add`, data);
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
