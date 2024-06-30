import axios from "axios";

export const contactForm = async (contactData) => {
  try {
    // Set the headers for the request
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
      "X-Contentful-Content-Type": "contactForm",
    };
    const url = `https://api.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries`; // for creating entries

    const entryData = {
      fields: {
        name: {
          "en-US": contactData.name,
        },
        email: {
          "en-US": contactData.email,
        },
        message: {
          "en-US": contactData.message,
        },
      },
    };

    // Make the POST request to create the entry
    const response = await axios.post(url, entryData, { headers });

    return { status: "OK" };
  } catch (error) {
    console.error("Error creating entry:", error);
    return { status: 404 };
  }
};
