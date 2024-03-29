const { Location } = require("./model");
const { handleHttp } = require("../../core/utils/error.handle");
const Email = require("../../core/utils/email");

module.exports = {
  async postLocation(req, res) {

    await Email(req.body);

    Location.create(req.body)
      .then((data) => {
        const responsePost = {
          id: data.id,
          city: data.city,
          region: data.region,
          country: data.country,
          continent: data.continent,
          svg: data.svg,
        };

        Location.find()
          .then((all) => {
            const responseData = all?.map(({ id, city_geoname_id, city, region, country, continent, svg }) => {
              return {
                id,
                city_geoname_id,
                city,
                region,
                country,
                continent,
                svg,
              };
            });

            const responseSet = [...new Set(all?.map(({ city_geoname_id }) => city_geoname_id))];

            const resultAll = responseSet.map((e) => {
              const searchSet = responseData?.find((d) => d.city_geoname_id === e);
              const count = { count: responseData?.filter((d) => d.city_geoname_id === e).length };

              return Object.assign(searchSet, count);

            });
            res.status(200).json([responsePost, all.length, resultAll]);
          })
          .catch((error) => res.json({ message: error }));
      })
      .catch((error) => res.json({ message: error }));
  },

  async getLocation(req, res) {

    Location.find()
      .then((all) => {
        const responseData = all?.map(({ id, city_geoname_id, city, region, country, continent, svg }) => {
          return {
            id,
            city_geoname_id,
            city,
            region,
            country,
            continent,
            svg,
          };
        }
        );

        const responsePost = responseData.find(r => r.id === req.params.id)

        const responseSet = [...new Set(all?.map(({ city_geoname_id }) => city_geoname_id))];

        const resultAll = responseSet.map((e) => {
          const searchSet = responseData?.find((d) => d.city_geoname_id === e);
          const count = { count: responseData?.filter((d) => d.city_geoname_id === e).length };

          return Object.assign(searchSet, count);

        });
        res.status(200).json([responsePost, all.length, resultAll]);
      })
      .catch((error) => res.json({ message: error }));
  },
};
