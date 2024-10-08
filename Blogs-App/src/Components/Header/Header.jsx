import React from 'react';
import {Container, Logo, LogoutBtn} from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const authStatus = useSelector( (state) => state.auth.status );

  const navItems = [
    {
      name: 'Home',
      slugURL: "/",
      active: true
    }, 
    {
      name: "Login",
      slugURL: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slugURL: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slugURL: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slugURL: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex justify-between content-between'>
          {/* Logo Div */}
          <div className="mr-4">
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Links */}
          <ul className='flex'>
            {
              navItems.map( (item) => 
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slugURL)}
                      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : null
              )
            }

            {
              authStatus && (<li> <LogoutBtn /> </li>)
            }
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header