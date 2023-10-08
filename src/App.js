import { add } from './add.js';

export const total = (shipping, subTotal) => { 
  return '£' + add(shipping, subTotal);
}