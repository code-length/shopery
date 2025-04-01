import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Pages from '../pages';

const PageLayout = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        fontSize: '64px',
      }} //temporarily center, when create all pages - delete this style
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pages.DashboardPage />} />
          <Route path='/products' element={<Pages.ProductPage />} />
          <Route path='/users' element={<Pages.UserPage />} />
          <Route path='/orders' element={<Pages.OrderPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default PageLayout;
