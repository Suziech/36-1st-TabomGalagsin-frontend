import React, { useState } from 'react';
import './auth.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Nav from '../../components/Nav/Nav';

function Auth() {
  const [currentId, setCurrentId] = useState(false);

  return (
    <div>
      <Nav />
      <div className="loginField">
        <div className="loginBox">
          <ul className="loginNav">
            <li
              className="navItem"
              onClick={() => {
                setCurrentId(false);
              }}
            >
              <div className="loginNavFont">
                <font className={currentId ? 'loginText' : 'clickedLoginText'}>
                  로그인
                </font>
              </div>
            </li>
            <li
              className="navItem"
              onClick={() => {
                setCurrentId(true);
              }}
            >
              <div className="loginNavFont">
                <font className={currentId ? 'clickedLoginText' : 'loginText'}>
                  회원가입
                </font>
              </div>
            </li>
          </ul>
          {currentId ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </div>
  );
}

export default Auth;
