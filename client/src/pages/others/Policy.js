import React from "react";
import DefaultLayout from "../../components/nav/Header";
import PolicyCard from "../../components/others/policy/Policy";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const Policy = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Policy"></PageTitle>
      <div className="container-fluid" data-aos="fade-right">
      <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers pageheader="Privacy Policy"></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PolicyCard></PolicyCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Policy;
