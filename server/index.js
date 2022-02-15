const cors = require('cors');
const express = require('express');
require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const getPages = async () => {

  const response = await notion.databases.query({database_id: databaseId});

  return response.results.map((page) => {
    return {
      id: page.id,
      name: page.properties.Aihe.title[0]?.plain_text
    };
  });
};

const createPage = async (data) => {
	await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
   	icon: {
    	type: "emoji",
			emoji: "🎉"
  	},
  	cover: {
  		type: "external",
    	external: {
    		url: "https://website.domain/images/image.png"
    	}
  	},
    properties: {
      Aihe: {
        title: [
          {
            text: {
              content: data.subject,
            },
          },
        ],
      },
      'Lähettäjän nimi': {
        rich_text: [
          {
            text: {
              content: data.name,
            },
          },
        ],
      },
      Sähköposti: {
        rich_text: [
          {
            text: {
              content: data.email,
            },
          },
        ],
      },
    },
    children: [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          text: [
            {
              type: 'text',
              text: {
                content: data.subject,
              },
            },
          ],
        },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          text: [
            {
              type: 'text',
              text: {
                content: data.message,
              },
            },
          ],
        },
      },
    ],
  });
};

app.get("/", async (req, res) => {

  const data = await getPages();
  res.json(data);
  
})

app.post("/new", async (req, res) => {
  const data = req.body;

  try {
    await createPage(data);
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(404);
    res.send("EI OK");
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
});