import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";

import { Card, makeStyles } from "@material-ui/core";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: "1rem",
  },
  card: {
    padding: "1rem",
    margin: "1rem 0rem",
  },
}));

export default function ListRequests() {
  const [hostUrl, setHostUrl] = useState("");
  // const [generatedUrl, setGeneratedUrl] = useState(null);
  const [found, setFound] = useState(false);
  const [uid, setUid] = useState("");

  const handleFindAll = async () => {
    // const response = await Axios.post(baseRequestAPI, { hostUrl });
    // const { baseUrl } = response.data;
    // setHostUrl(baseUrl);
    // const newUid = baseUrl.split("/").pop();
    // setUid(newUid);
    setUid("akdjfkds");
    setFound(true);
  };

  const classes = useStyles();
  return (
    <>
      <Card variant="outlined" className={classes.card}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h4" color="initial">
              List Request
            </Typography>
          </FormLabel>
          <FormGroup>
            <TextField
              className={classes.textField}
              id="hostUrl"
              label="Host URL"
              variant="outlined"
              color="primary"
              margin="dense"
              size="medium"
              value={hostUrl}
              onChange={(e) => {
                setHostUrl(e.target.value);
                setFound(false);
              }}
            />
            <Button
              onClick={handleFindAll}
              variant="contained"
              color="secondary"
              disabled={!validator.isURL(hostUrl)}
            >
              Find All
            </Button>
          </FormGroup>
        </FormControl>
        <p>{found ? <Link to={`/${uid}`}>{hostUrl}</Link> : null}</p>
      </Card>
    </>
  );
}
