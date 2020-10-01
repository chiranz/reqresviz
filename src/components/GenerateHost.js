import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { CircularProgress, makeStyles } from "@material-ui/core";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  ...theme.formStyles,
  textField: {
    marginBottom: "1rem",
  },
  card: {
    padding: "1rem",
    margin: "1rem 0rem",
  },
}));

export default function GenerateHost() {
  const [generatedUrl, setGeneratedUrl] = useState(null);
  const [stateUrl, setStateUrl] = useState("");
  const [isGeneratingUrl, setIsGeneratingUrl] = useState(false);
  const [hostId, setHostId] = useState(null);
  const handleGenerate = async () => {
    setIsGeneratingUrl(true);
    const response = await Axios.post("/generate-host", {
      baseUrl: stateUrl,
    });
    console.log(response);
    const { baseUrl } = response.data;
    setGeneratedUrl(baseUrl);
    const newUid = baseUrl.split("/").pop();
    setHostId(newUid);
    setIsGeneratingUrl(false);
  };
  const classes = useStyles();
  console.log(hostId);
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
              }}
              placeholder="example.google.com"
            />
            <Button
              onClick={handleGenerate}
              variant="contained"
              color="secondary"
              disabled={!validator.isURL(stateUrl) || isGeneratingUrl}
              className={classes.button}
            >
              Generate
              {isGeneratingUrl && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </FormGroup>
        </FormControl>
        <p>
          {generatedUrl ? <Link to={`/${hostId}`}>{generatedUrl}</Link> : null}
        </p>
      </Card>
    </>
  );
}
