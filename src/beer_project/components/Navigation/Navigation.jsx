import React, { useState, useCallback } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import classNames from 'classnames';
import Navbar from '../Navbar/Navbar';

import SideMenu from '../SideMenu/SideMenu';

import './Navigation.scss';

function PagesRouter() {
  const [open, setOpen] = useState(false);

  const onMenuOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const onOutsideClick = useCallback(() => {
    setOpen(false);
  }, []);

  const ref = React.useRef(null);
  useOnClickOutside(ref, onOutsideClick);

  return (
    <div className="navigation">
      <div ref={ref}>
        <SideMenu
          className={classNames('navigation__side-menu', {
            'navigation__side-menu_open': open,
          })}
        />
      </div>

      <Navbar className="navigation__navbar" onMenuButtonClick={onMenuOpen} />
    </div>
  );
}

export default PagesRouter;
