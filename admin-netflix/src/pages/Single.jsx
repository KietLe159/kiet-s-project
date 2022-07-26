import ColumnChart from '../components/ColumnChart'
import DatabaseTable from "../components/DatabaseTable"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import "../scss/single.scss"


const Single = () => {
  return (
    <div className='single-container'>
      <SideBar />
      <div className="single-content">
        <NavBar />
        <div className="single-content-top">
          <div className="single-content-left">
            <div className='single-editButton'>Edit</div>
            <h1 className='single-info'>Information</h1>
            <div className="single-detail">
                <div className="single-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" alt="" />
                </div>

                <div className="single-items">
                  <h1 className='single-title'>Elizabeth Olsen</h1>
                  <div className="single-item">
                    <span>Email: </span>
                    <span>slot1@gmail.com.vn</span>
                  </div>

                  <div className="single-item">
                    <span className='single-item-phone'>Phone: </span>
                    <span>+1 2345 678</span>
                  </div>

                  <div className="single-item">
                    <span className='single-item-address'>Address: </span>
                    <span>Elton St. 234 Lost Angeles</span>
                  </div>

                  <div className="single-item">
                    <span className='single-item-country'>Country: </span>
                    <span>USA</span>
                  </div>
                </div>

            </div>
          </div>

          <div className="single-content-right">
            <ColumnChart aspect={7/2} title= "User Spending (Last 6 Month)"/>
          </div>
        </div>

        <div className="single-content-bottom">
          <h1>User List</h1>
          <DatabaseTable />
        </div>
      </div>
    </div>
  )
}

export default Single