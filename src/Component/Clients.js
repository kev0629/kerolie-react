import React from 'react';
import Data from './../data/presta.json'
import './assets/css/style.css'
import Table from './Table'

let Patientlist = Data.Patientlist
console.log(Data)

function Clients(){
    const columns = React.useMemo(
        () => [
          
              {
                Header: 'Personne Facturée',
                accessor: 'parentsName',
              },
              {
                Header: 'Nom du Patient',
                accessor: 'childFirstName',
              },
              {
                Header: 'Adresse',
                accessor: 'adress',
              },
              {
                Header: 'Code Postal',
                accessor: 'postCode',
              },
              {
                Header: 'ville',
                accessor: 'city',
              },
        ],
        []
      )
      const data = React.useMemo(() => Patientlist, [])
    return(
        <div className="contener">
            <Table className="centered-block" columns={columns} data={data} />
        </div>
    )
}

export default Clients;