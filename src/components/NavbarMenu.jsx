import {useState} from 'react'
import { Navbar } from 'flowbite-react';
import Button from './Button';
import logoTW from '../assets/logos/Tailwind_CSS_Logo.svg'
import logoGitHub from '../assets/logos/github-mark.svg'
import logoReact from '../assets/logos/logo.svg'
import logoJS from '../assets/logos/javascriptES6.svg'

import { USER_ME } from '../utilities/constants.js';


export default function NavbarMenu({ url, title, setUserData }) {
  const [darkMode, setDarkMode] = useState(false)

  const handleClickDark = () => {
    setDarkMode(!darkMode)
  }
  const handleButtonClick = () => {
    setUserData(USER_ME)
  }

  return (
    <div className="container-fluid w-full bg-blue-300 dark:bg-blue-900">
      <Navbar
        fluid
      >

        <Navbar.Brand href={url}>
          <section className="hidden md:flex justify-center items-center bg-inherit">
            <div className="w-[21rem] h-[3.4rem] flex justify-between items-center gap-1 md:gap-1 bg-inherit">
              <img src={logoTW} className="dark:bg-primary rounded-full" alt="Logo JS" width="18%" />
              <img src={logoJS} className="dark:bg-primary rounded-full" alt="Logo JS" width="12%" />
              <img src={logoGitHub} className="dark:bg-primary" alt="Logo ReactJS" width="12%" />
              <img src={logoReact} className="dark:bg-primary" alt="Logo ReactJS" width="25%" />
            </div>
          </section>
          <span className="ml-2 self-center whitespace-nowrap text-sm md:tex-lg font-semibold text-gray-900 dark:text-gray-50">
            {title}
          </span>
        </Navbar.Brand>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mr-8 md:order-1">
          {/* <!--  Dark Button --> */}
          <button type="button"
            className="flex justify-center items-center p-0 text-center font-extrabold m-auto mt-4 md:mt-0 scale-[1.5] 
          text-sky-700 dark:text-sky-200 hover:text-blue-200 hover:dark:text-slate-200 hover:scale-125 duration-300 ease-in-out transition-all"
            onClick={handleClickDark}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              className="bi bi-cloud-moon-fill scale-150" viewBox="0 0 16 16">
              <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
              <path
                d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
            </svg>

          </button>
          <Button
            handleButton={handleButtonClick}
            classes={"w-fit mt-1 md:mt-0 text-[0.56rem] text-green-700 font-bold border border-gray-500 hover:bg-gray-200 hover:border-gray-600 hover:text-red-600 rounded-md"}
            content={"initial user"}
          />

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="#"
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">
            Services
          </Navbar.Link>
          <Navbar.Link href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


