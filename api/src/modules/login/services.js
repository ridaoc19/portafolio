const { Login } = require("./model");
const { handleHttp } = require("../../core/utils/error.handle");
const jwt_decode = require('jwt-decode');

module.exports = {
  async postLogin(req, res) {
    try {
      const { location, credential } = req.body
      const { sub, hd, email, name, picture } = jwt_decode(credential);
      const visitors = sub === process.env.DEFAULT_USER_LOGIN ? (await Login.find()).filter(d => d.user_id !== sub) : [await Login.findOne({ user_id: process.env.DEFAULT_USER_LOGIN })]
      const responseLogin = await Login.findOne({ user_id: sub });

      if (!responseLogin?.location_id?.includes(location)) {

        if (!responseLogin) {
          const login = await Login.create({ location_id: location, user_id: sub, name, email, picture, company: hd })
          return res.status(200).json([login, visitors])
        } else {
          let updateLogin = await Login.findByIdAndUpdate(responseLogin._id, { $push: { location_id: location }, picture }, { new: true })
          res.status(200).json([updateLogin, visitors])
        };

      } else {
        // let result = {
        //   company_id: responseLogin.company_id,
        //   email: responseLogin.email,
        //   location_id: responseLogin.location_id,
        //   name: responseLogin.name,
        //   picture: responseLogin.picture,
        //   user_id: responseLogin.user_id,
        //   _id: responseLogin._id
        // } 
        res.status(200).json([responseLogin, visitors])
      }

    } catch (error) {
      res.json({ message: error.message })
    }
  },


  async getLogin(req, res) {
    try {
      const responseLogin = await Login.findOne({ user_id: req.params.id });
      const visitors = req.params.id === process.env.DEFAULT_USER_LOGIN ? (await Login.find()).filter(d => d.user_id !== req.params.id) : [await Login.findOne({ user_id: process.env.DEFAULT_USER_LOGIN })]
      // console.log(responseLogin, "entrossss");

      // let result = {
      //   company_id: responseLogin.company_id,
      //   email: responseLogin.email,
      //   location_id: responseLogin.location_id,
      //   name: responseLogin.name,
      //   picture: responseLogin.picture,
      //   user_id: responseLogin.user_id,
      //   _id: responseLogin._id
      // } 

      res.status(200).json([responseLogin, visitors])

    } catch (error) {

    }
  }
};
