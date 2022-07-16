import React, { useState,useEffect } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import DefaultLayout from "../../components/nav/Header";
import PageTitle from "../../components/pageTitle/PageTitle";

const Register = ({history}) => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
 
    await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
 
    window.localStorage.setItem("emailForRegistration", email);
 
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration`
    );
 
    setEmail("");
  };
 
  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control login-input p-2 w-100"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn reg-btn">
        Register
      </button>
    </form>
  );

  return (
    <DefaultLayout>
    <PageTitle title="Register"></PageTitle>
    <div className="container-fluid p-5" data-aos="fade-right">
      <div className="row">
        <div className="col-md-6" >
          <h4 className="login-heading">Register</h4>
          {registerForm()}
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

export default Register;

