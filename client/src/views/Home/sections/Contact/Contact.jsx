import React, { useContext } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';

function Contact(props) {

  const { experience: {contact} } = useContext(CreateContext)


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