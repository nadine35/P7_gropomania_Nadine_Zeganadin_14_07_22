import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';
import { UidContext } from './components/AppContext';
import Routes from "./Routes";


const App = () => {

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUid(foundUser.userId);
    }
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>;
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
