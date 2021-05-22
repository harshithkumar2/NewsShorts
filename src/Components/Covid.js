import React, { useEffect, useState } from "react";
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
import axios from "axios";
import "./spinner.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    flex: "1 1 100%",
  },
});

export default function Covid() {
  const [covid, setCovid] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const cov = () => {
      axios
        .get(
          "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
        )
        .then((res) => {
          setCovid(res.data);
        })
        .catch((err) => {
          console.log(err.res);
        });
    };
    cov();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Typography
          className={classes.title}
          className="typo"
          variant="h6"
          id="tableTitle"
          component="div"
        >
          COVID-19
        </Typography>

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tcell">COUNTRY</TableCell>
              <TableCell className="tcell" align="right">
                TOTAL CASES
              </TableCell>
              <TableCell className="tcell" align="right">
                ACTIVE
              </TableCell>
              <TableCell className="tcell" align="right">
                DEATHS
              </TableCell>
              <TableCell className="tcell" align="right">
                RECOVERED
              </TableCell>
              <TableCell className="tcell" align="right">
                LAST UPDATED
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow key="test">
              <TableCell className="tcell" component="th" scope="row">
                <h3>INDIA</h3>
              </TableCell>
              <TableCell className="tcell" align="right">
                <h3>{covid.totalCases}</h3>
              </TableCell>
              <TableCell className="tcell" align="right">
                <h3>{covid.activeCases}</h3>
                <Typography style={{ color: "red" }}>
                  (⬆{covid.activeCasesNew}){" "}
                </Typography>
              </TableCell>
              <TableCell className="tcell" align="right">
                <h3>{covid.deaths}</h3>
                <Typography style={{ color: "red" }}>
                  (⬆{covid.deathsNew}){" "}
                </Typography>
              </TableCell>
              <TableCell className="tcell" align="right">
                <h3>{covid.recovered}</h3>
                <Typography style={{ color: "red" }}>
                  (⬆{covid.recoveredNew}){" "}
                </Typography>
              </TableCell>
              <TableCell className="tcell" align="right">
                <h5>{covid.lastUpdatedAtApify}</h5>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
    </Container>
  );
}
