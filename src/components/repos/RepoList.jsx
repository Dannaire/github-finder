import React from "react";
import propTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title">
            Latest Repositories
          </h2>
          {repos !== null ? (
            repos.map((repo, index) => <RepoItem key={repo.id} repo={repo} />)
          ) : (
            <p>No repositories available</p>
          )}
        </div>
      </div>
    </div>
  );
}

RepoList.propTypes = {
  repos: propTypes.array.isRequired,
};

export default RepoList;
