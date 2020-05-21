import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.helloThereStyle} color="primary">
        Hello
      </Typography>
      <Button color="secondary" variant="outlined">
        LOL
      </Button>
    </div>
  );
}
