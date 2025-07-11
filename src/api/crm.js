import axios from "./axios-config";

export const getCRMDropdownData = async () => {
  try {
    const response = await axios.get(`/crm/dropdown`);
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
