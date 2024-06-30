import Link from "next/link";
import Loading from "../../pages/loading";
const GridBlogCard = ({ allBlogsData, imageUrl2Data }) => {
  const isoString = allBlogsData.blogDate;
  const dateObject = new Date(isoString);
  const formattedDate = dateObject.toLocaleDateString();

  return (
    <>
      {allBlogsData && imageUrl2Data ? (
        <div className="blog-item">
          <div className="thumb">
            <img src={imageUrl2Data.blogImageID} alt="blog" />
          </div>

          <div className="content">
            <Link href={`blogs/${allBlogsData.blogTitle}`}>
              <h5>{allBlogsData.blogTitle}</h5>
            </Link>
            <div className="info">
              <div className="item d-flex align-items-center">
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <Loading />
        <></>
      )}
    </>
  );
};

export default GridBlogCard;
