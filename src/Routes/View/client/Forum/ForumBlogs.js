import React from "react";
import { Link } from "react-router-dom";
import bgforum from "../../../../assets/images/worldfoof.png";

const ForumBlogs = ({time,title,content}) => {
  return (
    <div className="row p-2 shadow mb-4">
      <div className="col-4 d-flex align-items-center">
        <img src={bgforum} width="100%" alt="" />
      </div>
      <div className="col-8 d-flex flex-column">
        <time>{time}</time>
        <h2>{title}</h2>
        <p className="forum-p">
        {content}
        </p>
        <Link className="details btn btn-warning">Details</Link>
      </div>
    </div>
  );
};

export default ForumBlogs;
