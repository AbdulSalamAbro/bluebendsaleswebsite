import Link from "next/link";
import Partners from "./Partners";
import Image from "next/image";
import arrow_right from "/public/images/icon/arrow-right.png";

const HomeBanner = ({ heading, desc, partnerData }) => {
  console.log("heading: ", heading);
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">
                <div className="main-content">
                  <div className="top-area section-text justify-content-center">
                    <h2 className="title">{heading}</h2>
                    <p className="lr">{desc}</p>
                  </div>
                  <div className="bottom-area">
                    <Link href="/contact" className="cmn-btn">
                      Talk to us today
                    </Link>
                    <Link
                      href="/contact"
                      className="second"
                      style={{ color: "black" }}
                    >
                      Learn more
                      <Image
                        src={arrow_right}
                        alt="arrow"
                        style={{ marginLeft: "5px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners slider here */}
      <br />
      <Partners partnerData={partnerData} />
    </section>
  );
};

export default HomeBanner;
