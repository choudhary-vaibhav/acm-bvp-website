import React from 'react';
import Fade from 'react-reveal/Fade';

import Carousel from '../Carousel/Carousel.component';

import { ReactComponent as Divider } from '../../assets/illustrations/section-divider.svg';

const Event = ({ workshop }) => {
  const { title, details, code } = workshop;

  return (
    <React.Fragment>
      <div className='workshop-container'>
        <Fade bottom delay={100}>
          <Carousel title={code} />
        </Fade>

        <div className='info'>
          <Fade bottom delay={300}>
            <h2>{title}</h2>
          </Fade>
          <Fade bottom delay={200}>
            <p>{details}</p>
          </Fade>
        </div>
      </div>

      <div className='divider-container'>
        <Divider className='divider' />
      </div>
    </React.Fragment>
  );
};

export default Event;
