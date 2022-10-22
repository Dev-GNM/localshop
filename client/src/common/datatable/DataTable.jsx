import React from 'react'
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {

    const rows = [
        {
            id: 1,
            name: "cooking Oil",
            price: 150,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },{
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
        {
            id: 2,
            name: "Maize Flour",
            price: 230,
        },
    ]

    const columns = [
        {
            field: 'col1',
            headerName: 'Column 1',
            width:150
        },
        {
            field: 'col2',
            headerName: 'Column 2',
            width:150
        },
        {
            field: 'col3',
            headerName: 'Column 3',
            width:150
        },
        {
            field: 'col3',
            headerName: 'Column 3',
            width:150
        },
        {
            field: 'col3',
            headerName: 'Column 3',
            width:150
        },
        {
            field: 'col3',
            headerName: 'Column 3',
            width:150
        },
        
    ]
  return (
      <Grid item xs={8} sx={{marginTop:"30px"}}>
          <DataGrid
              rows={rows}
              columns={columns}
          />
    </Grid>
  )
}

export default DataTable