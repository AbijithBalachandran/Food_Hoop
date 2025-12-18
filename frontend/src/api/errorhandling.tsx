import axios from "axios";
import { toast } from "react-toastify";

export const handleApiError = (error: unknown, fallbackMsg: string) => {
  if (axios.isAxiosError(error) && error.response) {
    const message = error.response.data?.message || fallbackMsg;
    toast.error(message);
  } else {
    toast.error(fallbackMsg);
  }
  throw error;
};
