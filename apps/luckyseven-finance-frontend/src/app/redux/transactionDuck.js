import axios from 'axios'

//constantes
const initialData ={
    month: 0,
    year: 0,
    transactions: null
}

//types
const STORE_DATE = 'STORE_MONTH'
const STORE_TRANSACTION = 'STORE_TRANSACTION'

//reducer 
export default function transactionReducer(state=initialData,action){
    switch (action.type) {
        case STORE_DATE:
            return {...state,month: action.payload.month, year:action.payload.year}
        case STORE_TRANSACTION:
            return {...state,transactions:action.payload}
    }
}
//acciones
export const getTransaction = ()=> async(dispatch,getState)=>{
    const {month,year}= getState().transaction;
    try {
        const res = await axios.get(`http://localhost:1337/withdraws/${year}/${month}`)
        dispatch({
            type: STORE_TRANSACTION,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}
export const getDate = (month,year)=> async(dispatch,getState)=>{
    try {
        dispatch({
            type: STORE_DATE,
            payload:{
                month: month,
                year: year
            }
        })
    } catch (error) {
       console.log(error); 
    }
}