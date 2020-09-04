import React from 'react'

export default function About(props) {
    return (
        <div className="root-view">
          <div className="row">
            <div className="col-6">
              <div className="content-view">
                <div className="content-view-list">
                  <h2 className="uppercase">ABOUT</h2>
                  <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla.

                  </p>
                </div>
                <div className="action-group">
              <button
                class="p-button--neutral uppercase"
                onClick={() => props.handleAction("home")}
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                Back
              </button>
            </div>
              </div>
            </div>
            <div className="col-6 top-sm">
              <div className="figure-view">
                <img src="/images/about.jpg" alt="Trulli" />
              </div>
            </div>
          </div>
        </div>
    )
}
