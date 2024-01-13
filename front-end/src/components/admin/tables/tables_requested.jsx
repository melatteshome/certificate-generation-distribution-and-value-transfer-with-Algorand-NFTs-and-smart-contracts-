import React from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

const useStyles = makeStyles({
  tableContainer: {
    border: 'none',
    boxShadow: 'none',
  },
  table: {
    border: 'none',
  },
});

const RequestedTable = () => {
  const classes = useStyles();

  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleButtonClick(row)}>
                  Issue Certificate
                </Button>
                <Button variant="contained" color= "secondary" onClick={() => handleButtonClick(row)}>
                  Decline 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const handleButtonClick = (row) => {
  console.log(`Button clicked for row with ID: ${row.id}`);
};

export default RequestedTable;