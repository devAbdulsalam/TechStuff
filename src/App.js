import React from'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {useAuthContext} from './context/useAuthContext'
// //pages
import Home from './pages/Home'
import Myblogs from './pages/Myblogs'
import SingleBlog from './pages/SingleBlog'
import CreateBlog from './pages/CreateBlog'
import EditBlog from './pages/EditBlog'
// Login and Signin
import Login from './pages/Login'
import Signup from './pages/Signup'
// component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Loading/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home /> }
            >
            </Route>
            <Route
              path="/:id"
              element={<SingleBlog />}
            >
            </Route>            
            <Route
              path="/my-post"
              element={user ?<Myblogs /> : <Navigate to='/login' />}
            >
            </Route>
            <Route
              path="/create-post"
              element={user ? <CreateBlog />: <Navigate to='/login' />}
              >
            </Route>
            <Route
              path="/edit-blog/:id"
              element={user ? <EditBlog /> : <Navigate to='/login' />}
            >
            </Route>
            <Route
              path="/signin"
              element={!user ? <Signup /> : <Navigate to='/' />}
            >
            </Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to='/' />}
            >
            </Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
