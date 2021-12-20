import {
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

import axios from 'axios'

//const { data } = await axios.get(`/api/products/${id}`)

export const listProducts = () => async (dispatch) => {
  try {
    const action1 = { type: PRODUCT_LIST_REQUEST }

    dispatch(action1)

    const { data } = await axios.get('/api/products')

    const action2 = { type: PRODUCT_LIST_SUCCESS, payload: data }
    dispatch(action2)
  } catch (error) {
    const action3 = {
      type: PRODUCT_LIST_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }
    dispatch(action3)
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
