import { useEffect, useState } from "react";
import BlogContent from "../components/blogGrid/BlogContent";
import Ready from "../components/ready/Ready";
import Loading from "./loading";
import { getBlogs } from "../lib/contentful/getBlogs";

export default function BlogGrid() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [imageUrl2, setImageUrl2] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = getBlogs().then((res) => {
      setAllBlogs(res.cleanedData);
      setImageUrl2(res.imageTitleAndUrl);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  if (!allBlogs) return <p>No profile data</p>;
  return (
    <>
      <br />
      <br />
      <br />
      <Ready
        heading={"BENDBLUE BLOG"}
        text="Your new favorite insider resource."
        btn={false}
        icon={false}
      />
      <br />
      <br />
      <br />
      <br />
      <BlogContent allBlogs={allBlogs} imageUrl2={imageUrl2} />
    </>
  );
}
