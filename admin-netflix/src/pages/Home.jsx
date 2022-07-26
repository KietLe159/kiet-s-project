import ColumnChart from "../components/ColumnChart"
import TableData from "../components/TableData"
import NavBar from "../components/NavBar"
import ProgressBar from "../components/ProgressBar"
import SideBar from '../components/SideBar'

import Widget from '../components/Widget'
import "../scss/home.scss"


const Home = () => {
  return (
    <div className='home-container'>

        <SideBar />

      <div className='home-content'>
          <NavBar />

        <div className="home-widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="home-charts">
          <ProgressBar />
          <ColumnChart aspect={2/1} tittle= "Previous Revenue"/>
        </div>

        <div className="home-list-container">
          <div className="home-list-user">
            <h1 className="home-list-title">Latest User</h1>
            <TableData type="users"/>
          </div>
          <div className="home-list-movie">
            <h1 className="home-list-title">Latest Movie</h1>
            <TableData type="movies"/>
          </div>
        </div>

      </div>
      </div>
  )
}

export default Home