import { createStore } from '@reduxjs/toolkit';
import reducer from '../utils/reducers';

export const store = createStore(reducer);