import axios from "./axios-config";

export const getTopAppeals = async () => {
  try {
    const response = await axios.get("/dashboard/top-appeals");
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

export const getWeeklyRevenue = async () => {
  try {
    const response = await axios.get("/dashboard/weekly-revenue");
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

export const getMonthlyRevenue = async () => {
  try {
    const response = await axios.get("/dashboard/monthly-revenue");
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

export const getAppealRevenue = async () => {
  try {
    const response = await axios.get("/dashboard/appeal-revenue");
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
