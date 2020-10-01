import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";
import CardDisplay from "../components/CardDisplay";

const useStyles = makeStyles((theme) => ({
  cards: {
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
  button: {
    marginRight: "1rem",
  },
  hr: {
    width: "100%",
  },
}));

export default function RequestResponseDetails({
  response,
  header,
  qeuryParams,
  body,
}) {
  const [showRequest, setShowRequest] = useState(true);
  const classes = useStyles();

  return (
    <div>
      <Button
        variant={showRequest ? "contained" : "outlined"}
        color="primary"
        onClick={() => setShowRequest(true)}
        className={classes.button}
      >
        Request
      </Button>
      <Button
        variant={showRequest ? "outlined" : "contained"}
        color="primary"
        onClick={() => {
          setShowRequest(false);
        }}
        className={classes.button}
      >
        Response
      </Button>

      <div className={classes.cards}>
        {showRequest ? (
          <>
            <CardDisplay title="Header" content={header} />
            <CardDisplay title="Body" content={body} />
            <CardDisplay title="Query Params" content={qeuryParams} />
          </>
        ) : (
          <>
            <CardDisplay title="Body" content={response.body} />
          </>
        )}
      </div>
    </div>
  );
}
