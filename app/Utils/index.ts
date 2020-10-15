import  'intl';
import 'intl/locale-data/jsonp/id';

export const toAmount = (amount: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    amount
  );
