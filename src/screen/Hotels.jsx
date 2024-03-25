
import { data } from "../component/hotelData";
import React, { useState } from "react";
import "./Hotels.css"
import Navbar from "./../component/Navbar"
import Footer from "./../component/Footer"

const Hotels = () => {
    const [food, setFood] = useState(data);
    console.log(food);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  // this will update the raitng of items
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

  // solid principle and clean code

  return (
    <div>
        <Navbar></Navbar>
      <div style={{textAlign:"center", marginTop:"90px"}}>
        <input
        style={{padding:"5px 20px"}}
          type="text"
          name="search"
          placeholder="search food"
          onChange={(e) => {
            filterData(e.target.value);
          }}
          
        />
      </div>
      <div style={{textAlign:"center", marginTop:"20px", marginBottom:"20px"}}>
        <input
        style={{padding:"5px 20px"}}
          type="number"
          name="rating"
          placeholder="Enter Rating"
          onChange={updateRating}
        />
      </div>
      <div className="cardss">
      {food.map((item) => {
        return (
          <div
          className="innerCardss"
            key={item._id.$oid}
            style={{
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "1rem",
              width: "10rem",
              margin: "0.5rem",
            }}
          >
            <h5>{item.name}</h5>
            <p><i class="fa-solid fa-location-dot"></i> {item.address}</p>
            <p>Food : {item.type_of_food}</p>
            <p>Rating : {item.rating}</p>
          </div>
        );
      })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Hotels
