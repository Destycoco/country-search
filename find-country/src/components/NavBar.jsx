function NavBar() {
  return (
    <div className="w-[100vw]">
      <nav className="flex justify-between sm:px-16 m-auto bg-gray-50 items-center py-8 px-4 shadow-md">
        <h2 className="font-bold font">Where in the world</h2>

        <h3 className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          Darkmode
        </h3>
      </nav>
    </div>
  );
}

export default NavBar;
