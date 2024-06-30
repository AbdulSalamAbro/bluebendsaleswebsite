import Features from "../components/home/Features";
import Ready from "../components/ready/Ready";
import a1 from "../public/images/svg/about1.svg";
import a2 from "../public/images/svg/about2.svg";
import a3 from "../public/images/svg/about3.svg";
import a4 from "../public/images/svg/about4.svg";
import a5 from "../public/images/svg/about5.svg";
import a6 from "../public/images/svg/about6.svg";
import GetInTouch from "../components/contact/GetInTouch";
import HomeBanner from "../components/home/HomeBanner";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { getMethData } from "@/lib/contentful/getMethData";
export default function About() {
  const data = [
    {
      id: 1,
      miniHeading: "DATA MIGRATION",
      mainHeading:
        "Consolidating data from legacy and third-party systems into Salesforce can be complicated, particularly if you don't have in-house expertise or tooling. That's where we come in.",
      description:
        "Our approach to data migration allows you to focus on your business needs, while we do the heavy lifting of building a pipeline for your data. The technical solution we leverage is scalable, secure, and allows us to build your integration quickly with little-to-no ongoing cost. We start by learning about the data you need migrated and how you plan to use this data in Salesforce. This informs data mapping and business rules, which are then used to build the integration. At the core of our process is quality. Our testing approach includes validating not only the code, but also user profiles and Salesforce configurations. And, of course, we make sure you give the final seal of approval through User Acceptance Testing (UAT).",
      getInTouch: false,
      imageUrl: a3,

      miniHeading2: "PROCESS OPTIMIZATION",
      mainHeading2:
        "Our business management consulting process merges observation, mapping, strategy, technology, and analysis to provide you with the ultimate, customized solution.",
      description2:
        "We work with you to model and thoroughly communicate your processes before automating and smoothing them out with software, training, or whatever it takes to set you up for success. Not only do we ensure that your team can handle the new and improved business processes — we also layer in control for the process owner, measure the impact of the change, and optimize further if we find that more work is needed.",
      getInTouch2: false,
      imageUrl2: a4,
    },
    {
      id: 2,
      miniHeading: "TOOL INTEGRATION",
      mainHeading:
        "Bendblue has integrated dozens, maybe hundreds, of third-party tools into Salesforce, and we're constantly teaching ourselves about more.",
      description:
        "Whether it's for lead nurturing, financial data, targeted marketing campaigns, project management, e-signatures, or other digital business needs, we've integrated a tool for it. You can't stump us. Some of the more common tools we've integrated for customers include Outreach, SalesLoft, DocuSign, HelloSign, Conga Composer, Form Assembly, Zendesk, HubSpot, Dropbox, Clearbit, LinkedIn, Intercom, Drift, LeadIQ, Wufoo, Cloudingo...we could go on.",
      getInTouch: false,
      imageUrl: a5,
      miniHeading2: "TRAINING & SUPPORT",
      mainHeading2:
        "Your Bendblue team won't leave you hanging. Our experts will make sure that you understand how your solution works and that you're equipped to use it.",
      description2:
        "If you're looking for training and support, Bendblue can provide all of the skills and sessions your team needs to reach its full potential. Using weekly meetings, kickoff strategy sessions, or on-site meetings, we'll ramp up your team's Sales and RevOps capabilities to record-breaking levels. Where practical, we'll leverage existing software solutions and internal IP to get you a solution built to scale with your organizational needs as quickly as possible.",
      getInTouch2: false,
      imageUrl2: a6,
    },
  ];

  const [heroData, setHeroData] = useState();
  const [paraData, setParaData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [partnerData, setPartnerData] = useState([]);

  useEffect(() => {
    const data = getMethData().then((res) => {
      setHeroData(res.cleanedDataMethHero);
      setPartnerData(res.partnerDataCleaned);

      setParaData(res.methDataCleanedPara);
      setLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  if (!heroData || !paraData) return <p>No profile data</p>;
  return (
    <>
      <HomeBanner
        heading={heroData[0].mainHeading}
        desc={heroData[0].description}
        partnerData={partnerData}
      />

      <Ready
        heading={false}
        btn={true}
        icon={true}
        text="Transformational Sales and RevOps Consulting"
      />
      <br />
      <br />

      <Features paraData={paraData} />
      <GetInTouch />
    </>
  );
}
