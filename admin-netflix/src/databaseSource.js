export const columns=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field: "username", headerName: "Username", width: 350, renderCell: (param)=>(
        <div className="usernameWithImg">
            <img src={param.row.img} alt="avatar"/>
            {param.row.username}
        </div>
    )},
    { field: "email", headerName: "Email", width: 300},
    { field: "age", headerName: "Age", width: 100},
    { field: "status", headerName: "Status", width: 120, renderCell: param=>(
        <div className={`status  ${param.row.status}`}>{param.row.status}</div>
    )},
    
]

export const rows=[
    { id: 1, username: 'Snow Jon', age: 35, email: "slot1@gmail.com.vn", status: "passive", img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" },
    { id: 2, username: 'Lannister Cersei', age: 42, email: "slot2@gmail.com.vn", status: "active" , img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a"},
    { id: 3, username: 'Lannister Jaime', age: 45, email: "slot3@gmail.com.vn", status: "pending", img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" },
    { id: 4, username: 'Stark Arya', age: 16, email: "slot4@gmail.com.vn", status: "active" , img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a"},
    { id: 5, username: 'Targaryen Daenerys', age: null, email: "slot5@gmail.com.vn", status: "passive", img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" },
    { id: 6, username: 'Melisandre ull', age: 150, email: "slot6@gmail.com.vn", status: "passive", img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" },
    { id: 7, username: 'Clifford Ferrara', age: 44, email: "slot7@gmail.com.vn", status: "active" , img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a"},
    { id: 8, username: 'Frances Rossini', age: 36, email: "slot8@gmail.com.vn", status: "pending", img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a" },
    { id: 9, username: 'Roxie Harvey', age: 65, email: "slot9@gmail.com.vn", status: "active" , img: "https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/user-avatar.jpg?alt=media&token=1ae97af2-9a7a-4273-9e52-886ebe6eb63a"},
]