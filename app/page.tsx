
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


function Index() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
    </div> )
	}

export default Index;

