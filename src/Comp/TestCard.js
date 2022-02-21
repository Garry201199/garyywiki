import React from "react";
import { Typography, CardContent, Card, TextField, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import back from "../Image/editfinal.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import Search from "./Search";


const useStyles = makeStyles({
    root:{
        justifyContent:'center',
        display:'flex',
        color:'white'
    },
   card:{
    maxWidth: 645 , 
    backgroundImage: `url(${back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   },
}
    
);
const TestCard = () => {
    const classes = useStyles();
  return (
    <div>
    <div  className={classes.root}>
         <Card  className={classes.card}>
      <CardContent>
      <Search></Search>

        <Typography color='black' variant="h5" gutterBottom>
          One stop solution for Every wikipedia search ....
          <span style={{fontSize:'50px'}} >&#128526;</span>
        </Typography>
      </CardContent>
      </Card>
      
    </div></div>
  );
};

export default TestCard;
