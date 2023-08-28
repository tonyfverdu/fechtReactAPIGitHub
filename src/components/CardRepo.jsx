import { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { FaRegStar, FaRegEye } from 'react-icons/fa';

function CardRepo({ repository, index }) {
  const [indexTinCreateData, setIndexTinCreateData] = useState(0);

  useEffect(() => {
    setIndexTinCreateData(repository.created_at.indexOf('T'))
  }, []);

  return (
    <article className="w-full flex flex-col justify-start items-center gap-y-1 p-1 mb-[0.1rem] rounded-lg bg-slate-100 border-2 border-slate-400 shadow-lg
     hover:-translate-y-2 hover:-skew-x-1 hover:scale-x-[0.99] hover:scale-y-[0.96] hover:rounded-xl hover:bg-slate-200 transition-all duration-300 ease-out">
      <section className="overflow-hidden w-full p-0 h-fit grid grid-cols-4 items-center gap-x-1 bg-zinc-200 mx-2 rounded-lg border-1 border-zinc-400 shadow-2xl">
        <p className="p-2 ml-4 bg-black text-left text-gray-100  font-extrabold text-lg rounded-ee-full">{index + 1}</p>

        <span className="text-[0.7rem] text-left pl-2 text-gray-950 dark:text-gray-50 font-bold pr-3 mx-2">Id:
          <strong className=" w-auto text-[0.55rem] ml-2 text-gray-600">
            {repository.id}
          </strong>
        </span>

        <span className="overflow-hidden col-start-3 col-span-2 text-left text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] font-extrabold text-blue-950">
          {repository.name}
        </span>
      </section>

      <section className="overflow-hidden w-full p-1 h-fit grid grid-cols-4 items-center gap-x-1 bg-zinc-200 dark:bg-zinc-800 mx-2 rounded-lg border-1 border-zinc-400 shadow-2xl">

        <div className="flex justify-start items-center">
          <figure className="flex justify-start items-start text-center w-[60%] p-1 ml-2">
            <img className="w-[3.6rem] h-[3.6rem] block p-0 m-0 rounded-full text-center border-[0.12rem] border-gray-400"
              src={repository.owner.avatar_url} alt="Profile avatar" />
          </figure>

          <div className="flex flex-col justify-start items-center gap-4">
            <IconContext.Provider value={{ color: "yellow", size: "0.8rem" }}>
              <div className="flex justify-center items-center gap-x-0">
                <FaRegStar />
                <span className="h-auto text-[0.7rem] text-left pl-2 text-gray-600 font-bold pr-3">{repository.stargazers_count}</span>
              </div>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "navy", size: "0.8rem" }}>
              <div className="flex justify-center items-center gap-x-0">
                <FaRegEye />
                <span className="h-auto text-[0.7rem] text-left pl-2 text-gray-600 font-bold pr-3">{repository.watchers}</span>
              </div>
            </IconContext.Provider>
          </div>
        </div>


        <div className="w-full col-span-3 flex flex-col justify-start items-center gap-1">
          <div className="w-full flex justify-start items-start gap-x-2">
            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Created:
              <strong className="h-auto w-auto text-[0.55rem] ml-2 text-gray-600">
                {repository.created_at.slice(0, indexTinCreateData).replaceAll("-", " / ").split("/").reverse()}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Pushed:
              <strong className="h-auto w-auto text-[0.55rem] ml-2 text-gray-600">
                {repository.pushed_at.slice(0, indexTinCreateData).replaceAll("-", " / ").split("/").reverse()}
              </strong>
            </span>
          </div>

          <div className="w-full flex justify-start items-start gap-x-2">
            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Language:
              <strong className="h-auto w-auto text-[0.55rem] ml-2 text-gray-600">
                {repository.language}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Size:
              <strong className="h-auto w-auto text-[0.55rem] ml-2 text-gray-600">
                {repository.size}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Visibility:
              <strong className="h-auto w-auto text-[0.55rem] ml-2 text-gray-600">
                {repository.visibility}
              </strong>
            </span>
          </div>

          <div className="w-full flex justify-start items-start gap-x-[0.2rem]">
            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Archived?:
              <strong className="h-auto w-auto text-[0.55rem] ml-1 text-gray-600">
                {repository.archived.toString()}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Brach:
              <strong className="h-auto w-auto text-[0.55rem] ml-1 text-gray-600">
                {repository.default_branch}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Pages?:
              <strong className="h-auto w-auto text-[0.55rem] ml-1 text-gray-600">
                {repository.has_pages.toString()}
              </strong>
            </span>

            <span className="h-auto text-[0.65rem] text-left pl-2 text-gray-950 font-bold pr-3">Project?:
              <strong className="h-auto w-auto text-[0.55rem] ml-1 text-gray-600">
                {repository.has_projects.toString()}
              </strong>
            </span>
          </div>
        </div>
      </section>

      <section className="overflow-hidden w-full p-1 h-fit grid grid-cols-1 items-start gap-x-1 bg-zinc-200 dark:bg-zinc-800 mx-2 rounded-lg border-1 border-zinc-400 shadow-2xl">
        <span className="h-auto text-[0.75rem] text-left pl-2 text-gray-950 font-bold pr-3">Description:
          <strong className="h-auto w-auto text-[0.65rem] ml-2 text-gray-600">
            {repository.description}
          </strong>
        </span>
      </section>

      <section className="overflow-hidden w-full p-1 h-fit grid grid-cols-1 items-end gap-x-1 bg-zinc-200 dark:bg-zinc-800 mx-2 rounded-lg border-1 border-zinc-400 shadow-2xl">
        <div className="flex justify-end items-center gap-x-1 p-1" role="group" aria-label="Basic example">
          <a target="_blank" href={`${repository.html_url}/archive/refs/heads/master.zip`} className="bg-red-700 text-white text-center font-extrabold text-[0.8rem] rounded-full px-3 py-1 mx-4 border shadow-lg 
          border-red-900 hover:scale-[0.96] hover:bg-red-800 hover:border-red-950 transition-all duration-300 ease-out">
            Download
          </a>

          <a target="_blank" href={repository.clone_url} className="bg-green-700 text-white text-center font-extrabold text-[0.8rem] rounded-full px-3 py-1 mx-4 border shadow-lg 
          border-green-900 hover:scale-[0.96] hover:bg-green-800 hover:border-green-950 transition-all duration-300 ease-out">
            Clone
          </a>
          <a target="_blank" href={repository.html_url} className="bg-yellow-700 text-white text-center font-extrabold text-[0.8rem] rounded-full 
          px-3 py-1 mx-4 border shadow-lg 
          border-yellow-900 hover:scale-[0.96] hover:bg-yellow-800 hover:border-yellow-950 transition-all duration-300 ease-out">
            View
          </a>
        </div>
      </section>
    </article>
  )
}

