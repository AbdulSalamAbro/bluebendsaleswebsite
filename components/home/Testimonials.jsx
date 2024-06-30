import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import quote from "/public/images/icon/quote.png";
import testomonial from "/public/images/testomonial.png";

// Import css files
import "slick-carousel/slick/slick.css";

const Next = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-prev pull-left"
      onClick={onClick}
    >
      <i>
        <BsChevronLeft />
      </i>
    </button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-next pull-right"
      onClick={onClick}
    >
      <i>
        <BsChevronRight />
      </i>
    </button>
  );
};

const Testimonials = ({ testData }) => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function () {
      return (
        <button type="button" className="dot">
          <span className="string"></span>
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Testimonials</h5>
                <h3 className="title">What our clients say about us</h3>
                <p style={{ fontSize: "16px" }}>
                  Working with Bendblue is an experience you won&apos;t soon
                  forget, but in all the best ways.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings} className="testimonials-carousel">
              {testData.map((item, index) => {
                return (
                  <div key={index} className="slide-item">
                    <div className="single-slide">
                      <div className="thumb">
                        <img
                          src={item.clientImage}
                          alt="image"
                          className="max-un"
                          height={"440px"}
                          width={"440px"}
                        />
                      </div>
                      <div className="content">
                        <div className="top-content">
                          <Image src={quote} alt="quote" />
                          {/* <h5>“I love Bendblue, they&#39;re the best”</h5> */}
                          <br />
                          <p className="xxlr">{item.clientFeedback}</p>
                        </div>
                        <div className="bottom-content">
                          <h5 className="name">{item.clientName}</h5>
                          <span className="country">
                            {" "}
                            {item.clientLocation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
