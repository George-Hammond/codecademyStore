// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
// Import the slice reducers here.
import { inventoryReducer} from '../features/inventory/inventorySlice.js';
import { cartReducer} from '../features/cart/cartSlice.js';
import { currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js.js';
// Create and export the store here.
const rootReducers =  combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer
  })
export const store = createStore(rootReducers)