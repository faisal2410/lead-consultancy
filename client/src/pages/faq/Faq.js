import React from "react";
import DefaultLayout from "../../components/nav/Header";
import FaqCard from "../../components/faq/Faq";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const Faq = () => {
 
  return (
    <DefaultLayout>
    <PageTitle title="FAQ"></PageTitle>
      <div className="container-fluid">
       
        <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FaqCard></FaqCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Faq;
