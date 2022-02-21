import React from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TestCard from "./TestCard";



const useStyles = makeStyles((theme) =>(
    {
        root: {
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:'50px'
        },
      
    
      }
));
const Test = () => {
  const classes = useStyles();

  return (
    <>
      <div >
        <Typography variant="h4"  className={classes.root} component="h3">
          Welcome to GarryPedia  <strong>..!!</strong>
        </Typography>

       
      </div>
      <TestCard sx={{height:'100px'}}></TestCard>
   
    </>
  );
};

export default Test;
