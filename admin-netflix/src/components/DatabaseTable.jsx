import React from 'react'
import "../scss/databaseTable.scss"
import { columns, rows } from '../databaseSource';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const DatabaseTable = ({path}) => {
    const extraColumn=[
        {field: "action", headerName: "Action", width: 200, renderCell: ()=>(
            <div className='cellAction'>
              <Link to="/user/test">
                <span className='viewButton'>View</span>
              </Link>
                <span className='deleteButton'>Delete</span>
            </div>
        )}
    ]

  return (
    
    <div style={{ height: `400px`, width: 'auto' }} className="database-container">
      <div className="database-addBtn">
        <Link to={`/${path}/new`}>
        <Button variant="outlined" >Add New</Button>
        </Link>
      </div>

      <DataGrid
        rows={rows}
        columns={columns.concat(extraColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="database-grid"
      />
    </div>

  )
}

export default DatabaseTable