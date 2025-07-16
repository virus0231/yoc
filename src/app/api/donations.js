import axios from "./axios-config";

export const getDonations = async (data) => {
  try {
    const response = await axios.post("/donation", data);
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

export const getDonationDetails = async (tid) => {
  try {
    const response = await axios.get(`/donation/details/${tid}`);
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
