import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './Switch.module.scss';

const animationClassNames = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const SwitchAnimation = ({ children, isPlay }) => (
  <SwitchTransition mode="out-in">
    <CSSTransition
      key={isPlay}
      addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
      classNames={animationClassNames}
    >
      <div>
        <div className={styles.container}>{children}</div>
      </div>
    </CSSTransition>
  </SwitchTransition>
);

SwitchAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  isPlay: PropTypes.bool.isRequired,
};

export default SwitchAnimation;
