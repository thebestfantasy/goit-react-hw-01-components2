import css from './transaction.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr className={css.title}>
          <th className={css.column}>Type</th>
          <th className={css.column}>Amount</th>
          <th className={css.column}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, idx) => (
          <tr
            key={item.id}
            className={idx % 2 === 0 ? css.evenRow : css.oddRow}
          >
            <td className={css.column}>{item.type}</td>
            <td className={css.column}>{item.amount}</td>
            <td className={css.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
