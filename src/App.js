import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';
import Listcategories from './views/categories/listcategories';
import Updatecategories from './views/categories/updatecategories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home></Home>}>
            <Route path='/' element={<Layout></Layout>}></Route>
            <Route path='/listcategories' element={<Listcategories></Listcategories>}></Route>
            <Route path='/updatecategories' element={<Updatecategories></Updatecategories>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
