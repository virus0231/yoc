import axios from "axios";

const base = `${process.env.API_BASE_URL}`;

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${base}/auth/login`, credentials);

    return {
      status: "success",
      token: response?.data?.data[0].token,
      id: response?.data?.data[0].id,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const requestOTP = async (email) => {
  try {
    const response = await axios.post(`${base}/auth/request-otp`, email);

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

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(`${base}/auth/reset-password`, data);

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

export const userLogout = () => {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("userId");
  window.location.href = "/";
};
