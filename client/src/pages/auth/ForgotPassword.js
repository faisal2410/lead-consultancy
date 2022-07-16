import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/nav/Header";
import PageTitle from "../../components/pageTitle/PageTitle";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await firebase.auth()
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  return (
    <DefaultLayout>  
    <PageTitle title="ForgetPassword"></PageTitle>
    <div className="container-fluid p-5" data-aos="fade-right">
    <div className="row">
      <div className="col-md-6">
      {loading ? (
        <h4 className="text-danger">Loading</h4>
      ) : (
        <h4 className="login-heading">Forgot Password</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <br />
        <button className="btn reg-btn" disabled={!email}>
          Submit
        </button>
      </form>

      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
    </div>
          </div>
    </DefaultLayout>
  );
};

export default ForgotPassword;
