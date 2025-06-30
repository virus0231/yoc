"use client";
import { motion } from 'framer-motion';
import React from 'react';
import Menu from '../components/menu';
import Header from '../components/header';

function Home({children}) {
  return (
    <div>
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
    </div>
  );
}

export default Home;
