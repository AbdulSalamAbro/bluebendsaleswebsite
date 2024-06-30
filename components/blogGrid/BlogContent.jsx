import Loading from "../../pages/loading";
import Preloader from "../preloader/Preloader";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const BlogContent = ({ allBlogs, imageUrl2 }) => {
  return (
    <>
      {!allBlogs || !imageUrl2 ? (
        <Loading />
      ) : (
        <section className="latest-articles blog-contant grid">
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row">
                <LeftSide allBlogs={allBlogs} imageUrl2={imageUrl2} />
                {/* Right side  */}
                <RightSide allBlogs={allBlogs} imageUrl2={imageUrl2} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogContent;
