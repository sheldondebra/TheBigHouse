import React, { useEffect, useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { BrowserRouter , Router, Link } from "react-router-dom";

const Movies = () => {
  const API =
    "http://phplaravel-992585-3492010.cloudwaysapps.com/api/app/get-all-user-owned-videos";

  const baseUrl = "http://phplaravel-992585-3492010.cloudwaysapps.com/";

  const handleImageError = event => {
    event.target.src =
      "https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=826&t=st=1689608178~exp=1689608778~hmac=e112801d29ac77bb96ed99bc1959cbd669b5079c3ce8a93b0449da516dd5c234";
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = { user_id: 4, fuid: "uko2D0teFSYxYx8KTtUO4ZATYrw2" };
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          const jsonData = await response.json();
          const list = jsonData.data;
          setItems(list);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  return <div className="container p-4 m-3 mx-auto">
      <div className="flex justify-between ">
        <h3 className="text-white ">Trending Now</h3>
        <div className="flex space-x-3">
          <BsArrowLeftSquare className="text-2xl text-white" />
          <BsArrowRightSquare className="text-2xl text-white" />
        </div>
      </div>
      <Router>
        <div className="grid grid-cols-5 gap-3 m:grid">
          {items.map(item => {
            return <div key={item.id} className="pt-4 ">
              <Link to={`/movies/${item.id}`}></Link>
                <img className="postImage" src={baseUrl + item["thumbnail_path"]} alt={item.name} onError={handleImageError} />
                <h4 className="py-2 text-base text-white">
                  {item["title"]}
                </h4>
              </div>;
          })}
        </div>
      </Router>
    </div>;
};

export default Movies;
