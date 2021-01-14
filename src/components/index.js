import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import DownloadCvBtn from './DownloadCvBtn';
import ParticlesBgr from './ParticlesBgr';
import useFullPageLoader from './useFullPageLoader';

const Home = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const fetchData = () => {
    showLoader();
    setTimeout(() => {
      hideLoader();
    }, 800);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <main className='page__content flex column'>
        <ParticlesBgr />
        <DownloadCvBtn />
        <Header />
      </main>
      {loader}
    </>
  );
};

export default Home;
