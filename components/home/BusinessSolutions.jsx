import BusinessSolutionsCard from "../cards/BusinessSolutionsCard";
import { business_solutions_data } from "./homeData";
const BusinessSolutions = ({ featuresData }) => {
  return (
    <section className="solutions-business business_solutions">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Features</h5>
                <h3 className="title">
                  Maximize Your ROI with a Bendblue Consultant
                </h3>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {featuresData.map((item, id) => (
              <div key={id} className="col-lg-4 col-md-6 mt-5">
                <BusinessSolutionsCard singleBusiness={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
