import React from 'react';

function User({ visitors, user, handleOnChange, getUser }) {

  return (
    <>
      <div className='user__input-checkbox'>
        <select name="-select" value={getUser} onChange={handleOnChange}>
          <optgroup label={user.user_id === `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` || !user.user_id ? "Propietario Portafolio" : "Visitantes"}>
            <option value={user?.user_id}>{user?.name ? user.name : "ricardo david ocampo"}</option>
          </optgroup>
          {visitors.length > 0 && <optgroup label={user.user_id === `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` || !user.user_id ? "Visitantes": "Propietario Portafolio"}>
            {visitors?.map(v => <option key={v.user_id} value={v.user_id}>{v.name}</option>)}
          </optgroup>}
        </select>
      </div>
    </>
  );
}

export default User;