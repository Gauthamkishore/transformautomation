import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Resource({ match }) {
  const [resource, setResource] = useState({});

  useEffect(() => {
    getResource();
  }, []);

  const getResource = () => {
    axios
      .get(`https://reqres.in/api/unknown/${match.params.id}`)
      .then((res) => {
        console.log(res.data.data);
        setResource(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Link to="/resources">Resources</Link>
      <div className="grid-container">
        <div className="grid-item" style={{ backgroundColor: resource.color }}>
          <p>{resource.name}</p>
          <p>{resource.year}</p>
          <p>{resource.pantone_value}</p>
        </div>
      </div>
    </>
  );
}

export default Resource;
