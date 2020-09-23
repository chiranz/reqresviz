import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core";
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

export default function GenerateHost() {
  // const [generatedUrl, setGeneratedUrl] = useState(null);
  const [stateUrl, setStateUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  const [uid, setUid] = useState("");
  const handleGenerate = async () => {
    // const response = await Axios.post(baseRequestAPI, { stateUrl });
    // const { baseUrl } = response.data;
    // setGeneratedUrl(baseUrl);
    // const newUid = baseUrl.split("/").pop();
    // setUid(newUid);
    setUid("whatever");
    setGenerated(true);
  };
  const classes = useStyles();
  return (
    <>
      <Card variant="outlined" className={classes.card}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h4" color="initial">
              Generate Host
            </Typography>
          </FormLabel>
          <FormGroup>
            <TextField
              className={classes.textField}
              id="stateUrl"
              label="State URL"
              variant="outlined"
              color="primary"
              margin="dense"
              size="medium"
              value={stateUrl}
              onChange={(e) => {
                setStateUrl(e.target.value);
                setGenerated(false);
              }}
              placeholder="example.google.com"
            />
            <Button
              onClick={handleGenerate}
              variant="contained"
              color="secondary"
              disabled={!validator.isURL(stateUrl)}
            >
              Generate
            </Button>
          </FormGroup>
        </FormControl>
        <p>{generated ? <Link to={`/${uid}`}>{stateUrl}</Link> : null}</p>
      </Card>
    </>
  );
}
