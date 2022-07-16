import React from "react";
import NewArrivals from "../components/home/NewArrivals";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import DefaultLayout from "../components/nav/Header";
import HeroOthers from "../components/hero/HeroOthers";
import PageTitle from "../components/pageTitle/PageTitle";
import Works from "../components/works/works";
import Services from "../components/services/Services";
import Success from "../components/success/Success";

const Home = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Home"></PageTitle>
      <div className="container-fluid ">
        <div className="row gx-0">
          <div className="col-md-12" data-aos="fade-right" >
          <HeroOthers></HeroOthers>
            <h4 className="py-0 my-0 d-flex justify-content-center  fw-bold section-title new-university-title">
            Explore Best Universities
            </h4>
            <NewArrivals  />

            <h4 className="py-0 d-flex justify-content-center display-6 fw-bold section-title" >
              Study Destinations by Country
            </h4>
            <CategoryList  />

            <h4 className="py-0 d-flex justify-content-center display-6 fw-bold section-title">
              Study Destinations by City
            </h4>
            <SubList  />

            <br />
            <br />
            <Works></Works>
            <br />  
            <Services></Services> 
           
            <br/>  
            <Success></Success>     
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
