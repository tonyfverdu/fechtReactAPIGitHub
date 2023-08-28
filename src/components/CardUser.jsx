import { useState, useEffect } from 'react';
// import useFetch from '../hooks/useFetch.js';
import Button from './Button.jsx';
import CardFollowers from './CardFollowers.jsx'
import CardRepo from './CardRepo.jsx';

import { IconContext } from "react-icons";
import { BsFillPeopleFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaTwitter, FaGithub, FaBlogger } from 'react-icons/fa';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { URL_API_BASE, URL_TWITTER, MAP_API_GOOGLE_MAP, KEY_GOOGLEMAP_API } from '../utilities/constants.js'


function CardUser({ userData, toogleUserData, setToogleUserData }) {
  const urlFechtRepositories = `${URL_API_BASE}/${userData.login}/repos`;
  // const { dataRepo, loading, errorRepositories, handleCancelControllerRepositories } = useFetch(urlFechtRepositories);

  const [indexTinCreateData, setIndexTinCreateData] = useState(0)
  const [fechtType, setFechtType] = useState("")
  const [loading, setLoading] = useState(true);
  const [followersData, setFollowersData] = useState(null)
  const [errorFetch, setErrorFetch] = useState(null);
  const [controller, setController] = useState(null);

  const [repositoriesData, setRepositoriesData] = useState(null)


  useEffect(() => {
    console.log(userData)
    setIndexTinCreateData(userData.created_at.indexOf('T'))
  }, [])

  const fechtUserFollowers = async () => {
    const urlFecht = `${URL_API_BASE}/${userData.login}/followers`;
    try {
      const response = await fetch(urlFecht)
      const data = await response.json();

      setFollowersData(data);
      setToogleUserData(!toogleUserData)
      setFechtType("followers")
    } catch (error) {
      console.error('Error in the fecth API "fechtUserFollowers": ', error.message)
    }
    // finally {

    // }
  }
  const fechtUserRepositories = async () => {
    const urlFecht = `${URL_API_BASE}/${userData.login}/repos`;
    const abortController = new AbortController();
    setController(abortController)
    setLoading(true);

    try {
      const response = await fetch(urlFecht)
      const data = await response.json();

      setRepositoriesData(data)
      setToogleUserData(!toogleUserData)
      setFechtType("repositories")
    } catch (error) {
      error => controller ? setErrorFetch("Request Cancel") : setErrorFetch(error)
      console.error('Error in the fecth API "fechtUserRepositories": ', errorFetch)
    }
    finally {
      setLoading(false)
    }
  }

  const handleClick = () => {
    fechtUserFollowers();
  }

  const handleButtonRepository = () => {
    fechtUserRepositories();
  }
  const handleCancelControllerRepositories = () => {
    if (controller) {
      controller.abort();
      setErrorFetch("Request Cancel")
    }
  }



  return (
    <div className={`w-[380px] md:w-[620px] grid grid-cols-1 gap-1 lg:gap-4`}>
      <article className="w-full grid grid-cols-1 min-w-5xl mx-auto my-2 bg-stone-300 dark:bg-stone-100 rounded-md shadow-xl p-1 md:p-2">
        <section className="flex flex-col gap-1 bg-gray-50 dark:bg-gray-950 mb-2 md:mb-3">
          <div className="flex justify-between items-center gap-[2px] p-0 mb-4" >
            <a target="_blank" className="flex w-[40%] p-1 m-auto" href={userData.html_url}>
              <img className="w-[4.9rem] h-[4.9rem] block p-0 m-1 md:m-4 rounded-full text-center border-[0.14rem] border-gray-400 
              transition-all duration-300 ease-in-out hover:border-red-600 hover:blur-xs"
                src={userData.avatar_url} alt="Profile avatar" />
            </a>
            <div className="w-full py-1 md:py-2 px-1 flex flex-col justify-center items-center h-auto m-0">
              <h2 className="w-full mx-auto flex justify-center items-center text-center text-sm font-extrabold">{userData.name}</h2>
              <div className="w-full flex justify-around items-center font-extrabold mb-2">

                <div className="flex justify-between items-center mx-1 mr-2 h-4 md:h-8">
                  <IconContext.Provider value={{ color: "navy", size: "1.1rem" }}>
                    <div>
                      <BsFillPeopleFill />
                    </div>
                  </IconContext.Provider>
                  <span className="text-[0.70rem] font-bold text-gray-600 ml-2 mx-1">{userData.followers}</span>
                  <button type="button" className="w-full flex flex-center justify-center items-center"
                    onClick={() => handleClick()}>
                    <span className="text-[0.65rem] text-center text-gray-900 dark:text-gray-200 font-bold 
                    hover:text-[0.68rem] hover:text-red-600 hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                      followers
                    </span>
                  </button>
                </div>

                <span className="text-[0.85rem] text-center text-gray-900 dark: dark:text-gray-200 font-bold">.</span>

                <div className="flex justify-around items-center mx-1 h-4 md:h-8">
                  <span className="text-[0.70rem] font-bold text-gray-600 mx-1">{userData.following}</span>
                  <a target="_blank" className="w-full flex flex-center justify-center items-center"
                    href={`${URL_API_BASE}/${userData.login}/followers`}>
                    <span className="text-[0.65rem] text-center text-gray-900 font-bold 
                    hover:text-[0.65rem] hover:text-red-600 hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
                      following
                    </span>
                  </a>
                </div>
              </div>

              <div className="w-full flex justify-around items-center font-extrabold mb-1">
                <div className="w-[50%] flex justify-between items-center mx-[0.05rem] h-8">
                  <a className="flex justify-start items-center ml-2" target="_blank" href={`${MAP_API_GOOGLE_MAP}?center=${'Hamburg'},CA&zoom=14&size=400x400&key=${KEY_GOOGLEMAP_API}`}>
                    <IconContext.Provider value={{ color: "red", size: "1.3rem" }}>
                      <div>
                        <TiLocation />
                      </div>
                    </IconContext.Provider>
                    <span className="text-[0.6rem] ml-2 font-bold text-gray-600 dark:text-gray-100">{userData.location}</span>
                  </a>
                </div>

                <div className="w-[50%] flex justify-start items-center gap-1 mx-[0.05rem] ml-6 h-8">
                  <IconContext.Provider value={{ color: "navy", size: "1.1rem" }}>
                    <div>
                      <HiOutlineBuildingOffice2 />
                    </div>
                  </IconContext.Provider>
                  <span className="text-[0.6rem] ml-2 font-bold text-gray-600 dark:text-gray-100">{userData.company}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mb-3">
            <span className="text-[0.65rem] text-left pl-2 text-gray-900 dark:text-gray-300 font-bold pr-3">Login:
              <strong className="text-[0.55rem] ml-2 text-gray-600 dark:text-gray-100 ">
                {userData.login}
              </strong>
            </span>
            <span className="text-[0.65rem] text-left pl-2 text-gray-900 font-bold mr-1">Type:
              <strong className="text-[0.55rem] ml-2 text-gray-600">
                {userData.type}
              </strong>
            </span>
            <span className="text-[0.65rem] text-left pl-2 text-gray-900 font-bold mr-6">Administrator?:
              <strong className="text-[0.55rem] ml-2 text-gray-600">
                {userData.site_admin.toString()}
              </strong>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1 mx-1 md:gap-2 mb-3 md:mb-2">
            <span className="text-left text-[0.65rem] font-bold text-gray-800 dark:text-gray-200 pl-1 md:pl-2 ">Email:
              <strong className="text-[0.60rem] text-gray-600 dark:text-gray-100 ">
                {userData.email}
              </strong>
            </span>
            <div className="flex justify-between items-center gap-1 md:gap-2 dark:text-gray-100">
              <span className="w-[36%] flex justify-center items-center text-left text-[0.6rem] font-bold text-gray-800 
            dark:text-gray-100 hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
                <a target="_blank" className="flex justify-center items-center" href={`${URL_TWITTER}${userData.twitter_username}`}>
                  <IconContext.Provider value={{ color: "navy", size: "1.4rem" }}>
                    <FaTwitter />
                  </IconContext.Provider>
                </a>
              </span>
              <span className="w-[36%] flex justify-center items-center text-left text-[0.6rem] font-bold text-gray-800 
            dark:text-gray-100 hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
                <a target="_blank" className="flex justify-center items-center" href={userData.html_url}>
                  <IconContext.Provider value={{ color: "black", size: "1.4rem" }}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </span>
              <span className="w-[36%] flex justify-center items-center text-left text-[0.6rem] font-bold text-gray-800 
            dark:text-gray-100 hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
                <a target="_blank" className="flex justify-center items-center" href={userData.blog}>
                  <IconContext.Provider value={{ color: "red", size: "1.4rem" }}>
                    <FaBlogger />
                  </IconContext.Provider>
                </a>
              </span>
            </div>
          </div>

          <div className="px-1 md:px-2 flex justify-between items-center gap-1 md:gap-2 mb-3 md:mb-2">
            <span className="ml-1 text-left text-[0.7rem] font-bold text-gray-800 pr-2 dark:text-gray-200">Created:
              <strong className="text-[0.65rem] ml-2 text-gray-600 dark:text-gray-100">
                {userData.created_at.slice(0, indexTinCreateData).replaceAll("-", " / ").split("/").reverse()}
              </strong>
            </span>
            <span className="text-left text-[0.7rem] font-bold text-gray-800 pr-2 dark:text-gray-200">Updated:
              <strong className="text-[0.65rem] ml-2 text-gray-600 dark:text-gray-100">
                {userData.updated_at.slice(0, indexTinCreateData).replaceAll("-", " / ").split("/").reverse()}
              </strong>
            </span>
          </div>

          <div className="grid grid-cols-1 mb-3">
            <span className="text-left text-[0.7rem] font-bold text-gray-800 pl-2 dark:text-gray-200">Bio:
              <strong className="text-[0.65rem] text-justify text-gray-600 dark:text-gray-100 ml-2">
                {userData.bio}
              </strong>
            </span>
          </div>
        </section>

        <section className="flex flex-col gap-1 md:gap-2 bg-gray-50 dark:bg-gray-900 mb-2 md:mb-3">
          <div className="flex flex-row justify-start items-center gap-3 md:gap-8 mb-2">
            <div className="flex flex-row justify-start items-center gap-1 md:gap-2 dark:text-gray-100">
              <span className="text-[0.7rem] text-left pl-2 text-gray-900 dark:text-gray-200 font-bold mr-1">Repositories:
                <strong className="text-[0.65rem] ml-2 text-gray-600 dark:text-gray-100">
                  {userData.public_repos}
                </strong>
              </span>
              <IconContext.Provider value={{ color: "green", size: "1.4rem" }}>
                <button className="pointer-events-auto hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
                  onClick={handleButtonRepository}>
                  <RiGitRepositoryLine />
                </button>
              </IconContext.Provider>
              <Button
                handleButton={handleCancelControllerRepositories}
                classes={"w-fit mt-1 md:mt-0 text-[0.56rem] text-green-700 font-bold border border-gray-500 hover:bg-gray-200 hover:border-gray-600 hover:text-red-600 rounded-md"}
                content={"Cancel Request"}
              />
            </div>

            <span className="text-[0.7rem] text-left pl-2 text-gray-900 dark:text-gray-200 font-bold mr-1">Gists:
              <strong className="text-[0.65rem] ml-2 text-gray-600 dark:text-gray-100">
                {userData.public_gists}
              </strong>
            </span>
          </div>
        </section>
      </article >


      {/* FECHTS DATA CONTAINER */}
      <article className="w-full grid grid-cols-1 min-w-5xl mx-auto my-2 bg-stone-300 dark:bg-stone-100 rounded-md shadow-xl p-1 md:p-2">
        <section className="flex flex-col gap-y-1 bg-gray-50 dark:bg-gray-900">
          {
            !toogleUserData

              ? ""

              :

              fechtType === 'followers' && Array.isArray(followersData) ?

                followersData.map((follower, index) => {
                  return (
                    <CardFollowers key={follower.id} index={index} follower={follower} />
                  )
                })

                :
                <>
                  {errorFetch && fechtType === "repositories" &&
                    <p className="text-center text-[0.9rem] font-extrabold text-red-600 pr-2 dark:text-red-500">
                      Error of Fetch Repositories:  {errorFetch}
                    </p>
                  }

                  {
                    fechtType === "repositories" && Array.isArray(repositoriesData) ?

                      repositoriesData.map((repository, index) => {
                        return (
                          <CardRepo key={repository.id} repository={repository} index={index} />
                        )
                      })

                      :

                      ""
                  }
                </>
          }
        </section>
      </article>

    </div>
  )
}

export default CardUser;