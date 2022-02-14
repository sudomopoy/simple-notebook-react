import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Notes from './components/notes';
import SignInForm from './components/signInForm';
import PrivateRoute from './PrivateRoute';
import 'font-awesome/css/font-awesome.min.css';
import AddNote from './components/note';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container bg-background min-h-screen h-full relative">
        <Fragment>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Notes />} />
              <Route exact path='note' element={<AddNote />} />
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
