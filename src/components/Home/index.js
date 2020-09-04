import React from 'react';

export default function Home(props) {
    return (
        <div className="root-view">
          <div className="row">
            <div className="col-6">
              <div className="content-view">
                <div className="content-view-list">
                  <h1 className="uppercase">CAYCE POLLARD</h1>
                  <small className="uppercase">MULTIVERSE ANALYST</small>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                    dapibus rutrum facilisis. Class aptent taciti sociosqu ad
                    litora torquent per nostra inceptos.
                  </p>
                </div>
                <div className="action-group">
                  <button class="p-button--neutral uppercase" onClick={()=>props.handleAction('work')}>Work</button>
                  <button class="p-button--neutral uppercase" onClick={()=>props.handleAction('about')}>About</button>
                  <button class="p-button--neutral uppercase" onClick={()=>props.handleAction('contact')}>Contact</button>
                </div>
              </div>
            </div>
            <div className="col-6 top-sm">
              <div className="figure-view">
                <img src="/images/fashion.jpg" alt="Trulli" />
              </div>
            </div>
          </div>
          <div className="row social-media-copyright">
            <div className="col-12">
              <ul class="social-navigation p-navigation__items">
                <li class="p-navigation__item">
                  <a class="p-navigation__link" href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="p-navigation__item">
                  <a class="p-navigation__link" href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="p-navigation__item">
                  <a class="p-navigation__link" href="#">
                    <i class="fa fa-instagram" ></i>
                  </a>
                </li>
                <li class="p-navigation__item">
                  <a class="p-navigation__link" href="#">
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="p-navigation__item">
                  <a class="p-navigation__link" href="#">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <span className="copyright-text">© Cayce Pollard. All rights reserved.</span>
            </div>
          </div>
        </div>
    )
}
