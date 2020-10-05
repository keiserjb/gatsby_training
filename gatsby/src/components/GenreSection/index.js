import React from 'react';
import PropTypes from 'prop-types';

import Eyebrow from '../Eyebrow';
import CardCollection from '../CardCollection';
import Card from '../Card';

import styles from './styles.module.scss';

const GenreSection = ({ title, items }) => {
  return (
    <div className={styles.section}>
      <Eyebrow>{title}</Eyebrow>
      <CardCollection>
        {items.map(({ node }) => (
          <Card
            key={node.nid}
            path={node.path.alias}
            title={node.title}
            image={node.relationships.mainImage.localFile.childImageSharp.fluid}
            rating={node.rating}
            description={node.body.value}
            stars={node.stars}
          ></Card>
        ))}
      </CardCollection>
    </div>
  );
};

export default GenreSection;

GenreSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
