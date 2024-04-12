import React from 'react';
import logo from './logo.svg';
import './App.css';
import elements from './resources/sites.json';

function CardList() {
  const cards = elements.map(element =>
    <div
      className="mx-2 my-6 block flex-col rounded-lg bg-slate-100 shadow-lg border">
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-medium leading-tight text-neutral-800 antialiased">
          {element.name}
        </h5>
        <p className="mb-4 text-base text-neutral-700">
          &#128205;: {element.location}
        </p>
        <TagGrid />
        <button
          type="button"
          className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Visit store
        </button>
      </div>
    </div>
  )
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 mx-2">
      {cards}
    </div>
  );
}


function TagBox({ tag }: { tag: string }) {

  return (
    <div className="inline-flex m-1 items-center font-bold leading-sm px-3 py-1 bg-slate-300 shadow-lg">
      <p className="text-xs text-neutral-800">{tag}</p>
    </div>
  );
}

function TagGrid() {
  return (
    <div className="pb-3">
      <TagBox tag="test" />
      <TagBox tag="blabla" />
      <TagBox tag="hello" />
      <TagBox tag="test" />
      <TagBox tag="blabla" />
      <TagBox tag="hello" />
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
    <div className="bg-inherit h-2/3 w-2/3 px-4 mx-auto py-15 content-center">
      <form>
        <input type="text" placeholder="search"></input>
      </form>
    </div>
  );
}

function SitesTable() {
  return (
    <div className="w-2/3 px-4 mx-auto py-15 mt-10 content-center bg-inherit">
      <CardList />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 flex flex-no-wrap items-center justify-between shadow-lg w-full bg-gradient-to-r from-teal-500 to-cyan-500 py-2">
      <div className="flex md:w-2/3 w-4/5 px-4 mx-auto flex-wrap items-center justify-between">
        <span className="font-medium text-2xl text-neutral-100 px-3">
          My Awesome Site
        </span>
        <div className="relative flex items-center">
          <span
            className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 [&>svg]:w-5"
            id="basic-addon2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
        </div>
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
