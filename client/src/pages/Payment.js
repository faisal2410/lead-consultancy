import React, { useEffect, useState } from "react";
import { createPaymentIntent } from "../functions/sslcom";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/nav/Header";

const Payment = () => {
  
  const { user } = useSelector((state) => ({ ...state }));
  const [ setClientSecret] = useState("");
  useEffect(() => {
    createPaymentIntent(user.token).then((res) => {
      console.log("create payment intent", res.data);
      setClientSecret(res.data);
    });
  }, []);
  return (
    <DefaultLayout>
      <div className="container-fluid p-5 text-center">
        <div className="row">
          <div className="col-md-12" data-aos="fade-right">
            <p>Complete your purchase</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Payment;
