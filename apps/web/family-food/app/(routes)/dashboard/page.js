"use client";

import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from '../../_components/Navbar/Navbar';

export default function Dashboard() {

  return (
    <main className={styles.main}>
      <Navbar />
      <h2>Dashboard</h2>


      
    </main>
  )
}
