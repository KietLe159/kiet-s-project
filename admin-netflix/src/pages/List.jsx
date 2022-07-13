import React from 'react'
import SideBar from "../components/SideBar"
import NavBar from '../components/NavBar'
import DatabaseTable from '../components/DatabaseTable'
import "../scss/list.scss"

const List = ({path}) => {
  return (
    <div className='list-container'>
      <SideBar />
      <div className="list-content">
        <NavBar />
        <DatabaseTable path={path}/>
      </div>
    </div>
  )
}

export default List