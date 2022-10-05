import React from "react";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="row">

        <div className="col-8">
            <h1>Say Hello</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis rerum ratione dignissimos molestiae iusto facere, doloribus voluptatem quisquam doloremque quidem quo consequuntur, veritatis, nemo id recusandae eius animi! Reiciendis.
            </p>

        <form action="" className="col-12 ">
          <div className="row">
            <div className="label-box col-6">
              <label className="form-label " htmlFor="input-name">
                Name
              </label>
              <input
                type="text"
                id="input-name"
                className="form-control bg-secondary text-white"
              />
            </div>
            <div className="label-box col-6">
              <label className="form-label" htmlFor="input-email">
                Email
              </label>
              <input
                type="mail"
                id="input-email"
                className="form-control bg-secondary text-white"
              />
            </div>
          </div>
          <div className="row">
            <div className="label-box col-12">
              <label className="form-label" htmlFor="input-subject">
                Subject
              </label>
              <input
                type="text"
                id="input-subject"
                className="form-control bg-secondary text-white"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name=""
                id="message"
                className="form-control bg-secondary text-white"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mt-3">Submit</button>
        </form>
        </div>
        <aside className="col-4">
          

        </aside>
      </div>
    </div>
  );
};

export default Contact;
