import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import footer_Illu_left from "/public/images/footer-Illu-left.png";
import footer_Illu_right from "/public/images/footer-Illu-right.png";
import Logo from "/public/images/bendblue_logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container pt-120">
        <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box">
              <Link href="/" className="logo">
                <Image src={Logo} alt="logo" />
              </Link>
              <p>
                A modern, technology-first bank built for you and your growing
                business.
              </p>
              <div className="social-link d-flex align-items-center">
                {/* Socials links here */}
                {/* <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
                    [FaLinkedinIn, "/"],
                    [FaInstagram, "/"],
                  ]}
                /> */}
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Company</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/methodology">Methodology</Link>
                </li>
                <li>
                  <Link href="/blog-grid">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Support</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-8">
            <div className="footer-box">
              <h5>Subscribe</h5>
              <div className="form-group">
                <button className="cmn-btn" style={{ width: "200px" }}>
                  <Link href={"/blog-grid"}>Read Blogs</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="left">
                <p>
                  {" "}
                  Copyright © <Link href="/">bendblue</Link>
                </p>
              </div>
              <div className="right">
                {/* <Link href="#" className="cus-bor">
                  Privacy{" "}
                </Link>
                <Link href="#">Terms &amp; Condition </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-area">
        <Image src={footer_Illu_left} className="left" alt="Images" />
        <Image src={footer_Illu_right} className="right" alt="Images" />
      </div>
    </div>
  );
};

export default Footer;
