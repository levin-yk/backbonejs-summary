import React from 'react'
import { ROUTES } from '../Constants'

import icon from '../imgs/backbone_icon.png'
import text from '../imgs/backbone_text.png'

function NavBar() {
  const referrer = document.referrer;
  const current = window.location.href;

  let tile1 = 'tile1 ';
  if (current.endsWith('/')) {
    tile1 += 'slideIn';
  } else if (referrer.endsWith('/')) {
    tile1 += 'slideout';
  } else if (referrer == current) {
    tile1 += 'hidden';
  }

  return (
    <div>
      <div className='nav-wrap'>
        <nav>
          <ul>
            <li className='nav-item'><a href={ROUTES.HOME}>Top</a></li>
            <li className='nav-item'><a href={ROUTES.TRANSRATE}>Translate</a></li>
          </ul>
        </nav>
      </div>
      <div className={tile1}>
        <div className='icon'>
          <img src={icon} className='img-icon' />
          <img src={text} className='img-text' />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
