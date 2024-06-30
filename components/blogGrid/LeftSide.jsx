import { useEffect, useState } from "react";
import Loading from "../../pages/loading";
import GridBlogCard from "../cards/GridBlogCard";
import Pagination from "../pagination/Pagination";
import { getBlogs } from "../../lib/contentful/getBlogs";

const LeftSide = ({ imageUrl2 }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiHandler();
        setAllBlogs(res.cleanedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const apiHandler = async () => {
    const response = await getBlogs();
    return response;
  };

  return (
    <>
      {!allBlogs.length || !imageUrl2 ? (
        <Loading />
      ) : (
        <div className="col-md-8">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="latest"
              role="tabpanel"
              aria-labelledby="latest-tab"
            >
              <div className="blog-item-area">
                {allBlogs.map((item, i) => {
                  const matchingImage = imageUrl2.find(
                    (image) => image.blogTitle === item.blogTitle
                  );

                  return (
                    <GridBlogCard
                      key={i}
                      allBlogsData={item}
                      imageUrl2Data={matchingImage}
                    />
                  );
                })}
              </div>
            </div>

            {/* Pagination Here */}
            {/* <Pagination /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSide;
