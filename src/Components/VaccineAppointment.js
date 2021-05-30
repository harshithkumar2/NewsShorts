import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./appoint.css";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./spinner.css";
import axios from "axios";
import Navbars from "./Navbars";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    textAlign: "center",
  },
});

function VaccineAppointment() {
  const classes = useStyles();
  const [pincode, setPincode] = useState("");
  const [date, setDate] = useState("");
  const [appoints, setAppoints] = useState([]);
  const [error, setError] = useState("");
  const SubmitHandle = () => {
    axios
      .get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
          `${pincode}` +
          "&date=" +
          `${date}`
      )
      .then((res) => {
        if (res.data.sessions) {
          setAppoints(res.data.sessions);
          setError("");
        }
      })
      .catch((err) => {
        if (err.response.data.error) {
          setError(err.response.data.error);
        }
        console.log(err.response);
      });
  };

  const PincodeHandle = (e) => {
    setPincode(e.target.value);
  };

  const DateHandle = (e) => {
    setDate(e.target.value);
  };
  console.log(appoints);
  return (
    <div>
      <Navbars />
      <Container>
        <br />
        <div className="header-bar">
          <form onSubmit={SubmitHandle}>
            <TextField
              className="Textfield"
              id="outlined-search"
              label="Pincode"
              type="search"
              onChange={PincodeHandle}
              variant="outlined"
              error={error}
              helperText={error ? error : ""}
            />{" "}
            <TextField
              className="Textfield"
              id="outlined-search"
              type="text"
              label="dd/mm/yyyy"
              variant="outlined"
              onChange={DateHandle}
            />{" "}
            <Button
              style={{ marginTop: "5px" }}
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
            >
              SEARCH
            </Button>
          </form>
        </div>
        <br />
        {error === "" ? (
          <div>
            <TableContainer component={Paper}>
              <Typography
                className="typo"
                variant="h6"
                id="tableTitle"
                component="div"
                style={{ textAlign: "center" }}
              >
                VACCINE INFO
              </Typography>

              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tcell">Centre</TableCell>
                    <TableCell className="tcell" align="right">
                      Address
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      State
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      City
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      Date
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      Min Age
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      Vaccine
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      Fee(in Rs)
                    </TableCell>
                    <TableCell className="tcell" align="right">
                      Slots
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appoints.map((row) => (
                    <TableRow key={row.region}>
                      <TableCell className="tcell" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.address}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.state_name}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.block_name}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.date}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.min_age_limit}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.vaccine}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.fee}
                      </TableCell>
                      <TableCell className="tcell" align="right">
                        {row.slots.map((dats) => {
                          return <p>{dats}</p>;
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <h1>{error}</h1>
        )}
      </Container>
    </div>
  );
}

export default VaccineAppointment;
