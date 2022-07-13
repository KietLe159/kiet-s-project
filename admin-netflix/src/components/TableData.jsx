import React from 'react'
import "../scss/tableData.scss"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Frozen yogurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const TableData = () => {
  return (

      <TableContainer component={Paper} className='table-container'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='table-cell'>Dessert (100g serving)</TableCell>
            <TableCell className='table-cell' align="center">Calories</TableCell>
            <TableCell className='table-cell' align="center">Fat&nbsp;(g)</TableCell>
            <TableCell className='table-cell' align="center">Carbs&nbsp;(g)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='table-cell' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='table-cell' align="center">{row.calories}</TableCell>
              <TableCell className='table-cell' align="center">{row.fat}</TableCell>
              <TableCell className='table-cell' align="center">{row.carbs}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData