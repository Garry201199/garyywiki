
import { makeStyles } from "@mui/styles";
import back from "./Image/back.jpg";
import Test from './Comp/Test';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Quicksand',
      textTransform: 'none',
    },
  },
});
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   color:'white'
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
         <div className={classes.root}>
      <Test/>
    </div>
      </ThemeProvider>
   
    
  );
}

export default App;
