
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
   /* primary: {
      main: '#8bbc1f',
    },
    secondary: {
      main: '#082D0E',
    },*/
    pale: {
     main: '#082D0E',
     contrastText: '#fff',
    },
    yellow: {
      main:'#FFC000',  
      contrastText: '#fff',
      //dark:'#CC9600',
      //light:'#FFD800',
    },
    blackvoly: {
      main: '#000',
      contrastText: '#fff'
    }
  },
    typography: {
      "fontFamily": `"Space Mono","monospace","Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     },
    /* shape: {
        borderRadius: 45,
     },*/
     components: {
        MuiButton: {
            variants: [
                {
                    props: {round: 'rounded'},
                    style: {
                        borderRadius: 28,
                    }
                }
            ]
         }
     }

});