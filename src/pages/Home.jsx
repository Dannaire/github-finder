import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  console.log(process.env.REACT_APP_GITHUB_TOKEN)
  return (
    <div>
      <UserSearch/>
      <UserResults/>
    </div>
  )
}

export default Home
