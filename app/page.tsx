
// pages/index.js
"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Navbar from "./navbar/page"
import Home from "./home/page";
import About from "./about/page";
import Work from "./work/page";
import Testimonial from "./testimonial/page";


export default function Index() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
    </div>);
}





