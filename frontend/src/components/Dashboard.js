import React, { Component } from "react";
import Footer from "./PageFooter";
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div class="flex w-screen h-screen text-gray-400 bg-gray-800">
                <div class="flex flex-col w-56">
                <button class="relative text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-full h-16 px-4">
                    <span class="text-xl text-white font-bold">CloudJamz</span>
                    </div>
                </button>
                <div class="flex flex-col flex-grow p-4 text-indigo-500 overflow-auto bg-gray-800 shadow-lg shadow-cyan-500/50">
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-white text-sm font-medium rounded hover:bg-slate-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                        <span class="leading-none ml-2">Dashboard</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-white text-sm font-medium rounded hover:bg-slate-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="leading-none ml-2">My Profile</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-white text-sm font-medium rounded hover:bg-slate-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <span class="leading-none ml-2">My Rooms</span>
                    </a>
                    
                    <a class="flex items-center flex-shrink-0 h-10 px-2 text-white text-sm font-medium rounded hover:bg-slate-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span class="leading-none ml-2"> My Music</span>
                    </a>
                    <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span class="ml-2 leading-none"><Link to="/login">Logout</Link></span>
                    </a>
                </div>
                </div>
                <div class="flex flex-col flex-grow">
                <div class="flex items-center flex-shrink-0 h-16 px-8">
                    <h1 class="text-lg font-medium">Control Panel</h1>
                    <button class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800"> User</button>
                    <button class="relative ml-2 text-sm focus:outline-none group">
                    <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
                        <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </div>
                    <div class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex">
                    
                    <a class="w-full px-4 py-2 text-left hover:bg-slate-700" href="#">
                        <Link to="/login">Logout</Link>
                    </a>
                    </div>
                    </button>
                </div>
                <div class="flex-grow p-6 overflow-auto bg-gradient-to-r from-sky-500 to-indigo-500">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="h-24 col-span-3 bg-gray-700"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
  }
}