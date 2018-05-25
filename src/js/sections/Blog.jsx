import React, { Component } from "react";
import BlogPost from "../components/BlogPost";
import blogPostImage1 from "../../images/blog-1.png";
import blogPostImage2 from "../../images/blog-2.png";
import blogPostImage3 from "../../images/blog-3.png";

class Blog extends Component {
  render() {
    return (
      <div className="row blog py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1 className="text-white">Blog</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                provident ratione tempore repellendus perferendis quae magnam
                officiis ducimus a eligendi odit nihil autem pariatur impedit,
                cupiditate quasi consequuntur, suscipit iure.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <BlogPost
              day="20"
              month="NOV"
              title="Some title"
              author="John & Jane Doe"
              image={blogPostImage1}
            />
            <BlogPost
              day="14"
              month="NOV"
              title="Some title"
              author="John & Jane Doe"
              image={blogPostImage2}
            />
            <BlogPost
              day="10"
              month="NOV"
              title="Some title"
              author="John & Jane Doe"
              image={blogPostImage3}
            />
          </div>
          <div className="row d-flex justify-content-center">
            <button className="btn btn-default text-white shadow rounded-0">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
