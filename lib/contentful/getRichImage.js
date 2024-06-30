import { client } from "./client";

export const getRichImage = async (assetId) => {
  try {
    var space = await client.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );

    var environment = await space.getEnvironment("master");
    var a = await environment.getAsset(assetId);
    var url = a.fields.file["en-US"].url;

    return url;
  } catch (err) {
    console.log("error in get rich image", err);
  }
};
