import React from 'react';
import logo from './logo.svg';
import './App.css';
import elements from './resources/sites.json';

function CardList() {
  const cards = elements.map(element =>
    <div
      className="mx-2 my-6 block flex-col rounded-lg bg-stone-50 shadow-lg border">
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-medium leading-tight">
          {element.name}
        </h5>
        <p className="mb-4 text-base">
          {element.description}
        </p>
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Visit store
        </button>
        <SocialIcon />
      </div>
    </div>
  )
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-4 mx-2">
      {cards}
    </div>
  );
}

function SocialIcon() {
  return (
    < svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg >

  );
}

function SearchBar() {
  return (
    <div className="bg-inherit">
      <form>
        <input type="text" placeholder="search"></input>
      </form>
    </div>
  );
}

function SitesTable() {
  return (
    <div className="w-3/4 p-4 mx-auto my-10 content-center border shadow-lg rounded-lg bg-stone-50">
      <CardList />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="relative flex w-full bg-emerald-500 py-2">
      <div className="relative flex ml-10">
        <h1 className="font-medium text-3xl text-neutral-100">
          My Awesome Site
        </h1>
      </div>
    </nav>
  );
}



function App() {
  return (
    <body>
      <Navbar />
      <SitesTable />
    </body>
  );
}

export default App;
