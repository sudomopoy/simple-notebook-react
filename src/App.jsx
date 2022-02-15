import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Notes from './components/notes';
import SignInForm from './components/signInForm';
import PrivateRoute from './PrivateRoute';
import 'font-awesome/css/font-awesome.min.css';
import SingleNote from './components/note';
import { getToken } from './helpers/tokenHelpers';
import { useDispatch } from 'react-redux';
import { userActions } from './actions/actions';
import loginAction from './actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(loginAction(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <div className="app-container bg-background min-h-screen h-full relative">
        <Fragment>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Notes />} />
              <Route exact path='note' element={<SingleNote />} />
              <Route exact path='note/:id' element={<SingleNote />} />
            </Route>

            <Route exact path='signIn' element={<SignInForm />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404</p>
                </main>
              }
            />
          </Routes>
        </Fragment>
      </div>
    </BrowserRouter >
  );
}

export default App;
