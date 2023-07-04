import PropTypes from 'prop-types';
import { ContainerStat, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

export const Statistic = ({ title, stats }) => {
  return (
    <ContainerStat>
      <h2>{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </li>
        ))}
      </ul>
    </ContainerStat>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
