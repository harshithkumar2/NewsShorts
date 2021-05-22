import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./spinner.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    textAlign: "center",
  },
});

export default function CovidStates() {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const states = () => {
      axios
        .get(
          "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
        )
        .then((res) => {
          setLoading(false);
          setStates(res.data.regionData);
        })
        .catch((err) => {
          console.log(err.res);
        });
    };
    states();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="circle circle-red"></div>
        <div className="circle circle-blue"></div>
        <div className="circle circle-green"></div>
      </div>
    );
  } else {
    return (
      <Container>
        <TableContainer component={Paper}>
          <Typography
            className="typo"
            variant="h6"
            id="tableTitle"
            component="div"
            style={{ textAlign: "center" }}
          >
            COVID-19
          </Typography>

          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tcell">Region</TableCell>
                <TableCell className="tcell" align="right">
                  Active Cases
                </TableCell>
                <TableCell className="tcell" align="right">
                  Recovered
                </TableCell>
                <TableCell className="tcell" align="right">
                  Deceased
                </TableCell>
                <TableCell className="tcell" align="right">
                  Total Infected
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {states.map((row) => (
                <TableRow key={row.region}>
                  <TableCell className="tcell" component="th" scope="row">
                    {row.region}
                  </TableCell>
                  <TableCell className="tcell" align="right">
                    <h4>{row.activeCases}</h4>
                    {row.newInfected < 0 ? (
                      <Typography style={{ color: "red" }}>
                        (⬇{Math.abs(row.newInfected)}){" "}
                      </Typography>
                    ) : (
                      <Typography style={{ color: "red" }}>
                        (⬆{row.newInfected}){" "}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell className="tcell" align="right">
                    <h4>{row.recovered}</h4>
                    <Typography style={{ color: "red" }}>
                      (⬆{row.newRecovered}){" "}
                    </Typography>
                  </TableCell>
                  <TableCell className="tcell" align="right">
                    <h4>{row.deceased}</h4>
                    <Typography style={{ color: "red" }}>
                      (⬆{row.newDeceased}){" "}
                    </Typography>
                  </TableCell>
                  <TableCell className="tcell" align="right">
                    <h4> {row.totalInfected}</h4>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}
