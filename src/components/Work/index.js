import React from "react";

export default function Work(props) {
  return (
    <div className="root-view">
      <div className="row">
        <div className="col-6">
          <div className="figure-view">
            <img src="/images/work.jpg" alt="Trulli" />
          </div>
        </div>
        <div className="col-6">
          <div className="content-view">
            <div className="content-view-list">
              <h2 className="uppercase">Work</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
                dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                per conubia nostra, per inceptos himenaeos.
              </p>
              <p className="paragraph">
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt.
              </p>
              <p className="paragraph">
                Etiam tristique libero eu nibh porttitor amet fermentum. Nullam
                venenatis erat id vehicula ultrices.
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
      </div>
    </div>
  );
}
