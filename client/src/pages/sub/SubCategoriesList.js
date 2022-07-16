import React from "react";
import DefaultLayout from "../../components/nav/Header";
import SubCategriesListCard from "../../components/sub/SubList";
import PageTitle from "../../components/pageTitle/PageTitle";
import HeroOthers from "../../components/hero/HeroOthers";

const SubCategoriesList = () => {
  return (
    <DefaultLayout>
      <PageTitle title="City"></PageTitle>
     
      <div className="container-fluid">    
     
        <div className="row gx-0">
          <div className="col-md-12">
            <HeroOthers></HeroOthers>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SubCategriesListCard></SubCategriesListCard>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SubCategoriesList;
