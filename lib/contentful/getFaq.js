import { client } from "./client";

export const getFaq = async () => {
  try {
    var space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );

    var environment = await space.getEnvironment("master");
    var data = await environment.getEntries({
      content_type: "faQs",
    });

    var passData = [],
      theImageUrl = [];
    data.items.map((item, index) => {
      passData[index] = item.fields;
    });

    const cleanedData = passData.map((item) => {
      const { "en-US": id } = item.id;
      const { "en-US": question } = item.question;
      const { "en-US": answer } = item.answer;

      return { id, question, answer };
    });

    var data = { cleanedData };

    return data;
  } catch (err) {
    console.log("error in get blogs", err);
  }
};
