import React from "react";
import DefaultLayout from "../../components/nav/Header";
import ContactCard from "../../components/others/contact/Contact";
import PageTitle from "../../components/pageTitle/PageTitle";
import ContactInfo from "../../components/others/contact/ContactInfo";


const Contact = () => {
  return (
    <DefaultLayout>
      <PageTitle title="Contact"></PageTitle>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ContactInfo></ContactInfo>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ContactCard></ContactCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;
