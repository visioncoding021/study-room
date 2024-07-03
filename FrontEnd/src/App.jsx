import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Courses from './components/courses/Courses';
import Registration from './components/auth/Registration';
import ForgotPassword from './components/auth/ForgotPassword';
import ContactUs from './components/ContactUs';
import About from './components/About';
import PaymentSuccess from './components/payment/PaymentSuccess';
import PaymentUnsuccess from './components/payment/PaymentUnsuccessFull';
import Subscribe from './components/payment/Subscribe';
import CoursePage from './components/courses/CoursePage';
import Profile from './components/Profile';
import RequestForm from './components/RequestForm';
import Dashboard from "./components/Admin/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse";
import AdminCourses from "./components/Admin/AdminCourses";
import Users from "./components/Admin/Users";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/courses' element={<Courses></Courses>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/registration' element={<Registration></Registration>}/>
      <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}/>
      <Route path='/contact-us' element={<ContactUs></ContactUs>}/>
      <Route path='/payment-success/:id' element={<PaymentSuccess></PaymentSuccess>}/>
      <Route path='/payment-unsuccess/:id' element={<PaymentUnsuccess></PaymentUnsuccess>}/>
      <Route path='/subscribe/:id' element={<Subscribe></Subscribe>}/>
      <Route path='/courses/:id' element={<CoursePage></CoursePage>}/>
      <Route path='/profile' element={<Profile></Profile>}/>
      <Route path='/request-course' element={<RequestForm/>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/createcourse" element={<CreateCourse/>}/>
      <Route path="/admin/courses" element={<AdminCourses/>}/>
      <Route path="/admin/users" element={<Users/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
