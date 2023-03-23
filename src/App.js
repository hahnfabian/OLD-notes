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
                <div style={{marginRight:"auto"}}>
                  <span>pageName</span>
                </div>
                <div className='homepage' >
                  <a style={{color: 'inherit', textDecoration:"none",}} href='https://johannesfabianhahn.de/en/index.html'>HOME</a>
                </div>
                <div className='testWrapper'>
                  <span className='floatLeft'>Edited {edited}</span>
                  <span className='floatLeft'>Share</span>
                  <span><img src={comment} alt="Comment"></img></span>
                  <span><img src={clock} alt="Clock"></img></span>
                  <span><img src={star} alt="Star"></img></span>
                  <span className='floatLeft'><img src={threeDots} alt="Three dots"></img></span>
                </div>
              </div>
            </div>
            <div className='menu' >
              <div className='menuWrapper'>
                <div className='menu-twoSpaces'>📝 My Notes</div>
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
                  <span>Settings</span>
                </div>
                <div className='menu-twoSpaces' style={{paddingTop: "25px"}}>Private</div>
                <div className='menu-list'> Page List Here
                </div> 
                <div className='menu-list-bottom'>
                    <div style={{marginLeft:"5px"}}>
                      <img src={plus} alt="Plus"></img>
                      <span>New Page</span>
                    </div>
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
