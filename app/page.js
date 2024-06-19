'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to Our E-commerce Site</h1>
      <nav>
        <ul>
          <li>
            <Link href="/products">Products</Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>
                <Link href="/auth/register">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
