import Image from "next/image";
import Link from "next/link";
import get_start from "/public/images/get-start.png";

const Ready = ({ heading, text, icon, btn }) => {
  return (
    <section className="get-start wow fadeInUp ready_div">
      <div className="overlay">
        <div className="container">
          <div className="col-12">
            <div className="get-content">
              <div className="section-text section_text_ready">
                {heading ? (
                  <h6 className="title" style={{ color: "white" }}>
                    {heading}
                  </h6>
                ) : (
                  <></>
                )}
                <h3 className="title">{text}</h3>
              </div>
              {btn ? (
                <Link href="/register" className="cmn-btn">
                  Start a Conversation
                </Link>
              ) : (
                <></>
              )}
              {icon ? <Image src={get_start} alt="get start" /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
