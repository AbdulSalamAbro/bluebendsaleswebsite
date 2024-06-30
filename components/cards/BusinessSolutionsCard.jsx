const BusinessSolutionsCard = ({ singleBusiness }) => {
  const { featureHeading, featureDescription, featureImage } = singleBusiness;
  return (
    <div className="single-box text-center">
      <div className="thumb d-flex justify-content-center align-items-center">
        <img src={featureImage} alt="checking" height={80} width={80} />
      </div>
      <div className="content">
        <h5>{featureHeading}</h5>
        <p>{featureDescription}</p>
      </div>
    </div>
  );
};

export default BusinessSolutionsCard;
