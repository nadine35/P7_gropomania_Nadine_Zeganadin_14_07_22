import React, { useContext, componentDidUpdate, componentDidMount, useState, useEffect } from 'react';
import { UidContext } from '../components/AppContext';
import LeftNav from '../components/LeftNav';
import NewPostForm from '../components/Post/NewPostForm';
import Thread from '../components/Thread';
import Log from '../components/Log';

const Home = () => {

  const [refreshpage, setrefreshpage] = React.useState(0);
  const [reLoadPage, setReloadPage] = useState(false);

  console.warn(refreshpage);

  const uid = useContext(UidContext);

  const reloadPage = () => {
    console.log("reloadPage !!");
    console.log(reLoadPage);

    if (!reLoadPage) {
        console.log("reloadPage !!");
        console.log(reLoadPage);
        window.location.reload(false);
        
        setReloadPage(true);
    }
  }
  
  return (
    <div className='home'>
      <LeftNav />
      <div className='main'>
        <div className='home-header'>
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
    </div>
  );
};

export default Home;