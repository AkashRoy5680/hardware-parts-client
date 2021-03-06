import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';

import Footer from './Shared/Footer/Footer';
import Purchase from './Purchase/Purchase';
import NotFound from './NotFound/NotFound';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import AddAReview from './Dashboard/AddAReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyOrder from './Dashboard/MyOrder';
import Dashboard from './Dashboard/Dashboard';
import MyProfile from './Dashboard/MyProfile';
import Users from './Dashboard/Users';
import Payment from './Dashboard/Payment';
import AddProduct from './Dashboard/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfoilo/MyPortfolio';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RequireAuth from './Shared/RequireAuth';
import AllProducts from './Pages/Home/AllProducts';


function App() {

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div >
    <Navbar></Navbar>
  
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/addreview" element={<AddAReview></AddAReview>}></Route>
    <Route path="/myprofile" element={<MyProfile></MyProfile>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/blogs" element={<Blogs></Blogs>}></Route>
    <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
    <Route 
          path="/purchase/:id" 
          element={
          <RequireAuth>
           <Purchase/>
          </RequireAuth>
          }
          />
    <Route
          path="all-products"
          element={
            <RequireAuth>
              <AllProducts />
            </RequireAuth>
          }
        />
    <Route path="/dashboard" element={<Dashboard></Dashboard>}>
    <Route index element={<MyOrder></MyOrder>}></Route>
    <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
    <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
    <Route path="addreview" element={<AddAReview></AddAReview>}></Route>
    <Route path="payment/:orderid" element={<Payment></Payment>}></Route>
    <Route path="users" element={<Users></Users>}></Route>
    </Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>

    <Footer></Footer>
    <ToastContainer />

    </div>
  );
}

export default App;
