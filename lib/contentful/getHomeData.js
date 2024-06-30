import { client } from "./client";

export const getHomeData = async () => {
  try {
    var space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );

    var environment = await space.getEnvironment("master");

    // ******************************************* Hero section
    var data = await environment.getEntries({
      content_type: "homeHero",
    });

    var passDataHero = [];
    data.items.map((item, index) => {
      passDataHero[index] = item.fields;
    });

    const cleanedDataHero = passDataHero.map((item) => {
      const { "en-US": mainHeading } = item.mainHeading;
      const { "en-US": description } = item.description;

      return { mainHeading, description };
    });

    // ******************************************* Testimonials section

    var testData = await environment.getEntries({
      content_type: "homeTestimonial",
    });

    var passDataTest = [];

    testData.items.map((item, index) => {
      passDataTest[index] = item.fields;
    });

    var allImages = [];
    var allImages2 = [];
    passDataTest.map((item, index) => {
      allImages[index] = item.clientImage;
    });

    const cleanedDataTest = passDataTest.map((item) => {
      const { "en-US": clientName } = item.clientName;
      const { "en-US": clientLocation } = item.clientLocation;
      const { "en-US": clientFeedback } = item.clientFeedback;
      const { "en-US": clientImage } = item.clientImage;

      return { clientName, clientLocation, clientFeedback, clientImage };
    });

    cleanedDataTest.map((i, j) => {
      var img = {
        clientName: i.clientName,
        clientImage: i.clientImage.sys.id,
        clientLocation: i.clientLocation,
        clientFeedback: i.clientFeedback,
      };
      allImages2.push(img);
    });

    const setUrlTestimonials = async () => {
      await Promise.all(
        allImages2.map(async (i, j) => {
          var a = await environment.getAsset(i.clientImage);
          allImages2[j].clientImage = a.fields.file["en-US"].url;
        })
      );
      return allImages2;
    };

    let testimonialsDataCleaned = await setUrlTestimonials();

    // ******************************************* Features Section

    var featureData = await environment.getEntries({
      content_type: "homeFeatures",
    });

    var passDataFeature = [];
    featureData.items.map((item, index) => {
      passDataFeature[index] = item.fields;
    });

    var allImages = [];
    var allImages2 = [];
    passDataFeature.map((item, index) => {
      allImages[index] = item.blogImage;
    });

    const cleanedDataFeature = passDataFeature.map((item) => {
      const { "en-US": featureHeading } = item.featureHeading;
      const { "en-US": featureDescription } = item.featureDescription;
      const { "en-US": featureImage } = item.featureImage;

      return { featureHeading, featureDescription, featureImage };
    });

    cleanedDataFeature.map((i, j) => {
      var img = {
        featureHeading: i.featureHeading,
        featureImage: i.featureImage.sys.id,
        featureDescription: i.featureDescription,
      };
      allImages2.push(img);
    });

    const setUrlFeatures = async () => {
      await Promise.all(
        allImages2.map(async (i, j) => {
          var a = await environment.getAsset(i.featureImage);
          allImages2[j].featureImage = a.fields.file["en-US"].url;
        })
      );
      return allImages2;
    };

    let featuresDataCleaned = await setUrlFeatures();

    // ******************************************* Partners Section

    var partnerData = await environment.getEntries({
      content_type: "partners",
    });

    var passDataPartner = [];
    partnerData.items.map((item, index) => {
      passDataPartner[index] = item.fields;
    });

    var allImages = [];
    var allImages2 = [];
    passDataPartner.map((item, index) => {
      allImages[index] = item.blogImage;
    });

    const cleanedDataPartner = passDataPartner.map((item) => {
      const { "en-US": partnerName } = item.partnerName;
      const { "en-US": partnerLogo } = item.partnerLogo;

      return { partnerName, partnerLogo };
    });

    cleanedDataPartner.map((i, j) => {
      var img = {
        partnerName: i.partnerName,
        partnerLogo: i.partnerLogo.sys.id,
      };
      allImages2.push(img);
    });

    const setUrlPartners = async () => {
      await Promise.all(
        allImages2.map(async (i, j) => {
          var a = await environment.getAsset(i.partnerLogo);
          allImages2[j].partnerLogo = a.fields.file["en-US"].url;
        })
      );
      return allImages2;
    };

    let partnerDataCleaned = await setUrlPartners();

    const retData = {
      cleanedDataHero,
      testimonialsDataCleaned,
      featuresDataCleaned,
      partnerDataCleaned,
    };
    return retData;
  } catch (err) {
    console.log("error in get blogs", err);
  }
};
