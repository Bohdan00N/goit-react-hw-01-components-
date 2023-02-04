import React from 'react';
import PropTypes from 'prop-types';
import css from './transaction-history.module.scss';

function TransactionHistory({ items = [] }) {
  let elements = items.map(element => {
    const { id, type, amount, currency } = element;

    function separation(data) {
      let fir = data.split('');
      let sec = fir.filter(element => element !== ' ');
      let thi = sec.join('');
      let fou = String(thi);
      let ind = fou.length - 1;
      let sum = Math.floor(ind / 3);
      for (let i = 1; i <= sum; i += 1) {
        ind = ind - 1 - i;
        sec.splice(ind, 0, ', ');
        let ms = sec.join('');
        data = ms;
      }
      return data;
    }
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{separation(currency)}</td>
      </tr>
    );
  });

  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
