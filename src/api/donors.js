import axios from "./axios-config";

export const getDonors = async () => {
  try {
    const response = await axios.get("/donor/all");
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

export const getDonor = async (id) => {
  try {
    const response = await axios.get(`/donor/${id}`);
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

export const getDonations = async (id) => {
  try {
    const response = await axios.get(`/donor/donations/${id}`);
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

export const getDonationDetail = async (id) => {
  try {
    const response = await axios.get(`/donor/donations/details/${id}`);
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

export const getSubscriptions = async (id) => {
  try {
    const response = await axios.get(`/donor/subscriptions/${id}`);
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

export const getSubscriptionDetail = async (id) => {
  try {
    const response = await axios.get(`/donor/subscriptions/details/${id}`);
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

export const updateDonor = async (data) => {
  try {
    const response = await axios.post(`/donor/updateDonor`, data);
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
