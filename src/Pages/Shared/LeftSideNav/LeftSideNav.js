import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2>All category:{categories.length}</h2>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            {/* <NavLink>{category.name}</NavLink> */}
            <Link to={`/catagory/:${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
