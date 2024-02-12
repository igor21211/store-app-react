import React, { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AlertProps {
  erorrMsg: string;
  setErorr: (errorMsg: string) => void;
}

const Alert: React.FC<AlertProps> = ({ erorrMsg, setErorr }) => {
  useEffect(() => {
    if (
      (erorrMsg.includes("Error") && erorrMsg) ||
      erorrMsg.includes("failed") ||
      erorrMsg.includes("404")
    ) {
      toast.error(erorrMsg);
      setErorr("");
    }

    if (erorrMsg.includes("scuccess")) {
      toast.success(erorrMsg);
      setErorr("");
    }
  }, [erorrMsg, setErorr]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
  );
};

export default Alert;
