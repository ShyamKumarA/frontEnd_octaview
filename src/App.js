/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Themeroutes from './routes/Router';
import ThemeSelector from './layouts/theme/ThemeSelector';
import Loader from './layouts/loader/Loader';

const App = () => {
  const routing = useRoutes(Themeroutes);
  const direction = useSelector((state) => state.customizer.isRTL);
  const isMode = useSelector((state) => state.customizer.isDark);
  return (
    <Suspense fallback={<Loader />}>
      <div
        className={`${direction ? 'rtl' : 'ltr'} ${isMode ? 'dark' : ''}`}
        dir={direction ? 'rtl' : 'ltr'}
      >
        <ThemeSelector />
        <ToastContainer/>
        {routing}
      </div>
    </Suspense>
  );
};

export default App;
