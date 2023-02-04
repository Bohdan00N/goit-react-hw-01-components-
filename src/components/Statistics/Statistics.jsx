import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.scss';

function Statistics({ title = '', stats = [] }) {
  let titleName = title && <h2 className={css.title}>{title}</h2>;

  let elements = stats.map(element => {
    const { id, label, percentage } = element;

    return (
      <li key={id} className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  });

  return (
    <section className={css.statistics}>
      {titleName}
      <ul className={css['stat-list']}>{elements}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
