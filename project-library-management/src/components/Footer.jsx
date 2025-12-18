import React from 'react';
import "./Footer.css"; // optional, for extra styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About Library</h5>
            <p>
              Our library provides a wide collection of books for all ages.
              Borrow books easily and enjoy reading!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/book" className="text-white text-decoration-none">Books</a></li>
              <li><a href="/my-books" className="text-white text-decoration-none">My Books</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@library.com</p>
            <p>Phone: +91 123 456 7890</p>
            <div className="d-flex gap-2">
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">Twitter</a>
              <a href="#" className="text-white">Instagram</a>
            </div>
          </div>

        </div>

        <hr className="bg-white" />

        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} Library Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
