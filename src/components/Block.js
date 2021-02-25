import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({ block }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.heading}>
        {String(block.id).padStart(3, '0')}
      </Typography>
      <Typography variant="h5" className={classes.content}>
        {block.attributes.data}
      </Typography>
    </Box>
  );
};


const useStyles = makeStyles(() => ({
  root: {
    background: colors.grey,    
    margin: '2px',
    borderRadius: '2px',
  }, heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '16px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: colors.blue,
  },
  content: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
    color: colors.text,
  }
}));

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default Block;
