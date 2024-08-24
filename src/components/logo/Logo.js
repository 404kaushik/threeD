import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.3s ease",
  },
  strokeHover: {
    stroke: theme.palette.foreground.default,
    "&:hover": {
        stroke: theme.palette.primary.main,
    },
    transition: "all 0.3s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={classes.svgHover}
      >
        <g id="Layer_1" data-name="Layer 1">
          {/* "K" */}
          <rect x="20" y="30" width="15" height="140" className={classes.strokeHover} />
          <line x1="35" y1="100" x2="80" y2="50" stroke="currentColor" strokeWidth="15" className={classes.strokeHover} />
          <line x1="35" y1="100" x2="80" y2="150" stroke="currentColor" strokeWidth="15" className={classes.strokeHover} />

          {/* "N" */}
          <rect x="90" y="30" width="15" height="140" className={classes.strokeHover} />
          <line x1="90" y1="50" x2="130" y2="170" stroke="currentColor" strokeWidth="15" className={classes.strokeHover} />
          <rect x="120" y="30" width="15" height="140" className={classes.strokeHover} />

          {/* "T" */}
          <rect x="160" y="30" width="15" height="140" className={classes.strokeHover} />
          <rect x="150" y="50" width="70" height="15" className={classes.strokeHover} />
        </g>
      </svg>
    );
};
