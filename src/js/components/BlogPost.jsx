import React, { Component } from "react";

class BlogPost extends Component {
  render() {
    return (
      <div className="col-4 blog-post__wrapper">
        <div
          className="blog-post d-flex flex-column justify-content-between position-relative"
          style={{ backgroundImage: `url(${this.props.image})` }}
        >
          <div className="blog-post__gradient position-absolute" />
          <div>
            <div className="blog-post__date d-flex flex-column justify-content-center align-items-center text-white rounded ml-2 mt-2">
              <span>{this.props.day}</span>
              <span>{this.props.month}</span>
            </div>
          </div>
          <div className="blog-post__title text-white d-flex flex-column pl-3">
            <h3>{this.props.title}</h3>
            <p>{this.props.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
