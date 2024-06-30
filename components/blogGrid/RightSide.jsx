import Link from "next/link";

const RightSide = ({ allBlogs, imageUrl2 }) => {
  let chosenIndexes = [];

  if (allBlogs.length <= 3) {
    chosenIndexes = allBlogs;
  } else {
    while (chosenIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * allBlogs.length);
      if (!chosenIndexes.includes(allBlogs[randomIndex])) {
        chosenIndexes.push(allBlogs[randomIndex]);
      }
    }
  }
  let selectedIndexes = chosenIndexes;

  return (
    <div className="col-md-4">
      <div className="side-area">
        <div className="side-single">
          <h5>Popular Blog Posts</h5>
          {selectedIndexes &&
            selectedIndexes.map((item, index) => {
              const matchingImage = imageUrl2.find(
                (image) => image.blogTitle === item.blogTitle
              );
              const isoString = item.blogDate;
              const dateObject = new Date(isoString);
              const formattedDate = dateObject.toLocaleDateString();

              return (
                <div key={index} className="blog-item">
                  <div className="img-area">
                    <img
                      src={matchingImage.blogImageID}
                      alt="blog"
                      height={"150px"}
                      width={"150px"}
                    />
                  </div>
                  <div className="content">
                    <Link href={`blogs/${item.blogTitle}`}>
                      <h6>{item.blogTitle}</h6>
                    </Link>
                    <div className="text-area">
                      <div className="item d-flex align-items-center">
                        <span>{formattedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
