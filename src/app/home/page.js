"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function Home({children}) {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Menu />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        
          {children}
        </motion.div>
      </Provider>
    </div>
  );
}

export default Home;
