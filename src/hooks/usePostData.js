import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const usePostData = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const postData = async (url, data) => {
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Assuming successful response with a message
      const response = { data: { message: "Data submitted successfully." } };
      setSuccessMessage(response.data.message);
      setIsSnackbarOpen(true);
      // You can perform any additional logic here after successful submission
    } catch (error) {
      // Handle error, if needed
      console.log(error);
    }
  };

  return {
    successMessage,
    isSnackbarOpen,
    postData,
    handleCloseSnackbar,
  };
};

export default usePostData;