export default CardRepo;

/*
allow_forking: true
archive_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/{archive_format}{/ref}"
  archived: false
assignees_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/assignees{/user}"
blobs_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/branches{/branch}"
 clone_url: "https://github.com/tonyfverdu/beatlemaniac.git"
collaborators_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/comments{/number}"
commits_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/commits{/sha}"
compare_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/contents/{+path}"
contributors_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/contributors"
created_at: "2023-01-26T22:46:25Z"
 default_branch: "main"
deployments_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/deployments"
  description: "project Beatlemania online-shop"
disabled: false
 downloads_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/downloads"
events_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/events"
fork: false
forks: 0
forks_count: 0
forks_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/forks"
full_name: "tonyfverdu/beatlemaniac"
git_commits_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/git/tags{/sha}"
git_url: "git://github.com/tonyfverdu/beatlemaniac.git"
has_discussions: false
has_downloads: true
has_issues: true
has_pages: true
has_projects: true
has_wiki: true
homepage: null
hooks_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/hooks"
 html_url: "https://github.com/tonyfverdu/beatlemaniac"
  id: 593819195
is_template: false
issue_comment_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/issues/events{/number}"
issues_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/issues{/number}"
keys_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/keys{/key_id}"
labels_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/labels{/name}"
language: "JavaScript"
languages_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/languages"
license: null
merges_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/merges"
milestones_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/milestones{/number}"
mirror_url: null
  name: "beatlemaniac"
node_id: "R_kgDOI2T2Ow"
notifications_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/notifications{?since,all,participating}"
open_issues: 0
open_issues_count: 0
owner: {login: 'tonyfverdu', id: 98748662, node_id: 'U_kgDOBeLI9g', avatar_url: 'https://avatars.githubusercontent.com/u/98748662?v=4', gravatar_id: '', …}
private: false
pulls_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/pulls{/number}"
pushed_at: "2023-02-06T23:56:24Z"
releases_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/releases{/id}"
size: 916709
ssh_url: "git@github.com:tonyfverdu/beatlemaniac.git"
stargazers_count: 1
stargazers_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/stargazers"
statuses_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/subscribers"
subscription_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/subscription"
svn_url: "https://github.com/tonyfverdu/beatlemaniac"
tags_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/tags"
teams_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/teams"
topics: []
trees_url: "https://api.github.com/repos/tonyfverdu/beatlemaniac/git/trees{/sha}"
updated_at: "2023-02-06T21:00:16Z"
  url: "https://api.github.com/repos/tonyfverdu/beatlemaniac"
visibility: "public"
watchers: 1
watchers_count: 1
web_commit_signoff_required: false
*/