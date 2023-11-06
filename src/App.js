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
import Listproducts from './views/products/listproducts';
import Updateproducts from './views/products/updateproducts';
import Createproducts from './views/products/createproducts';
import Login from './views/login';
import Signup from './views/signup';
import Profile from './views/profile';
import Updateprofile from './views/updateprofile';
import { Navigate } from 'react-router-dom';

function App() {
  const Privateroute = ({ children }) => {
    if (!localStorage.getItem("user")) {
        return <Navigate to="/"></Navigate>;
    }
   return children;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home'  element={<Privateroute><Home></Home></Privateroute>}>
            <Route path='/home' element={<Privateroute><Layout></Layout></Privateroute>}></Route>
            <Route path='/home/listcategories' element={<Privateroute><Listcategories></Listcategories></Privateroute>}></Route>
            <Route path='/home/updatecategories/:id' element={<Privateroute><Updatecategories></Updatecategories></Privateroute>}></Route>
            <Route path='/home/createcategories/' element={<Privateroute><Createcategories></Createcategories></Privateroute>}></Route>
            <Route path='/home/listsubcategories' element={<Privateroute><Listsubcategories></Listsubcategories></Privateroute>}></Route>
            <Route path='/home/updatesubcategories/:id' element={<Privateroute><Updatesubcategories></Updatesubcategories></Privateroute>}></Route>
            <Route path='/home/createsubcategories/' element={<Privateroute><Createsubcategories></Createsubcategories></Privateroute>}></Route>
            <Route path='/home/listproducts' element={<Privateroute><Listproducts></Listproducts></Privateroute>}></Route>
            <Route path='/home/updateproducts/:id' element={<Privateroute><Updateproducts></Updateproducts></Privateroute>}></Route>
            <Route path='/home/createproducts/' element={<Privateroute><Createproducts></Createproducts></Privateroute>}></Route>
          </Route>
          <Route path='/profile' element={<Privateroute><Profile></Profile></Privateroute>}></Route>
          <Route path='/updateprofile' element={<Privateroute><Updateprofile></Updateprofile></Privateroute>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
