import axios from "./axios-config";

export const getEmployees = async (data) => {
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
