import axios from "axios";

const monthlyPrediction = async (para) => {
  try {
    const response = await axios.get(
      "http://localhost:3001/api/prediction",
      {
        month: para,
      }
      // { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log("Error: ", err);
    throw err; // Re-throw the error to handle it in the component
  }
};
export { monthlyPrediction };
