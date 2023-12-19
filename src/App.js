
import { ResponsiveAppBar, RootComponent } from "./component";
import { Admin, Home } from "./pages";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <main className="main">
      <ResponsiveAppBar/>
      <div className="container">
        <div className="header">
        <Routes> 
          <Route path={'/'} element={<RootComponent/>}>
            <Route index element={<Home/>} />
            <Route path={'admin'} element={<Admin/>} />
          </Route>
        </Routes>
        </div>
      </div>
    </main>
  );
}