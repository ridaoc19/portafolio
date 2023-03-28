const { Response } = require( "express");

const handleHttp = (res, error) => {
  res.status(500);
  res.send({ error });
};

module.exports= {handleHttp}
