import {format, parseISO} from 'date-fns';
import {COMMON, OrderClass} from '../constants/common';

export const priceWithCurrency = (price: number, currency = '€'): string => {
  return [currency, Number(price || 0).toFixed(2)].join('');
};

export const orderType = (orderClass: OrderClass) => {
  return COMMON.ORDER_TYPES[orderClass] || 'unknown';
};

export const dateFormat = (date: string) => format(parseISO(date), 'dd/MM/yyyy');

export const yesNo = (bool: boolean) => bool ? 'Yes' : 'no';

export const fixFloat = (num: number) => Number(num.toFixed(3));
