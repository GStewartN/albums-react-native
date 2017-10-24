// Code for IOS

// Import a library to help create a component
import React from 'react';
import Header from './src/components/Header';

// Create component
export default App = () => (  // Now exporting to anywhere that imports
    <Header headerText={'Albums'} />
  );

// Render it to the device
// AppRegistry.registerComponent('albums', () => App); This is now being imported from index.js
