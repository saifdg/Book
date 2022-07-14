import axios from'axios';
import { CREATE_BOOK_REQUEST } from '../actionTypes';

const createBookAction=bookData=>{
    return(dispatch)=>{
dispatch({
    type:'CREATE_BOOK_REQUEST',
});



const config={
    'Content-Type':'application/json',
}
    };



const res=await axios.post('/api/books')
};
