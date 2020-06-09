import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ title, definitions }) => {
  const definitionElements = definitions.map((definition, i) => <dd key={i}>{definition}</dd>);

  return (
    <dl>
      <dt>{title}</dt>
      {definitionElements}
    </dl>
  );
};

TechItem.propTypes = {
  title: PropTypes.string.isRequired,
  definitions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default TechItem;

