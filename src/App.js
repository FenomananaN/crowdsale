
import { RootComponent } from "./component";
import { Admin, User } from "./pages";
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
        <Routes> 
          <Route path={'/'} element={<RootComponent/>}>
            <Route index element={<User/>} />
            <Route path={'admin'} element={<Admin/>} />
          </Route>
        </Routes>
        </div>
      </div>
    </main>
  );
}
///#141821