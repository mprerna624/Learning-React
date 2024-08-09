// import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService'
import { login, logout } from './store/authSlice';
import {Header, Footer} from './Components';
import {Outlet} from 'react-router-dom';

function App() {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect( () => {
    dispatch(authService.getCurrentUser())
    .then( (data) => {
      if(data) {
        dispatch(login({userData : data}));
      } else {
        dispatch(logout());
      }
    } )
    .finally(() => setLoading(false))
  }, [] )

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
