import * as React from 'react';
import { buildRowParams, DataGrid } from '@material-ui/data-grid';
import { useQuery } from 'react-query';
import CircularProgress from '@material-ui/core/CircularProgress';

const columns = [
  { 
    field: 'id', 
    headerName: 'Fight Number', 
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
  },
  { 
    field: 'mission_name', 
    headerName: 'Mission Name', 
    flex: 1,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'launch_year',
    headerName: 'Launch Year',
    type: 'number',
    flex: 1,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'launch_success',
    headerName: 'Launch Success',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    sortable: false,

  },
];


export default function Listlunches() {
  
  const datalist = []
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.spacexdata.com/v3/launches').then(res =>
      res.json()
    )
  )
  if (isLoading) return <CircularProgress color="secondary" />
  if (error) return 'An error has occurred: ' + error.message
  for (let i = 0; i < data.length ; i++) {
    let number = data[i].flight_number.toString();
    datalist.push({
      id: number,
      mission_name: data[i].mission_name,
      launch_year: data[i].launch_year,
      launch_success: `${data[i].launch_success}`
    })
  }

  const handleClick = (e) => {
    const row = datalist.filter((r) => r.id === e.row.id)
  }

  return (
    <div style={{ height: '80vh', width: '100%', backgroundColor:'white', }} >
      <DataGrid
        rows={datalist} 
        columns={columns} 
        autoPageSize 
        pagination
        onRowClick={handleClick}
      />
    </div>
  );
}
