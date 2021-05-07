import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export interface IHeadCell {
  label: string;
}

type ITableProps = {
  dataItems: JSX.Element[] | null;
  headCells: IHeadCell[];
}

export const EnhancedTable: React.FunctionComponent<ITableProps> = (props) => {
  const EnhancedTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          {props.headCells.map((headCell) => (
            <TableCell
              key={headCell.label}
            >
                {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  return (
    <div>
      <Paper>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead/>
            <TableBody className='table-body'>
              {props.dataItems}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
