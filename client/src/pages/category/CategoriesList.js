import React from "react";
import DefaultLayout from "../../components/nav/Header";
import CategoriesListCard from "../../components/category/CategoryList";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const CategoriesList = () => {
  return (
    <DefaultLayout>
    <PageTitle title="Countries"></PageTitle>
      <div className="container-fluid">
      {/* <div className="row">
      <div className="col-md-12">
      <div className="rotated-parent">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <div className="h-75 p-5">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_qhrndegx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rotated-text-part">
              <h1 data-aos="slide-right">
                <b>COUNTRIES</b>
              </h1>
              <p data-aos="slide-left">
                UK, <b> USA</b> , CANADA ....
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      </div> */}
        <div className="row gx-0">
          <div className="col-md-12" >
            <HeroOthers></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" >
            <CategoriesListCard></CategoriesListCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CategoriesList;
