import { Suspense, useEffect, useState } from "react";
import GetInTouch from "../components/contact/GetInTouch";
import BusinessSolutions from "../components/home/BusinessSolutions";
import HomeBanner from "../components/home/HomeBanner";
import LatestArticles from "../components/home/LatestArticles";
import Testimonials from "../components/home/Testimonials";
import Ready from "../components/ready/Ready";
import Loading from "./loading";
import { getHomeData } from "@/lib/contentful/getHomeData";

export default function Home() {
  const [heroData, setHeroData] = useState();
  const [partnerData, setPartnerData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const data = getHomeData().then((res) => {
      console.log(res);
      setHeroData(res.cleanedDataHero);
      setPartnerData(res.partnerDataCleaned);
      setTestData(res.testimonialsDataCleaned);
      setFeaturesData(res.featuresDataCleaned);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  if (!heroData || !testData) return <p>No profile data</p>;
  return (
    <>
      <Suspense fallback={Loading}>
        <HomeBanner
          partnerData={partnerData}
          heading={heroData[0].mainHeading}
          desc={heroData[0].description}
        />
        <GetInTouch />
        <Testimonials testData={testData} />
        <Ready
          heading={false}
          btn={true}
          icon={true}
          text="Transformational Sales and RevOps Consulting"
        />
        <BusinessSolutions featuresData={featuresData} />

        {/* <LatestArticles /> */}
      </Suspense>
    </>
  );
}
