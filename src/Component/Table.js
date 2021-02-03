import React from 'react';
import { useTable } from 'react-table'
import { BsTrash,BsPencil } from "react-icons/bs";



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()} >
              {column.render("Header")}
            </th>
          ))}
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} >
            {row.cells.map((cell, j) => {
              return (
                <td
                  rowSpan={cell.rowSpan}
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
            <td onClick={() => console.log(row.original)}><BsPencil/></td>
            <td onClick={() => console.log(row.original)}><BsTrash/></td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

  export default Table;