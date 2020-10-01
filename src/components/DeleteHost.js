import React, { useEffect, useState } from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ...theme.formStyles,
  textField: {
    marginBottom: "1rem",
  },
  card: {
    padding: "1rem",
    margin: "1rem 0rem",
  },
  alert: {
    margin: "1rem 0",
  },
}));

export default function DeleteHost() {
  const [hostId, setHostId] = useState("");
  const [deleteStatus, setDeleteStatus] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeleteStatus("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setDeleteStatus]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await Axios.delete("/generate-host", {
        hostId: hostId,
      });
      setDeleteStatus("success");
    } catch (_) {
      setDeleteStatus("fail");
    }
    setIsDeleting(false);
  };

  const classes = useStyles();
  return (
    <>
      <Card variant="outlined" className={classes.card}>
        {deleteStatus === "success" ? (
          <Alert className={classes.alert} severity="success">
            URL deleted successfully
          </Alert>
        ) : deleteStatus === "fail" ? (
          <Alert className={classes.alert} severity="error">
            Failed to delete URL
          </Alert>
        ) : null}
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h4" color="initial">
              Delete Host
            </Typography>
          </FormLabel>
          <FormGroup>
            <TextField
              className={classes.textField}
              id="host_id"
              label="host id"
              variant="outlined"
              color="primary"
              margin="dense"
              size="medium"
              value={hostId}
              onChange={(e) => {
                setHostId(e.target.value);
              }}
              placeholder="host id"
            />
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
              disabled={hostId.length < 5 || isDeleting}
              className={classes.button}
            >
              Delete
              {isDeleting && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </FormGroup>
        </FormControl>
      </Card>
    </>
  );
}
