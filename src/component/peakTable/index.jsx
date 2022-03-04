import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./styles.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";
import alert from "../../services/alertServices";
import { toast } from "react-toastify";
const PeakTable = ({ rows, getAlert, editAlert }) => {
  const page_size = 5;
  const [pageContent, setpageContent] = useState([]);
  useEffect(() => {
    if (rows.length) {
      setpageContent(rows.slice(0, page_size));
    }
  }, [rows]);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const deleteAlert = (row) => {
    console.log(row);
    alert
      .deleteAlert({ id: row.id })
      .then((res) => {
        getAlert();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const handlePageChange = (event, value) => {
    console.log(value);
    setpageContent(rows.slice((value - 1) * page_size, value * page_size));
  };
  return (
    <div className="tableContainer">
      <div className="tableTopBar">
        <div>
          <Button variant="contained" className="customBut">
            Alerts
          </Button>
          <Button variant="outlined" className="customButOutline">
            Triggered Alerts
          </Button>
        </div>
        <div>
          <RefreshIcon className="clickable" />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Criteria</StyledTableCell>
              <StyledTableCell>Value</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Active Days</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageContent.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.criteria}</StyledTableCell>
                <StyledTableCell align="right">{row.value}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.days}</StyledTableCell>
                <StyledTableCell>
                  <EditIcon
                    className="clickable"
                    onClick={() => editAlert(row)}
                  />
                  <DeleteIcon
                    className="clickable"
                    onClick={() => deleteAlert(row)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length > 5 && (
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              count={rows.length % 5}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default PeakTable;
