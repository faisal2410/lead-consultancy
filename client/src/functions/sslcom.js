import axios from "axios";

export const createPaymentIntent = (authtoken) =>
  axios.post(
    `${process.env.REACT_APP_API}/ssl-request`,
    {},
    {
      headers: {
        authtoken,   
      
      },
    }
  );
