import axios from "./axios-config";

export const getPaymentStatuses = async () => {
  try {
    const response = await axios.get("/reports/statuses");
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

export const getSubscriptionStatuses = async () => {
  try {
    const response = await axios.get("/reports/statuses/subscription");
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

export const getPaymentTypes = async () => {
  try {
    const response = await axios.get("/reports/payment-types");
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
export const getCountries = async () => {
  try {
    const response = await axios.get("/reports/countries");
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
