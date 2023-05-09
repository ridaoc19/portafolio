import React from 'react';

function User({ flagAdmin, visitors, user, handleOnChange, getUser }) {

  return (
    <>
      <div className='user__input-checkbox'>
        <select name="-select" value={getUser} onChange={handleOnChange}>
          <optgroup label={flagAdmin ? "Propietario Portafolio" : "Visitantes"}>
            <option value={user?.user_id}>{user?.name ? user.name : "ricardo david ocampo"}</option>
          </optgroup>
          {visitors.length > 0 && <optgroup label={!flagAdmin ? "Propietario Portafolio" : "Visitantes"}>
            {visitors?.map(v => <option key={v.user_id} value={v.user_id}>{v.name}</option>)}
          </optgroup>}
        </select>
      </div>
    </>
  );
}

export default User;