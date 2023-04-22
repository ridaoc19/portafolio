import React from 'react';

function Contact() {

const contact = [
  {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/ridaoc19/",
      "image": "https://www.svgrepo.com/show/465461/linkedin.svg"
  },
  {
      "name": "github",
      "url": "https://www.github.com/ridaoc19",
      "image": "https://www.svgrepo.com/show/439171/github.svg"
  },
  {
      "name": "email",
      "url": "ridaoc19@gmail.com",
      "image": "https://www.svgrepo.com/show/164679/email-button.svg"
  }
]

  return (
    <div className='home__contact--container' >
      {contact?.map(e => {
        return (
          <div key={e.name} >
            {e.name === "email" ?
              (<a href={`mailto:${e.url}`}><img src={e.image} alt="imagen"  /></a>) :
              (<a href={e.url} target="_blank" rel="noreferrer"><img src={e.image} alt="imagen"  /></a>)
            }
          </div>
        )
      })}
    </div>
  );
}

export default Contact;