import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

export const EquipmentTable = ({ equipment }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
};
return (
  <Paper className="mt-6">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold">Name</TableCell>
            <TableCell className="font-semibold">Type</TableCell>
            <TableCell className="font-semibold">Status</TableCell>
            <TableCell className="font-semibold">Last Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEquipment
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((eq) => (
              <TableRow key={eq.id}>
                <TableCell>{eq.name}</TableCell>
                <TableCell>{eq.type}</TableCell>
                <TableCell>
                  <StatusBadge status={eq.status} />
                </TableCell>
                <TableCell>{eq.lastUpdated}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={filteredEquipment.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
);
