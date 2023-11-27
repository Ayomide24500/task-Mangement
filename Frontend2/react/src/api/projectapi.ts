import axios from "axios";

const URL = "http://localhost:3100/api/v1/";

export const createProject = async (userID: any, data: any) => {
  try {
    const response = await axios.post(`${URL}/create-project/${userID}`, data);
    return response.data.projectID;
  } catch (error) {}
};

export const viewUserProject = async () => {
  try {
    return await axios.get(`${URL}/view-user-project`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const viewProjectOne = async (projectID: any) => {
  try {
    return await axios
      .get(`${URL}/view-project/${projectID}`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    return error;
  }
};
