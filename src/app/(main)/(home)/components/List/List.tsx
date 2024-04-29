import React from "react";
import "./List.css";
const course = {
  data: [
    {
      image:
        "https://i.pinimg.com/564x/80/e9/27/80e9279d123d9b280146456603b1ebcd.jpg",
      title: "Vero Concept",
      title2: "Çatalkaya, Mithatpaşa Cd. No: 377, 35320 Narlıdere/İzmir",
    },
    {
      image:
        "https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg",
      title: "The Peninsula Shanghai",
      title2: "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China",
    },

    {
      image:
        "https://i.pinimg.com/564x/6b/61/9b/6b619b18f89bcdceec7e223c28e99f8e.jpg",
      title: "Royal Cliff Beach Hotel by DBALP",
      title2:
        "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China.",
    },
    {
      image:
        "https://i.pinimg.com/564x/be/09/55/be0955295e73547a9d46aea30f337b36.jpg",
      title: "Doubletree",
      title2: "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China",
    },
    {
      image:
        "https://i.pinimg.com/564x/0b/0b/88/0b0b88fa35ded79b815b9e6d3f12bed4.jpg",
      title: "RoMA",
      title2: "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China",
    },
    {
      image:
        "https://i.pinimg.com/564x/30/5a/21/305a216481dfaaec10fd59cf1f667652.jpg",
      title: "Paris",
      title2: "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China",
    },
    {
      image:
        "https://i.pinimg.com/564x/af/1e/b2/af1eb23f9e1831e2f8bef5245a8d1573.jpg",
      title: "Gallery of A Retrofit ",
      title2: "Zhong Shan Dong Yi Lu, Wai Tan, Huangpu Qu, Shanghai Shi, China",
    },
  ],
};
function App(props) {
  return (
    <div className="pListItem">
      <img src={props.image} alt="cousre" className="featureimg" />
      <div className="plisttitle">
        <h1>{props.title}</h1>
        <p>{props.dc}</p>
      </div>
    </div>
  );
}
export default function List() {
  return (
    <div className="plist">
      {course.data.map((vl) => (
        <App image={vl.image} title={vl.title} dc={vl.title2} />
      ))}
    </div>
  );
}
