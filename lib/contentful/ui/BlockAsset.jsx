import React, { useState, useEffect } from "react";
import Loading from "@/pages/loading";
import { getRichImage } from "../getRichImage";

const BlockAsset = ({ assetId }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("asset id: ", assetId);
    const data = getRichImage(assetId).then((res) => {
      setImageUrl(res);
      setLoading(false);
      //   console.log(res);
    });
  }, []);
  if (isLoading) return <Loading />;
  if (!imageUrl) return <p>No image found!</p>;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={imageUrl} width={750} height={100} />
    </div>
  );
};

export default BlockAsset;
