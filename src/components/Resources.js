import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources();
  }, []);

  const getResources = () => {
    axios
      .get("https://reqres.in/api/unknown")
      .then((res) => {
        console.log(res);
        setResources(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Link to="/">Resources</Link>

      <div className="grid-container">
        {resources.map((resource) => {
          return (
            <Link key={resource.id} to={`/resource/${resource.id}`}>
              <div
                style={{ backgroundColor: resource.color }}
                className="grid-item"
              >
                <p>{resource.name}</p>
                <p>{resource.year}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Resources;
