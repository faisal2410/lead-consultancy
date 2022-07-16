import React from "react";
import DefaultLayout from "../../components/nav/Header";
import AboutCard from "../../components/others/about/About";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const About = () => {
  return (
    <DefaultLayout>
    <PageTitle title="About"></PageTitle>
      <div className="container-fluid" data-aos="fade-right">
        <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers pageheader="About Us"></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AboutCard></AboutCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
