import React, { useContext, useEffect, useState } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';

function User() {
  const { login: { state: { user, visitors } }, works: { getWork } } = useContext(CreateContext)
  const [getUser, setGetUser] = useState("")

  useEffect(() => {
    getWork({ route: getUser})
    // eslint-disable-next-line
  }, [getUser])

  useEffect(() => {
    setGetUser(user?.user_id? user?.user_id: `${process.env.REACT_APP_DEFAULT_USER_LOGIN}`)
    // eslint-disable-next-line
  }, [user])

  return (
    <>
      <div className='user__input-checkbox'>
        <select name="-select" value={getUser} onChange={(e) => { setGetUser(e.target.value) }}>
          <optgroup label={user?.user_id === `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` || Object.keys(user).length === 0 ? "Propietario Portafolio" : "Visitantes"}>
            <option value={user?.user_id}>{user?.name ? user.name : "ricardo david ocampo"}</option>
          </optgroup>
          {visitors.length > 0 && <optgroup label={user?.user_id !== `${process.env.REACT_APP_DEFAULT_USER_LOGIN}` ? "Propietario Portafolio" : "Visitantes"}>
            {visitors?.map(v => <option key={v.user_id} value={v.user_id}>{v.name}</option>)}
          </optgroup>}
        </select>
      </div>
    </>
  );
}

export default User;