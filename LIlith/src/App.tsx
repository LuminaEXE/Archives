import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';

import Home from './pages/Home/home';
import config from './pages/Config/config';
import Login from './pages/Config/Login';
import General from './pages/Config/general';

import Nav from './moduels/Nav/Nav';

import { appWindow, LogicalSize } from "@tauri-apps/api/window"

const App: Component = () => {
  return (
    <div id="root"> 
      <Nav />
    
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/config" component={config} />
          <Route path="/General" component={General}/>
      </Routes>

      
    </div>
  );
};

export default App;
