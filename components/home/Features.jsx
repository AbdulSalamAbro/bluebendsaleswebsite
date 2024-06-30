const Features = ({ paraData }) => {
  return (
    <>
      {paraData.map((item, index) => {
        return (
          <>
            {index % 2 === 0 ? (
              <section className="features-section" key={index}>
                <div className="overlay pt-120">
                  <div className="container wow fadeInUp">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="top-section">
                          <h6
                            className="sub-title"
                            style={{ textTransform: "uppercase" }}
                          >
                            {item.miniHeading}
                          </h6>
                          <h4 className="title">{item.mainHeading}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 text-end">
                        <div className="img-area">
                          <img src={item.image} alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="features-section second" key={index}>
                <div className="overlay pt-120 pb-120">
                  <div className="container wow fadeInUp">
                    <div className="row">
                      <div className="col-lg-6 text-start cus-ord">
                        <div className="img-area">
                          <img src={item.image} alt="image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="top-section">
                          <h6
                            className="sub-title"
                            style={{ textTransform: "uppercase" }}
                          >
                            {item.miniHeading}
                          </h6>
                          <h4 className="title">{item.mainHeading}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        );
      })}
    </>
  );
};

export default Features;
