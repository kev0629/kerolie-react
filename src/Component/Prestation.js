import React from 'react';
import Data from './../data/presta.json'
import './assets/css/style.css'
import './assets/css/table.css'
import Table from './Table'

let PrestationList = Data.PrestationList





function Prestation(){
    const columns = React.useMemo(
        () => [
          
              {
                Header: 'Prestation',
                accessor: 'prestation',
              },
              {
                Header: 'Prix',
                accessor: 'price',
              },
        ],
        []
      )
      const data = React.useMemo(() => PrestationList, [])
    return(
        <div className="contener">
            <Table className="centered-block" columns={columns} data={data} />
        </div>
    )
}

export default Prestation;