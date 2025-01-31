'use client';
import React from 'react';
import { Button } from '@shopery/libs';

const page = () => {
  return (
    <div>
      <h1>Next Project</h1>
      <Button
        label="small"
        onClick={() => alert('Clicked!')}
        fill="fill"
        size="small"
      />
      <Button
        label="medium"
        onClick={() => alert('Clicked!')}
        fill="border"
        size="medium"
      />
      <Button
        label="large"
        onClick={() => alert('Clicked!')}
        fill="ghost"
        size="large"
      />
    </div>
  );
};

export default page;
