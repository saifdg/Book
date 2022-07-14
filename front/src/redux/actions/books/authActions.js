import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { DELETE_USER, ERRORS, SET_USER, SET_USERS } from './actionTypes';
import jwt_decode from 'jwt-decode'
import { setAuth } from '../../../util/setAuth';


export const Registration = (form, navigate) => dispatch => {
    axios.post('/users/register', form)
        .then(res => {
            
            navigate('/login')
            dispatch({
                type: ERRORS,
                payload: {} // repo,ce eli jaya mel api bch tethad fi payload
            })
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        })
}
export const LoginAction = (form, navigate) => dispatch => {
    axios.post('/users/signin', form)
        .then(res => {
            const {token} = res.data
            localStorage.setItem('jwt', token)
            const decode = jwt_decode(token)
            dispatch(setUser(decode))
            setAuth(token);
          
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                payload: err.response.data
            })
        })
}
export const Logout = ()=>dispatch=>{
    localStorage.removeItem('jwt')
    dispatch({
        type: SET_USER,
        payload: {}
    })
}

export const setUser = (decode)=>({
    type: SET_USER,
    payload: decode
})

