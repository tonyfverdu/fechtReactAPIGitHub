import { useState } from 'react';
import NavbarMenu from './components/NavbarMenu.jsx';
import HeaderA from './components/HeaderA.jsx';
import Button from './components/Button.jsx';
import logoGitHub from './assets/logos/github-mark.svg'
import CardUser from './components/CardUser.jsx';
import Footer from './components/Footer.jsx';

import { URL_API_BASE, USER_INI } from './utilities/constants.js';
import { fechtParams } from './functions/fechtParam.js';


function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(USER_INI);
  const [toogleUserData, setToogleUserData] = useState(false)

  const fechtUserGitHub = async () => {
    try {
      const response = await fetch(`${URL_API_BASE}/${userName}`)
      const data = await response.json();

      console.log("data:  ", data)

      setUserData(data);
    } catch (error) {
      console.error("Error in the fecth API:  ", error.message)
    }
    // finally {

    // }
  }

  const handleUserNameChange = (ev) => {
    setUserName(ev.target.value)
  }

  const handleOnClickSearch = () => {
    console.log("entro aqui")
    fechtUserGitHub()

    // const [URL_API_BASE, userName, setUserName] = parFunction
    // fechtParams(URL_API_BASE, userName, setUserName);
  }


  return (
    <div className="className={`container-fluid p-0 mx-auto bg-gray-50 dark:bg-gray-900 text-stone-900 
    dark:text-cyan-50 font-roboto h-screen ${darkMode ? 'dark' : ''}`">
      <div className="w-full h-screen container-fluid p-0 mx-auto bg-gray-50 dark:bg-gray-900 text-stone-900 dark:text-stone-50 font-roboto">
        <section className="flex justify-center items-center bg-gray-200 dark:bg-gray-700">
          <HeaderA
            title="Web Application ReactJS API GITHUB"
            subtitle="Accessing and manipulating data from GitHub's API"
            colorBG={"bg-blue-100 dark:bg-blue-950"}
            colorTextTitle={"text-zinc-900 dark:text-zinc-50"}
            colorTextSubtitle={"text-zinc-600 dark:text-zinc-100"}
            fontSizeTitle={"text-base md:text-3xl"}
            fontSizeSubtitle={"text-sm md:text-lg"}
          />
        </section>

        <NavbarMenu
          url={'https://github.com/'}
          title={"Github API REST V3"}
          setUserData={setUserData}
        />

        <main className="container-fluid mx-auto flex flex-col justify-start items-center gap-[0.04rem] bg-gray-100 dark:bg-gray-950">
          <HeaderA
            title="Search Users from GitHub !!"
            subtitle="with the API V3 of GitHub"
            colorBG={"bg-stone-300 dark:bg-stone-950"}
            colorTextTitle={"text-zinc-900 dark:text-zinc-50"}
            colorTextSubtitle={"text-zinc-600 dark:text-zinc-100"}
            fontSizeTitle={"text-base md:text-xl"}
            fontSizeSubtitle={"text-xs md:text-base"}
          />

          <section className="container-fluid mx-auto flex flex-col md:flex-row justify-start items-center gap-1 md:gap-8 my-2" >
            <div className="flex flex-row justify-start items-center">
              <input type="text" placeholder="Search GitHub`s User..." autoComplete='true' autoFocus required size="30"
                className="w-full px-4 py-2 text-neutral-700 text-md font-normal tracking-wide antialiased border-1 border-zinc-700 
              dark:text-neutral-100 dark:bg-black hover:border-zinc-900 transition-all duration-300 ease-in-out"
                value={userName} onChange={(ev) => handleUserNameChange(ev)} />
            </div>

            <Button
              handleButton={handleOnClickSearch}
              classes={"w-full px-4 py-2 font-bold text-md text-md text-zinc-900 dark:text-zinc-100 rounded-md border-1 border-zinc-700 bg-zinc-200 dark:bg-zinc-700 hover:border-zinc-900 hover:text-zinc-600 hover:bg-slate-300"}
              content={"Search"}
              parFunction={[URL_API_BASE, userName, setUserName]}
            />
          </section>

          <section className="container-fluid mx-auto flex justify-center items-center">
            <CardUser
              userData={userData}
              toogleUserData={toogleUserData}
              setToogleUserData={setToogleUserData}
            />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div >
  )
}

export default App;

/*
    <section className="flex justify-center items-center bg-gray-400 dark:bg-gray-950">
          <div className="w-[21rem] h-[3.4rem] hidden md:flex justify-between items-center gap-o md:gap-1 bg-blue-300 dark:bg-blue-900">
            <img src={logoTW} className="dark:bg-primary rounded-full" alt="Logo JS" width="18%" />
            <img src={logoJS} className="dark:bg-primary rounded-full" alt="Logo JS" width="12%" />
            <img src={logoGitHub} className="dark:bg-primary" alt="Logo ReactJS" width="12%" />
            <img src={logoReact} className="dark:bg-primary" alt="Logo ReactJS" width="25%" />
          </div>
        </section>
*/

/*
{
  "login": "linder3hs",
  "id": 20673011,
  "node_id": "MDQ6VXNlcjIwNjczMDEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/20673011?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/linder3hs",
  "html_url": "https://github.com/linder3hs",
  "followers_url": "https://api.github.com/users/linder3hs/followers",
  "following_url": "https://api.github.com/users/linder3hs/following{/other_user}",
  "gists_url": "https://api.github.com/users/linder3hs/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/linder3hs/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/linder3hs/subscriptions",
  "organizations_url": "https://api.github.com/users/linder3hs/orgs",
  "repos_url": "https://api.github.com/users/linder3hs/repos",
  "events_url": "https://api.github.com/users/linder3hs/events{/privacy}",
  "received_events_url": "https://api.github.com/users/linder3hs/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Linder Hassinger",
  "company": "WT",
  "blog": "https://www.linderhassinger.info/",
  "location": "Lima, Perú",
  "email": null,
  "hireable": true,
  "bio": "Software Developer\r\n",
  "twitter_username": "linder3hs",
  "public_repos": 191,
  "public_gists": 1,
  "followers": 246,
  "following": 10,
  "created_at": "2016-07-27T01:33:45Z",
  "updated_at": "2023-07-25T22:25:36Z"
}
*/