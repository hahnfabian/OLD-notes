import React from 'react';
import './css/page.css';

import {
  threeDots,
  star,
  clock,
  comment,
  magnfyingGlass,
  building,
  settings,
  plus
} from "./icons"
import {lastEdited, updateEdited} from './lastEdited';
/* import {PageList, pageName} from './pageList'; */

import page from './page';

function App() {
  updateEdited();
  var edited = lastEdited();
  
  return (
    <div className="App">
        <div className="wrapper">
            <div className='header'>
              <div className='topnav'>
                <span><img src={threeDots} alt="Three dots"></img></span>
                <span><img src={star} alt="Star"></img></span>
                <span><img src={clock} alt="Clock"></img></span>
                <span><img src={comment} alt="Comment"></img></span>
                <span>Share</span>
                <span>Edited {edited}</span>
                <span style={{float: 'left'}}>pageName</span>
              </div>
            </div>
            <div className='menu' >
              <div className='menuWrapper'>
                <div className='menu-twoSpaces'>Notizen</div>
                <div className='menu-list'> 
                  <img src={magnfyingGlass} alt="Search" ></img>
                  <span>Search</span>
                </div>
                <div className='menu-list'>
                  <img src={clock} alt="Clock" ></img>
                  <span>Updates</span>
                </div>
                <div className='menu-list'>
                  <img src={building} alt="Building" ></img>
                  <span>All teamspaces</span>
                </div>
                <div className='menu-list'>
                  <img src={settings} alt="Settings" ></img>
                  <span>Settings & members</span>
                </div>
                <div className='menu-twoSpaces' style={{paddingTop: "25px"}}>Private</div>
                <div className='menu-list'> Page List Here
                </div> 
                <div className='menu-list-bottom'>
                  <img src={plus} alt="Plus"></img>
                  <span>New Page</span>
                </div>
              </div>
            </div>

            <div className='main'>
            <div>{page()}</div>
            </div>
      </div>
    </div>
  );
}

export default App;
