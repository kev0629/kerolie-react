import React from 'react';
import {BrowserRouter as Route, NavLink, Switch,
  useRouteMatch } from 'react-router-dom';
import Data from './../data/presta.json'
import './assets/css/style.css'
import Table from './Table'

let Patientlist = Data.Patientlist
let orgList = Data.structureList
console.log(Data)

function PersonneTabel(){
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
    <Table className="centered-block" columns={columns} data={data} />
  )
}

function OrganismeTabel(){
  const columns = React.useMemo(
    () => [
      
          {
            Header: "Nom de l'organisme",
            accessor: 'structureName',
          },
          {
            Header: 'Adresse',
            accessor: 'structureAdress',
          },
          {
            Header: 'Code Postal',
            accessor: 'structurePostcode',
          },
          {
            Header: 'ville',
            accessor: 'structureCity',
          },
    ],
    []
  )
  const data = React.useMemo(() => orgList, [])
  return(
    <Table className="centered-block" columns={columns} data={data} />
  )
}


function Clients(){
  let { url } = useRouteMatch();
    return(
      <div className="contener">
      <ul>
        <li className='client-route'>
          <NavLink to={`${url}/personnes`} activeClassName="selected-blue" className='client-route'>Personnes</NavLink>
        </li>
        <li className='client-route'>
          <NavLink to={`${url}/organismes`} activeClassName="selected-blue" >Organismes</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${url}/personnes`}>
          <PersonneTabel/>
        </Route>
        <Route path={`${url}/organismes`}>
          <OrganismeTabel/>
        </Route>
      </Switch>
    </div>
    )
}

export default Clients;