import notion from "../../../lib/notion";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
        property: "Slug",
        rich_text: {
         "equals": slug   
        }
    }
  });

  const posts = response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Title.title[0].plain_text,
      slug: page.properties.Slug.rich_text[0].plain_text
      // Add other properties as needed
    };
  });

  res.json(posts);
};
