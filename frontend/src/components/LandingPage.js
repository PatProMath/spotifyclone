import React, { Component } from "react";
import Footer from "./PageFooter";
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App bg-gradient-to-r from-sky-500 to-indigo-500">
      <div class="grid gap-8 items-start justify-center">
        <button class="px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
          <span class="pr-6 text-gray-100">CloudJamz</span>
          <span class="pl-6 text-indigo-400"><Link to='/login'>Get in here</Link> &rarr;</span>
        </button>
        <div class="text-base">
          <span class="text-gray-200">Need an acount? </span>
          <span class="text-black font-bold"><Link to='/signup'>Sign-Up</Link></span>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}