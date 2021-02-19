import DataGrid from 'react-data-grid';
import React from 'react'
import { useQuery } from 'react-query';
import { Chip } from '@material-ui/core';

const columns = [
  {
    key: 'flight_number',
    name: 'Fight Name',
    width: 130,
    resizable: true,
    formatter: ({ row }) => (
      <React.Fragment>
        <div style={{ textAlign: 'center', fontSize: '1em' }}>
          {row.flight_number}
        </div>
      </React.Fragment>
    ),
  },
  {
    key: 'mission_name',
    name: 'Mission Name',
    resizable: true,
    formatter: ({ row }) => (
      <React.Fragment>
        <div style={{ textAlign: 'center', fontSize: '1em' }}>
          {row.mission_name}
        </div>
      </React.Fragment>
    ),
  },
  {
    key: 'launch_year',
    name: 'Launch Year',
    resizable: true,
    formatter: ({ row }) => (
      <React.Fragment>
        <div style={{ textAlign: 'center', fontSize: '1em' }}>
          {row.launch_year}
        </div>
      </React.Fragment>
    ),
  },
  {
    key: 'launch_success',
    name: 'Launch Success',
    resizable: true,
    formatter: ({ row }) => (
      <React.Fragment>
        <div style={{ textAlign: 'center', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
          {row.launch_success === 'true' ? (<Chip label={row.launch_success} variant="outlined" color='secondary' style={{ color: 'green', borderColor: 'green', width: '10vw' }} />)
            : (<Chip label={row.launch_success} variant="outlined" style={{ color: 'red', borderColor: 'red', width: 100 }} />)}
        </div>
      </React.Fragment>
    ),
  }
];

const ListLuanches = () => {
  const datalist = []
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.spacexdata.com/v3/launches').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  for (let i = 0; i < data.length; i++) {
    datalist.push({
      flight_number: data[i].flight_number,
      mission_name: data[i].mission_name,
      launch_year: data[i].launch_year,
      launch_success: `${data[i].launch_success}`
    })
  }

  return (
    <React.Fragment>
      
      <DataGrid
        columns={columns}
        rows={datalist}
        style={{ height: '80vh', textAlign: 'center' }}
        enableCellSelect={true}
      />
      
      
    </React.Fragment>
  )
}

export default ListLuanches