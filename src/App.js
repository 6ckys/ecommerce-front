import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/layout';
import Listcategories from './views/categories/listcategories';
import Updatecategories from './views/categories/updatecategories';
import Createcategories from './views/categories/createcategories';
import Listsubcategories from './views/subcategories/listsubcategories';
import Updatesubcategories from './views/subcategories/updatesubcategories';
import Createsubcategories from './views/subcategories/createsubcategories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home></Home>}>
            <Route path='/' element={<Layout></Layout>}></Route>
            <Route path='/listcategories' element={<Listcategories></Listcategories>}></Route>
            <Route path='/updatecategories/:id' element={<Updatecategories></Updatecategories>}></Route>
            <Route path='/createcategories/' element={<Createcategories></Createcategories>}></Route>
            <Route path='/listsubcategories' element={<Listsubcategories></Listsubcategories>}></Route>
            <Route path='/updatesubcategories/:id' element={<Updatesubcategories></Updatesubcategories>}></Route>
            <Route path='/createsubcategories/' element={<Createsubcategories></Createsubcategories>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
