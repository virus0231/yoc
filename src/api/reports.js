import axios from "./axios-config";

export const getDailyReport = async (data) => {
  try {
    const response = await axios.post("/reports/daily", data);
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


export const getMonthlyReport = async (data) => {
  try {
    const response = await axios.post("/reports/monthly", data);
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


export const getDonorReport = async (data) => {
  try {
    const response = await axios.post("/reports/donor", data);
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


export const getDonorDetailReport = async (data) => {
  try {
    const response = await axios.post("/reports/donor/detail", data);
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

export const getAppealReport = async (data) => {
  try {
    const response = await axios.post("/reports/appeal", data);
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

export const getEmployeeReport = async (data) => {
  try {
    const response = await axios.post("/reports/employee", data);
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

export const getKindfullReport = async (data) => {
  try {
    const response = await axios.post("/reports/kindfull",);
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