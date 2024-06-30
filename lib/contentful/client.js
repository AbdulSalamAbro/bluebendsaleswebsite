const contentful = require("contentful-management");

export const client = contentful.createClient({
  accessToken: "CFPAT-KmGeb9nF3ZuahIWqlo1GZl2918oyxBxd_j3BMMt9zDI",
});
export const space = await client.getSpace("hblh7y9ixtc6");
