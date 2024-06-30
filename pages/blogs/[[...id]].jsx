import { useRouter } from "next/router";
import BlogDetails from "../../components/blogSingle/BlogDetails";
import RelatedPost from "../../components/blogSingle/RelatedPost";

export default function Blogs() {
  const param = useRouter().asPath;
  const blogTitle = decodeURIComponent(param.replace(/^\/blogs\//, "")).replace(
    /%20/g,
    " "
  );

  return (
    <>
      <br />
      <br />
      <br />
      <BlogDetails blogTitle={blogTitle} />
      {/* <RelatedPost /> */}
    </>
  );
}
