import React from 'react';
import User from '../user/user';
import './user-list.scss';

export default function UserList() {
  let imgs = [ 0, 0, 0, 0 ].map(() => {
    let uid = Math.random().toString().split('.')[1];
    return `https://i.pravatar.cc/100?u=${uid}`;
  });

  return (
    <section>
      <User more={true} hideTime={true} hideUnread={true}/>
      <div className="search">
        <svg className="search-icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>Iconly/Curved/Search</title>
          <g id="Iconly/Curved/Search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
            <g id="Search" transform="translate(2.000000, 2.000000)" stroke="#000000" strokeWidth="1.5">
              <path d="M9.27542857,0.714285714 C14.0030476,0.714285714 17.836381,4.54666667 17.836381,9.2752381 C17.836381,14.0038095 14.0030476,17.8361905 9.27542857,17.8361905 C4.54685714,17.8361905 0.71447619,14.0038095 0.71447619,9.2752381 C0.71447619,4.54666667 4.54685714,0.714285714 9.27542857,0.714285714 Z" id="Stroke-1"></path>
              <path d="M17.8989524,16.487619 C18.678,16.487619 19.3094286,17.12 19.3094286,17.8980952 C19.3094286,18.6780952 18.678,19.3095238 17.8989524,19.3095238 C17.1199048,19.3095238 16.4875238,18.6780952 16.4875238,17.8980952 C16.4875238,17.12 17.1199048,16.487619 17.8989524,16.487619 Z" id="Stroke-3"></path>
            </g>
          </g>
        </svg>
        <input type="search" name="" id="" placeholder="Buscar mensajes"/>
      </div>
      <div className="status-container">
        <ul className="statuses">
        <li className="status">
          <div className="status-img" style={{borderStyle: 'dashed'}}> + </div>
          <div className="name">Mi estado</div>
        </li>
        <li className="status">
          <div className="status-img">
            <img src={ imgs[0] } alt="" />
          </div>
          <div className="name">Fer</div>
        </li>
        <li className="status">
          <div className="status-img">
            <img src={ imgs[1] } alt="" />
          </div>
          <div className="name">Nanda</div>
        </li>
        <li className="status">
          <div className="status-img">
            <img src={ imgs[2] } alt="" />
          </div>
          <div className="name">Lia</div>
        </li>
        <li className="status">
          <div className="status-img">
            <img src={ imgs[3] } alt="" />
          </div>
          <div className="name">Pablo</div>
        </li>
      </ul>
      </div>
      <ul className="chatlist">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </ul>
    </section>
  );
}