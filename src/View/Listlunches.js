import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useQuery } from 'react-query';
import {
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import Dialogdetail from '../components/Dialogdetail'

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiDataGrid-cell" :{
      color:'white'
    },
    "& div.MuiDataGrid-colCellTitle":{
      color: 'black'
    },
    "& div.MuiToolbar-root":  {
      color: 'white'
    },
    "& div.MuiTablePagination-actions":{
      color: 'white'
    },
    "& div.MuiIconButton-label" :{
      color: 'white'
    },
    "& div.MuiDataGrid-colCellWrapper" :{
      backgroundColor: 'white'
    }
  }
}));
export default function Listlunches() {

  const classes = useStyles();

  const [selected, setSelected] = useState(null)

  const { isLoading, error, data } = useQuery('Listlaunches', () =>
    fetch('https://api.spacexdata.com/v3/launches').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  if (error) return 'An error has occurred: ' + error.message


  const handleClick = (e) => {
    setSelected(e.row)
  }

  const handleClose = () => {
    setSelected(null)
  }

  return (
    <React.Fragment>
      <div style={{ height: '80vh', width: '100%', backgroundColor:'black' }} className={classes.root}>
        <DataGrid
          rows={Array.isArray(data) ?
            data.map((item) => ({
              id: item.flight_number.toString(),
              mission_name: item.mission_name,
              launch_year: item.launch_year,
              launch_success: `${item.launch_success}`
            })) :
            []
          }
          columns={columns}
          pagination
          pageSize={10}
          onRowClick={handleClick}
        />
      </div>
      {selected ? (<Dialogdetail mission={selected} onClose={handleClose} />) : null}

    </React.Fragment>
  );
}
