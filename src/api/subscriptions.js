import axios from "./axios-config";

export const getSubscriptions = async (data) => {
  try {
    const response = await axios.post("/schedule", data);
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

export const getSubscriberDetails = async (id) => {
  try {
    const response = await axios.get(`/schedule/details/${id}`);
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

export const getSubscriptionDetails = async (order_id, amount) => {
  try {
    const response = await axios.get(
      `/schedule/details/transactions/${order_id}/${amount}`
    );
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
