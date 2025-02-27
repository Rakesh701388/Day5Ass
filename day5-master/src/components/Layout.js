import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../pageTransitions.css';

const Layout = () => {
  const location = useLocation();
  // Create a ref to attach to the transitioning element.
  const nodeRef = useRef(null);

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
            nodeRef={nodeRef}  // Provide the nodeRef to CSSTransition
          >
            <div ref={nodeRef}>
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};

export default Layout;
