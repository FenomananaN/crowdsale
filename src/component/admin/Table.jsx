import React from 'react'
import DataTable from 'react-data-table-component'

export const Table = ({data}) => {

    const _data = [
        {
            address: '0xkjhkjhkjhkjhkjdhksjdhksjdhskjdh',
            fundContribution: 564,
            usdtContribution:4,
            weiContribution:12356,
        },
        {
            address: '0xkjhkjhkjhkjhkjdhksjdhksjdhskjdh',
            fundContribution: 564,
            usdtContribution:4,
            weiContribution:12356,
        },
    ]

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
            selector: row => row.fundContribution,
        },
        {
            name: 'USDT',
            selector: row => row.usdtContribution,
        },
        {
            name: 'BNB',
            selector: row => row.weiContribution,
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
     <DataTable
            columns={columns}
            data={_data}
            customStyles={tableCustomStyles}
            theme='dark'
            persistTableHead
            noDataComponent="no contributor yet"
        />
  )
}
//#0B5E8F
//#282c34