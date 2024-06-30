import { client } from "./client";

export const getMethData = async () => {
  try {
    var space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );

    var environment = await space.getEnvironment("master");
    // ****************** meth hero

    var data = await environment.getEntries({
      content_type: "methHero",
    });
    var passData = [];
    data.items.map((item, index) => {
      passData[index] = item.fields;
    });

    const cleanedDataMethHero = passData.map((item) => {
      const { "en-US": mainHeading } = item.mainHeading;
      const { "en-US": description } = item.description;

      return { mainHeading, description };
    });

    // ****************** meth para

    var methParaData = await environment.getEntries({
      content_type: "methPara1",
    });

    var methPassData = [];
    methParaData.items.map((item, index) => {
      methPassData[index] = item.fields;
    });

    var allImages = [];
    var allImages2 = [];
    methPassData.map((item, index) => {
      allImages[index] = item.blogImage;
    });

    const cleanedDataMeth = methPassData.map((item) => {
      const { "en-US": miniHeading } = item.miniHeading;
      const { "en-US": mainHeading } = item.mainHeading;
      const { "en-US": description } = item.description;
      const { "en-US": image } = item.image;

      return { miniHeading, mainHeading, image, description };
    });

    cleanedDataMeth.map((i, j) => {
      var img = {
        miniHeading: i.miniHeading,
        mainHeading: i.mainHeading,
        image: i.image.sys.id,
        description: i.description,
      };
      allImages2.push(img);
    });

    const setUrlMeth = async () => {
      await Promise.all(
        allImages2.map(async (i, j) => {
          var a = await environment.getAsset(i.image);
          allImages2[j].image = a.fields.file["en-US"].url;
        })
      );
      return allImages2;
    };

    let methDataCleanedPara = await setUrlMeth();

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
    var retData = {
      cleanedDataMethHero,
      methDataCleanedPara,
      partnerDataCleaned,
    };
    return retData;
  } catch (err) {
    console.log("error in get blogs", err);
  }
};
