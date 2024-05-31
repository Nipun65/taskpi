import axios from "axios";

const getAnswer = async (payload) => {
  const apiUrl = "http://104.154.83.9:5000/slack/generate";
  try {
    const result = await axios.post(apiUrl, payload);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export { getAnswer };
