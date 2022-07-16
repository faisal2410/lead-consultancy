import React from "react";
import DefaultLayout from "../../components/nav/Header";
import MissionCard from "../../components/others/mission/Mission";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const Mission = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Mission"></PageTitle>
      <div className="container-fluid" data-aos="fade-right">
      <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers pageheader="Our Mission and Vission"></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <MissionCard></MissionCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Mission;
