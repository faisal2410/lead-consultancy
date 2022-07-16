import React from "react";
import DefaultLayout from "../../components/nav/Header";
import TermsCard from "../../components/others/terms/Terms";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const Terms = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Terms"></PageTitle>
      <div className="container-fluid" data-aos="fade-right">
      <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers pageheader="Terms and Conditions"></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TermsCard></TermsCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Terms;
