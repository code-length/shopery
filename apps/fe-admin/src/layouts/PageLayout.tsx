import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const PageLayout = () => {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/products' element={<div>Products</div>} />
          <Route path='/users' element={<div>Users</div>} />
          <Route path='/orders' element={<div>Orders</div>} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default PageLayout;
