import React from 'react';

import { Map } from './components/Map';
import { Sidebar } from './components/Sidebar'

export function Main() {
  return (
    <>
      <Sidebar />
      <Map />
    </>
  );
}

export default Main;