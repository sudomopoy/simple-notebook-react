import React from 'react'
import { connect } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    const {
        auth
    } = props;
    return auth ? <Outlet /> : <Navigate to="/signIn" />;

}
function mapStateToProps(state) {
    const { user } = state
    return { auth: user.auth }
}
export default connect(mapStateToProps)(PrivateRoute)