import axios from "axios";

const URL: string = "http://localhost:3100/api/v1";
export const createFreeMoAccount = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/create-user-freemo`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const createBroMoAccount = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/create-user-bromo`, data)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const loginwithcode = async (uniqueCode: any) => {
  try {
    return axios.get(`${URL}/api/company/${uniqueCode}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
