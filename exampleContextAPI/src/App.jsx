import Login from './Components/Login';
import Profile from './Components/Profile';
import UserInfoProvider from './context/UserInfoProvider';

function App() {

  return (
    <UserInfoProvider>
      <h1 className='text-center text-4xl p-4'>Context API Example</h1>
      <Login />
     <Profile />
    </UserInfoProvider>
  )
}

export default App
