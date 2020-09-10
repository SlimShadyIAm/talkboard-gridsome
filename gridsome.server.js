// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
module.exports = function(api) {
  api.loadSource(async (actions) => {
    const { data } = await axios.get(
      "https://www.patreon.com/api/oauth2/api/campaigns/3196722/pledges",
      {
        headers: {
          authorization: `Bearer ${process.env.PATREON_TOKEN}`,
        },
      }
    );

    const collection = actions.addCollection({
      typeName: "Patrons",
    });
    // console.log(data);

    pledges = [];

    for (const pledge of data.data) {
      if (pledge.type == "pledge") {
        pledges.push(pledge);
        if (pledge.attributes.amount_cents >= 1000) {
          const id = pledge.relationships.patron.data.id;

          var name = data.included.filter((userObject) => {
            return userObject.id == id;
          });
          collection.addNode({
            id: id,
            name: name[0].attributes.vanity,
            fullName: name[0].attributes.full_name,
          });
        }
      }
    }
    if (data.data.length > 0) {
      collection.addNode({
        id: -1,
        name: "No current Patrons",
        fullName: "No currnet Patrons",
      });
    }
  });
};
