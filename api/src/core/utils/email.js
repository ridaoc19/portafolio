const nodemailer = require("nodemailer");

async function Email(body) {

  if (body?.city) {

    var transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    let info = await transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      subject: `Ingreso a Portafolio desde ${body?.country} - ${body?.city}`,
      // text: ``,
      html: `<div style={ display: 'grid', justify-content:'center' }>
    <h1>Ingresaron desde</h1>
    <div style={ display: 'flex', place-content: "center" }>
    </div>
    <div style={ display: 'grid', grid-template-columns: '100px 1fr', margin-top:'10px' }>
      <h4 style={ margin: '0' }>Continente: <i>${body?.continent}</i></h4>
    </div>
    <div style={ display: 'grid', grid-template-columns: '100px 1fr' }>
      <h4 style={ margin: '0' }>Pais: <i>${body?.country}</i></h4>
    </div>
    <div style={ display: 'grid', grid-template-columns: '100px 1fr' }>
      <h4 style={ margin: '0' }>Region: <i>${body?.region}</i></h4>
    </div>
    <div style={ display: 'grid', grid-template-columns: '100px 1fr' }>
      <h4 style={ margin: '0' }>Ciudad: <i>${body?.city}</i></h4>
    </div>
  </div>`
    });
  }

  // Email().catch(console.error);

}

module.exports = Email;


{/* <img src=${body?.svg} alt="" width={60} style={ border-radius: '10px' } /> */ }