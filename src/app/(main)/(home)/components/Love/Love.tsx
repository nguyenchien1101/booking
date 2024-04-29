import React from "react";
import "./Love.css";
import Rating from "@mui/material/Rating";
const course = {
  data: [
    {
      image:
        "https://i.pinimg.com/564x/31/c5/62/31c562e6ed5e7cf5a62d52548a62d607.jpg",
      name: "Sapa",
      city: " Bà Rịa – Vũng Tàu",
      price: "8000",
      rate: "5",
      tot: "excellent",
    },
    {
      image:
        "https://i.pinimg.com/564x/1e/3d/8c/1e3d8c6d8ad24a077d5748bb9305652b.jpg",
      name: "Sapa",
      city: " Bà Rịa – Vũng Tàu",
      price: "8000",
      rate: "5",
      tot: "excellent",
    },
    {
      image:
        "https://i.pinimg.com/564x/37/e0/2f/37e02f44e80efd1ec9357d58e73f0bd9.jpg",
      name: "Sapa",
      city: " Bà Rịa – Vũng Tàu",
      price: "8000",
      rate: "5",
      tot: "excellent",
    },
    {
      image:
        "https://i.pinimg.com/564x/7a/cf/bb/7acfbbe4e72a9aa48863419723c78de6.jpg",
      name: "Sapa",
      city: " Bà Rịa – Vũng Tàu",
      price: "8000",
      rate: "5",
      tot: "excellent",
    },
    {
      image:
        "https://i.pinimg.com/564x/39/f7/5f/39f75f7420610e86118513a325fb719a.jpg",
      name: "Sapa",
      city: " Bà Rịa – Vũng Tàu",
      price: "8000",
      rate: "5",
      tot: "excellent",
    },
  ],
};
function App(props) {
  return (
    <div className="pLoveItem">
      <a href="/">
        <img src={props.image} alt="cousre" className="featureimg" />
      </a>
      <div className="plovetitle">
        <div className="fpName">{props.name}</div>
        <div className="fpcity">{props.city}</div>
        <div className="fpprive">{props.price}</div>
        <div className="loveRating">
          <button>
            <Rating name="read-only" value={props.rate} readOnly size="small" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default function Love() {
  return (
    <div className="plove">
      {course.data.map((vl) => (
        <App
          image={vl.image}
          name={vl.name}
          city={vl.city}
          price={vl.price}
          rate={vl.rate}
        />
      ))}
    </div>
  );
}
