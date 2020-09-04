import React from "react";
import "./Contact.scss";
export default function Contact(props) {
  return (
    <div className="root-view">
      <div className="row">
        <div className="col-9 center-column">
          <div className="action-group">
            <button
              class="p-button--neutral uppercase"
              onClick={() => props.handleAction("home")}
            >
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              Back
            </button>
          </div>
          <div className="content-view">
            <div className="content-view-list">
              <h2 className="uppercase">CONTACT</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vestibulum risus sit amet lectus condimentum, ac
                fermentum nibh ullamcorper magna.
              </p>
            </div>
            <form className="contact-from">
                <div className="form-group">
                    <label className="uppercase" htmlFor="name">Name</label>
                    <input className="input-field" type="text" id="name" />
                </div>
                <div className="form-group">
                    <label className="uppercase" htmlFor="email">Email</label>
                    <input className="input-field" type="email" id="email"/>
                </div>
                <div className="form-group">
                    <label className="uppercase" for="message">Message</label>
                    <textarea className="input-field" id="message" rows="4"></textarea>
                </div>
                <div className="action-group">
                    <button type="submit" className="uppercase">Send Message</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
