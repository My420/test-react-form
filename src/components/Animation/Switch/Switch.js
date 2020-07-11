import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './animation.css';

const SwitchAnimation = ({ children, isPlay }) => (
  <SwitchTransition mode="out-in">
    <CSSTransition
      key={isPlay}
      addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
      classNames="switchAnimation"
    >
      <div>
        <div className="animationContainer">{children}</div>
      </div>
    </CSSTransition>
  </SwitchTransition>
);

SwitchAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  isPlay: PropTypes.bool.isRequired,
};

export default SwitchAnimation;
