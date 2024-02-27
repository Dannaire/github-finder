import React, { useContext, useState } from "react";
import Loading from "../layout/Loading";
import UserItem from "./UserItem";
// import Loading from "../Loading";
// import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";
// import UserNotFound from "../../pages/UserNotfound";

function UserResults() {
  const{users,loading}=useContext(GithubContext)


 if(!loading){
    return (
      <div className="grid place-content-center grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
    }else{
      return <Loading/> 
  } 
  }

export default UserResults;