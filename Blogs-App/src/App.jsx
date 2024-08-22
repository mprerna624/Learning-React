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
    authService.getCurrentUser()
    .then( (data) => {
      if(data) {
        dispatch(login(data));
      } else {
        dispatch(logout());
      }
    } )
    .finally(() => setLoading(false))
  }, [] )

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between justify-center bg-gray-400'>
      <div className="w-full h-full flex flex-col">
        <Header className='flex-grow' />

        <main className='flex-grow'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
