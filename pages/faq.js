import FaqComp from "@/components/faq/FaqComp";
import { getFaq } from "@/lib/contentful/getFaq";
import React, { useState, useEffect } from "react";
import Loading from "./loading";

const Faq = () => {
  const [allFaq, setAllFaq] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = getFaq().then((res) => {
      setAllFaq(res.cleanedData);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  if (!allFaq) return <p>No profile data</p>;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <FaqComp allFaq={allFaq} />
    </div>
  );
};

export default Faq;
