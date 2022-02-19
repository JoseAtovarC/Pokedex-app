
import Home from './pages/home';
import Info from './pages/info';
import Details from './pages/details';
import Contact from './pages/contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './pages/notFound';
function App() {





 return(

  <BrowserRouter>

   <Routes>

   <Route path="contact" element={<Contact/>} />
    <Route path="details/:id/*" element={<Details />} >
    <Route path='info' element={<Info></Info>}></Route>
    </Route>
    <Route path='detail' element={<Details></Details>}></Route>
    
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='*' element={<NotFound></NotFound>}>
    </Route>
    </Routes>

    </BrowserRouter>
 )
 }
export default App;
