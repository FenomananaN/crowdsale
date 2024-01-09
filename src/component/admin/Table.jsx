import { Box } from '@mui/material'
import React from 'react'
import DataTable from 'react-data-table-component'

export const Table = ({data}) => {
    console.log(data)

    const columns = [
    
        {
            name: 'Address',
            selector: row => row.address,
            cell: (({address}) => {
                return  address
            })
        },
        {
            name: "Total Investi",
            selector: row => row.fund,
        },
        {
            name: 'USDT',
            selector: row => row.usdt,
        },
        {
            name: 'BNB',
            selector: row => row.wei,
        }  
    ]

    const tableCustomStyles = {
        headRow:{
          style: {
            fontWeight:550,
            fontSize:'18px',
            backgroundColor: '#282c34'
            
          },
        },
        rows: {
          style: {
            backgroundColor: '#172124'
          }
        }
        
      }

  return (
    <Box sx={{width:{xs: '100%', md: '60vw'}}}>
     <DataTable
            columns={columns}
            data={data}
            customStyles={tableCustomStyles}
            theme='dark'
            persistTableHead
            noDataComponent="no contributor yet"
        />
    </Box>
  )
}
//#0B5E8F
//#282c34