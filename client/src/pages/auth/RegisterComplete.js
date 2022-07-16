import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch} from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";
import DefaultLayout from "../../components/nav/Header";
import PageTitle from "../../components/pageTitle/PageTitle";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await firebase.auth().signInWithEmailLink(
        email,
        window.location.href
      );
      //   console.log("RESULT", result);
      if (result.user.emailVerified) {
        // remove user email fom local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = firebase.auth().currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        console.log("user", user, "idTokenResult", idTokenResult);

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));

        // redirect
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control login-input" value={email} disabled />

      <input
        type="password"
        className="form-control login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br />
      <button type="submit" className="btn reg-btn w-100">
        Complete Registration
      </button>
    </form>
  );

  return (
    <DefaultLayout>
    <PageTitle title="Register Complete"></PageTitle>
    <div className="container-fluid p-5" data-aos="fade-right">
      <div className="row">
        <div className="col-md-6 ">
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
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

export default RegisterComplete;
