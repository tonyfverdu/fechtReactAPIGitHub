import { IconContext } from "react-icons";
import { FaRegStar, FaRegEye } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

import { RiNurseFill } from 'react-icons/ri';


function CardFollowers({ follower, index }) {
  // const [idUser, setIdUser] = useState(follower.id)

  return (
    <article className="w-full flex flex-col justify-start items-center gap-y-1 p-1 mb-[0.1rem] rounded-lg bg-slate-100 border-2 border-slate-400 shadow-lg
     hover:-translate-y-2 hover:-skew-x-1 hover:scale-x-[0.99] hover:scale-y-[0.96] hover:rounded-xl hover:bg-slate-200 transition-all duration-300 ease-out">

      <section className="overflow-hidden w-full p-0 h-fit grid grid-cols-4 items-center gap-1 md:gap-3 bg-zinc-200 dark:bg-zinc-800 mx-1 
      rounded-lg border-1 border-zinc-400 shadow-2xl">
        <p className="p-2 ml-4 bg-black text-left text-gray-100  font-extrabold text-lg rounded-ee-full">{index + 1}</p>

        <span className="text-[0.7rem] text-left pl-2 text-gray-950 dark:text-gray-50 font-bold pr-3 mx-2">Id:
          <strong className=" w-auto text-[0.55rem] ml-2 text-gray-600">
            {follower.id}
          </strong>
        </span>

        <span className="overflow-hidden col-start-3 col-span-2 text-center text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] font-extrabold text-blue-950">
          {follower.login}
        </span>
      </section>

      <section className="overflow-hidden w-full p-1 h-fit flex flex-row justify-start items-center bg-zinc-200 dark:bg-zinc-800 mx-2 
      rounded-lg border-1 border-zinc-400 shadow-2xl border border-danger-600">
        <div className="min-w-[4rem] flex flex-row justify-start items-center" >
          <a target="_blank" className="flex justify-start items-start text-center p-1 ml-2" href={follower.html_url}>
            <img className="w-[3rem] h-[3rem] block p-0 m-0 rounded-full text-center border-[0.1rem] border-gray-400
              transition-all duration-300 ease-in-out hover:border-red-600 hover:blur-xs"
              src={follower.avatar_url} alt="Profile avatar" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mb-1">
          <span className="text-[0.65rem] text-left pl-2 text-gray-900 dark:text-gray-300 font-bold pr-3">Login:
            <strong className="text-[0.55rem] ml-2 text-gray-600 dark:text-gray-100 ">
              {follower.login}
            </strong>
          </span>
          <span className="text-[0.65rem] text-left pl-2 text-gray-900 font-bold mr-1">Type:
            <strong className="text-[0.55rem] ml-2 text-gray-600">
              {follower.type}
            </strong>
          </span>
          <span className="text-[0.65rem] text-left pl-2 text-gray-900 font-bold mr-6">Administrator?:
            <strong className="text-[0.55rem] ml-2 text-gray-600">
              {follower.site_admin.toString()}
            </strong>
          </span>
        </div>
      </section>
    </article >
  )
}

export default CardFollowers;

//  <article className="w-full grid grid-cols-1 min-w-3xl mx-auto my-1 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-1">

/*
 avatar_url: "https://avatars.githubusercontent.com/u/62194175?v=4"
events_url: "https://api.github.com/users/lamngo-nym/events{/privacy}"
followers_url: "https://api.github.com/users/lamngo-nym/followers"
following_url: "https://api.github.com/users/lamngo-nym/following{/other_user}"
gists_url: "https://api.github.com/users/lamngo-nym/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/lamngo-nym"
  id: 62194175
  login: "lamngo-nym"
node_id: "MDQ6VXNlcjYyMTk0MTc1"
organizations_url: "https://api.github.com/users/lamngo-nym/orgs"
received_events_url: "https://api.github.com/users/lamngo-nym/received_events"
  repos_url: "https://api.github.com/users/lamngo-nym/repos"
 site_admin: false
starred_url: "https://api.github.com/users/lamngo-nym/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/lamngo-nym/subscriptions"
  type: "User"
url: "https://api.github.com/users/lamngo-nym"
*/
