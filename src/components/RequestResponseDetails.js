import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Axios from "axios";
import { baseRequestAPI } from "../constant";
import CardDisplay from "../components/CardDisplay";
Axios.defaults.baseURL = baseRequestAPI;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  cardInner: {
    padding: "0 1rem",
    width: "100%",
  },
  card: {
    margin: "1rem",
    width: "300px",
    maxHeight: "350px",
    overflowY: "scroll",
  },
  hr: {
    width: "100%",
  },
}));

export default function RequestResponseDetails() {
  const [headers, setHeaders] = useState("{header}");
  const [body, setBody] = useState("{body}");
  useEffect(() => {
    const fetchWeb = async () => {
      try {
        const response = await Axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response);
        setHeaders(response.headers);
        setBody(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeb();
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardDisplay title="Headers" content={headers} />
      <CardDisplay title="Body" content={body} />
    </div>
  );
}
