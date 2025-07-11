import axios from "./axios-config";

export const getAppeals = async () => {
  try {
    const response = await axios.get("/causes/appeals");
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

export const getAppeal = async (appealId) => {
  try {
    const response = await axios.get(`/causes/appeal/${appealId}`);
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

export const createAppeal = async (data) => {
  try {
    const response = await axios.post(`/causes/appeal/add`, data);
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

export const updateAppeal = async (appealId, data) => {
  console.log("appealId", appealId);
  console.log("data", data);

  try {
    const response = await axios.put(`/causes/appeal/${appealId}`, data);
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
    const response = await axios.get("/causes/countries");
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

export const getCountry = async (id) => {
  try {
    const response = await axios.get(`/causes/country/${id}`);
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

export const createCountry = async (data) => {
  try {
    const response = await axios.post(`/causes/m-country`, data);

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("/causes/categories");
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

export const getCategory = async (id) => {
  try {
    const response = await axios.get(`/causes/category/${id}`);
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

export const createCategory = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`/causes/m-category`, data);

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const updateCategory = async (data) => {
  try {
    const response = await axios.post(`/causes/m-category`, data);

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const updateCountry = async (data) => {
  try {
    const response = await axios.post(`/causes/m-country`, data);

    return { status: "success", message: response.data.message };
  } catch (error) {
    return {
      status: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again",
    };
  }
};

export const getAppealAmounts = async (id) => {
  console.log(id);

  try {
    const response = await axios.get(`/causes/amounts/${id}`);
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

export const getAppealFunds = async (id) => {
  try {
    const response = await axios.get(`/causes/funds/${id}`);
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

export const updateAmounts = async (id, data) => {
  try {
    const response = await axios.put(`/causes/amounts/${id}`, data);

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

export const updateFunds = async (id, data) => {
  try {
    const response = await axios.post(`/causes/${id}/update_funds`, data);

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
