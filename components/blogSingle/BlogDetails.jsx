import { getBlogs } from "../../lib/contentful/getBlogs";
import { useEffect, useState } from "react";
import RichText from "../../lib/contentful/ui/RichText";
import Loading from "../../pages/loading";

const BlogDetails = ({ blogTitle }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [singleBlogDesc, setSingleBlogDesc] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [imageUrl2, setImageUrl2] = useState([]);
  const [matchingImage, setMatchingImage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBlogs();
        const cleanedData = result.cleanedData || [];
        const imageTitleAndUrl = result.imageTitleAndUrl || [];

        setAllBlogs(cleanedData);

        const foundBlog = cleanedData.find(
          (item) => item.blogTitle === blogTitle
        );
        if (foundBlog) {
          setSingleBlog(foundBlog);

          const matchingImg = imageTitleAndUrl.find(
            (item) => item.blogTitle === foundBlog.blogTitle
          );
          if (matchingImg) {
            setMatchingImage(matchingImg.blogImageID);
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [blogTitle]);

  const isoString = singleBlog.blogDate;
  const dateObject = new Date(isoString);
  const formattedDate = dateObject.toLocaleDateString();

  if (isLoading) return <Loading />;
  if (!singleBlog) return <p>No profile data</p>;
  return (
    <>
      <section className="blog-single">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="blog-contant mb-60 text-center">
                      <h2>{singleBlog.blogTitle}</h2>
                      <div className="info d-flex justify-content-center align-items-center">
                        <div className="item d-flex align-items-center">
                          <span className="xlr">{formattedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="img-area-top"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={matchingImage}
                    alt="images"
                    style={{
                      width: "80%",
                      height: "80%",
                      marginLeft: "2%",
                    }}
                  />
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="contant-top-area">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="blog-contant mt-60">
                        {singleBlog.blogDescription.content.map(
                          (item, index) => {
                            return <RichText key={index} content={item} />;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
