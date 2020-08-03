import React from 'react'
import { NavLink } from 'react-router-dom';
export default function PageNotFound() {
    
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Trang không tồn tại</h2>
          </div>
          <NavLink to="/">
              Về Movik
          </NavLink>
        </div>
      </div>
    );
}
