import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: "0 1rem",
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
  cardContent: {
    overflowY: "scroll",
    padding: "0 1rem",
    width: "100%",
  },
}));

export default function CardDisplay({ title, content }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader className={classes.cardHeader} title={title} />
      <hr className={classes.hr} />
      <CardContent className={classes.cardContent}>
        {JSON.stringify(content)}
      </CardContent>
    </Card>
  );
}
