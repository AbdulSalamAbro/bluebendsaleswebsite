import { client } from "./client";

export const getBlogs = async () => {
  try {
    var space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );

    var environment = await space.getEnvironment("master");
    var data = await environment.getEntries({
      content_type: "blogs",
    });

    var passData = [],
      theImageUrl = [];
    data.items.map((item, index) => {
      passData[index] = item.fields;
    });
    var allImages = [];
    var allImages2 = [];
    var theImagesID = [];
    passData.map((item, index) => {
      allImages[index] = item.blogImage;
    });

    const cleanedData = passData.map((item) => {
      const { "en-US": blogId } = item.blogId;
      const { "en-US": blogTitle } = item.blogTitle;
      const { "en-US": blogDescription } = item.blogDescription;
      const { "en-US": blogImage } = item.blogImage;
      const { "en-US": blogDate } = item.blogDate;
      return { blogId, blogTitle, blogDescription, blogImage, blogDate };
    });

    cleanedData.map((i, j) => {
      var img = {
        blogTitle: i.blogTitle,
        blogImageID: i.blogImage.sys.id,
        blogId: i.blogId,
        blogDate: i.postedDate,
        blogDescription: i.blogDescription,
      };
      allImages2.push(img);
    });

    allImages.map((item, index) => {
      theImagesID[index] = item["en-US"].sys.id;
    });

    const setUrl = async () => {
      await Promise.all(
        theImagesID.map(async (i, j) => {
          var a = await environment.getAsset(i);
          theImageUrl[j] = a.fields.file["en-US"].url;
        })
      );
      return theImageUrl;
    };

    const setUrl2 = async () => {
      await Promise.all(
        allImages2.map(async (i, j) => {
          var a = await environment.getAsset(i.blogImageID);
          allImages2[j].blogImageID = a.fields.file["en-US"].url;
        })
      );
      return allImages2;
    };
    let imageTitleAndUrl = await setUrl2();

    var urls = await setUrl();
    var data = { cleanedData, urls, imageTitleAndUrl };

    return data;
  } catch (err) {
    console.log("error in get blogs", err);
  }
};
