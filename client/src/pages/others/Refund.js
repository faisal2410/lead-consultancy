import React from "react";
import DefaultLayout from "../../components/nav/Header";
import RefundCard from "../../components/others/refund/Refund";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const Terms = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Refund"></PageTitle>
      <div className="container-fluid" data-aos="fade-right">
      <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers pageheader="Refund Policy"></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <RefundCard></RefundCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Terms;
