import React from 'react';
import User from '../user/user';
import './chat.scss';

export default function Chat() {
  let imgs = [ 0, 0, 0 ].map(() => {
    let uid = Math.random().toString().split('.')[1];
    return `https://i.pravatar.cc/100?u=${uid}`;
  });

  return (
    <section className="chatroom">
      <User more={true} search={true} hideTime={true} hideUnread={true}/>
      <div className="separator"></div>
      <div className="messages-container">
        <div className="messages">
          <div className="message-in">
            <div className="avatar">
              <img src={ imgs[0] } alt="" />
            </div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis voluptatem vitae ratione nam temporibus, voluptate debitis inventore cupiditate ea quae vel nisi assumenda officia exercitationem ullam nemo excepturi deleniti!</div>
          </div>
          <div className="message-in">
            <div className="avatar">
              <img src={ imgs[0] } alt="" />
            </div>
            <div className="text">Lorem ipsum</div>
          </div>
          <div className="message-out">
            <div className="avatar">
              <img src={ imgs[1] } alt="" />
            </div>
            <div className="text">Holanda</div>
          </div>
        </div>
        <div className="text-input">
          <ul className="icon-list left">
            <li className="icon">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Iconly/Curved/Category</title>
                  <g id="Iconly/Curved/Category" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="Category" transform="translate(3.000000, 3.000000)" stroke="#000000" strokeWidth="1.5">
                          <path d="M18.00036,3.6738 C18.00036,5.7024 16.35516,7.3476 14.32656,7.3476 C12.29796,7.3476 10.65366,5.7024 10.65366,3.6738 C10.65366,1.6452 12.29796,-6.39488462e-15 14.32656,-6.39488462e-15 C16.35516,-6.39488462e-15 18.00036,1.6452 18.00036,3.6738 Z" id="Stroke-1"></path>
                          <path d="M7.3467,3.6738 C7.3467,5.7024 5.7024,7.3476 3.6729,7.3476 C1.6452,7.3476 4.79616347e-15,5.7024 4.79616347e-15,3.6738 C4.79616347e-15,1.6452 1.6452,-6.39488462e-15 3.6729,-6.39488462e-15 C5.7024,-6.39488462e-15 7.3467,1.6452 7.3467,3.6738 Z" id="Stroke-3"></path>
                          <path d="M18.00036,14.26194 C18.00036,16.29054 16.35516,17.93484 14.32656,17.93484 C12.29796,17.93484 10.65366,16.29054 10.65366,14.26194 C10.65366,12.23334 12.29796,10.58814 14.32656,10.58814 C16.35516,10.58814 18.00036,12.23334 18.00036,14.26194 Z" id="Stroke-5"></path>
                          <path d="M7.3467,14.26194 C7.3467,16.29054 5.7024,17.93484 3.6729,17.93484 C1.6452,17.93484 4.79616347e-15,16.29054 4.79616347e-15,14.26194 C4.79616347e-15,12.23334 1.6452,10.58814 3.6729,10.58814 C5.7024,10.58814 7.3467,12.23334 7.3467,14.26194 Z" id="Stroke-7"></path>
                      </g>
                  </g>
              </svg>
            </li>
          </ul>
          <input type="text" placeholder="Escribir mensaje..."/>
          <ul className="icon-list right">
            <li className="icon">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Iconly/Curved/Camera</title>
                <g id="Iconly/Curved/Camera" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <g id="Camera" transform="translate(2.500000, 3.042105)" stroke="#000000" strokeWidth="1.5">
                    <path d="M12.9381053,9.456 C12.9381053,7.71915789 11.5296842,6.31073684 9.79284211,6.31073684 C8.056,6.31073684 6.64757895,7.71915789 6.64757895,9.456 C6.64757895,11.1928421 8.056,12.6012632 9.79284211,12.6012632 C11.5296842,12.6012632 12.9381053,11.1928421 12.9381053,9.456 Z" id="Stroke-2"></path>
                    <path d="M9.79252632,17.158 C17.8377895,17.158 18.7956842,14.7474737 18.7956842,9.52431579 C18.7956842,5.86326316 18.3114737,3.90431579 15.262,3.06221053 C14.982,2.97378947 14.6714737,2.80536842 14.4198947,2.52852632 C14.0135789,2.08326316 13.7167368,0.715894737 12.7356842,0.302210526 C11.7546316,-0.110421053 7.81463158,-0.0914736842 6.84936842,0.302210526 C5.88515789,0.696947368 5.57147368,2.08326316 5.16515789,2.52852632 C4.91357895,2.80536842 4.60410526,2.97378947 4.32305263,3.06221053 C1.27357895,3.90431579 0.789368421,5.86326316 0.789368421,9.52431579 C0.789368421,14.7474737 1.74726316,17.158 9.79252632,17.158 Z" id="Stroke-4"></path>
                    <line x1="14.7045" y1="5.957895" x2="14.7135" y2="5.957895" id="Stroke-11"></line>
                  </g>
                </g>
              </svg>
            </li>
            <li className="icon">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Iconly/Curved/Voice</title>
                <g id="Iconly/Curved/Voice" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <g id="Voice" transform="translate(4.900000, 2.500000)" stroke="#000000" strokeWidth="1.5">
                    <path d="M1.4649,11.1784 C1.4649,14.3094 4.0029,16.8474 7.1339,16.8474 C10.2659,16.8474 12.8039,14.3094 12.8039,11.1784" id="Stroke-1"></path>
                    <path d="M12.8037,7.923 L12.8037,5.669 C12.8037,2.538 10.2657,8.8817842e-16 7.1337,8.8817842e-16 C4.0027,8.8817842e-16 1.4647,2.538 1.4647,5.669 L1.4647,7.923" id="Stroke-3"></path>
                    <line x1="7.1338" y1="18.9997" x2="7.1338" y2="16.8477" id="Stroke-5"></line>
                    <line x1="1.42108547e-14" y1="11.1784" x2="14.268" y2="11.1784" id="Stroke-7"></line>
                  </g>
                </g>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="media">
        <h1>Multimedia</h1>
        <ul className="media-list">
          <li>
            <div className="img-container">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Iconly/Curved/Document</title>
                <g id="Iconly/Curved/Document" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <g id="Document" transform="translate(3.610000, 2.750100)" stroke="#000000" strokeWidth="1.5">
                    <line x1="11.9858" y1="12.9463" x2="4.7658" y2="12.9463" id="Stroke-1"></line>
                    <line x1="11.9858" y1="9.1865" x2="4.7658" y2="9.1865" id="Stroke-2"></line>
                    <line x1="7.521" y1="5.4272" x2="4.766" y2="5.4272" id="Stroke-3"></line>
                    <path d="M7.63833441e-14,9.25 C7.63833441e-14,16.187 2.098,18.5 8.391,18.5 C14.685,18.5 16.782,16.187 16.782,9.25 C16.782,2.313 14.685,0 8.391,0 C2.098,0 7.63833441e-14,2.313 7.63833441e-14,9.25 Z" id="Stroke-4"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="description">
              <h3>Archivos</h3>
              <h4>1432</h4>
            </div>
          </li>
          <li>
            <div className="img-container">
              <svg className="icon" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Iconly/Curved/Image</title>
                <g id="Iconly/Curved/Image" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <g id="Image" transform="translate(2.000000, 2.000000)" stroke="#000000" strokeWidth="1.5">
                    <path d="M4.0706,14.459 C4.0706,14.459 4.8826,12.822 6.0646,12.822 C7.2466,12.822 7.8506,14.197 9.1606,14.197 C10.4696,14.197 11.9386,10.749 13.4226,10.749 C14.9046,10.749 15.9706,13.14 15.9706,13.14" id="Stroke-1"></path>
                    <path d="M8.1393,7.1049 C8.1393,7.9649 7.4423,8.6629 6.5813,8.6629 C5.7213,8.6629 5.0243,7.9649 5.0243,7.1049 C5.0243,6.2449 5.7213,5.5469 6.5813,5.5469 C7.4423,5.5479 8.1393,6.2449 8.1393,7.1049 Z" id="Stroke-3"></path>
                    <path d="M0.7503,10.0001 C0.7503,16.9371 3.0633,19.2501 10.0003,19.2501 C16.9373,19.2501 19.2503,16.9371 19.2503,10.0001 C19.2503,3.0631 16.9373,0.7501 10.0003,0.7501 C3.0633,0.7501 0.7503,3.0631 0.7503,10.0001 Z" id="Stroke-5"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="description">
              <h3>Imágenes</h3>
              <h4>6982</h4>
            </div>
          </li>
          <li>
            <div className="img-container">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Iconly/Curved/Play</title>
                <g id="Iconly/Curved/Play" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <g id="Play" transform="translate(2.000000, 2.000000)" stroke="#000000" strokeWidth="1.5">
                    <path d="M0.75,10.0001 C0.75,16.9371 3.063,19.2501 10,19.2501 C16.937,19.2501 19.25,16.9371 19.25,10.0001 C19.25,3.0631 16.937,0.7501 10,0.7501 C3.063,0.7501 0.75,3.0631 0.75,10.0001 Z" id="Stroke-1"></path>
                    <path d="M13.416,9.8555 C13.416,8.9515 8.832,6.0595 8.312,6.5795 C7.793,7.0995 7.742,12.5625 8.312,13.1315 C8.883,13.7025 13.416,10.7595 13.416,9.8555 Z" id="Stroke-3"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="description">
              <h3>Videos</h3>
              <h4>423</h4>
            </div>
          </li>
          <li>
            <div className="img-container">
              <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Iconly/Curved/Category</title>
                  <g id="Iconly/Curved/Category" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                      <g id="Category" transform="translate(3.000000, 3.000000)" stroke="#000000" strokeWidth="1.5">
                          <path d="M18.00036,3.6738 C18.00036,5.7024 16.35516,7.3476 14.32656,7.3476 C12.29796,7.3476 10.65366,5.7024 10.65366,3.6738 C10.65366,1.6452 12.29796,-6.39488462e-15 14.32656,-6.39488462e-15 C16.35516,-6.39488462e-15 18.00036,1.6452 18.00036,3.6738 Z" id="Stroke-1"></path>
                          <path d="M7.3467,3.6738 C7.3467,5.7024 5.7024,7.3476 3.6729,7.3476 C1.6452,7.3476 4.79616347e-15,5.7024 4.79616347e-15,3.6738 C4.79616347e-15,1.6452 1.6452,-6.39488462e-15 3.6729,-6.39488462e-15 C5.7024,-6.39488462e-15 7.3467,1.6452 7.3467,3.6738 Z" id="Stroke-3"></path>
                          <path d="M18.00036,14.26194 C18.00036,16.29054 16.35516,17.93484 14.32656,17.93484 C12.29796,17.93484 10.65366,16.29054 10.65366,14.26194 C10.65366,12.23334 12.29796,10.58814 14.32656,10.58814 C16.35516,10.58814 18.00036,12.23334 18.00036,14.26194 Z" id="Stroke-5"></path>
                          <path d="M7.3467,14.26194 C7.3467,16.29054 5.7024,17.93484 3.6729,17.93484 C1.6452,17.93484 4.79616347e-15,16.29054 4.79616347e-15,14.26194 C4.79616347e-15,12.23334 1.6452,10.58814 3.6729,10.58814 C5.7024,10.58814 7.3467,12.23334 7.3467,14.26194 Z" id="Stroke-7"></path>
                      </g>
                  </g>
              </svg>
            </div>
            <div className="description">
              <h3>Otros</h3>
              <h4>131</h4>
            </div>
          </li>
        </ul>

        <h1 style={{marginTop: "-.6rem"}}>Links</h1>
        <ul className="link-list">
          <li className="link"><a href="#">https://dribbble.com/search/material-design</a></li>
          <li className="link"><a href="#">https://dribbble.com/search/chat-to-express</a></li>
          <li className="link"><a href="#">https://dribbble.com/search/fresh-design</a></li>
        </ul>
      </div>
    </section>
  );
}