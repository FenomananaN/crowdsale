import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, okxWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import { StateContextProvider } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { chain } from "./contract";

//import {Sepolia} from '@thirdweb-dev/chains'


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
console.log(process.env.REACT_APP_TEMPLATE_CLIENT_ID)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
        activeChain={chain}
        clientId={'019e19953c2a1884996f40491d1e8b35'}
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet({ recommended: true }),
          walletConnect(),
          trustWallet(),
          okxWallet()
        ]}
    >
      <ThemeProvider theme={theme}>
      <StateContextProvider>
      <Router>
        <Routes>
            <Route path='/*' element={<App />} />
        </Routes>
      </Router>
      </StateContextProvider>
       <CssBaseline />
      </ThemeProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
