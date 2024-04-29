import React from 'react';
import './Feature.css';
const course = {
  data: [
    {
      image:
        'https://i.pinimg.com/564x/c1/6c/36/c16c36dc430fc198835ff905d7189bdc.jpg',
      title: 'Sapa',
      title2:
        'Tôi lại về với mảnh đất Sa pa Thị trấn xa, mờ sương vùng biên ải',
    },

    {
      image:
        'https://i.pinimg.com/736x/f7/7d/fa/f77dfab6b30f8c66313b2d226a557345.jpg',
      title: 'Đà Lạt',
      title2:
        'Phú Quốc là một thành phố đảo trực thuộc tỉnh Kiên Giang, Việt Nam.',
    },
    {
      image:
        'https://i.pinimg.com/564x/78/41/44/78414476f4fc19124e3c9f8936462f84.jpg',
      title: 'Hạ Long',
      title2: 'Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. ',
    },
    {
      image:
        'https://i.pinimg.com/564x/47/a2/6c/47a26c84d2e1fdfc5520706842bacbd1.jpg',
      title: 'Hội An',
      title2: 'Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. ',
    },
  ],
};
function Render(props) {
  return (
    <div>
      <div className="featureTitles">
        <a href="/">
          <img src={props.image} alt="cousre" className="featureimg" />
        </a>
        <div className="contanierr">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
export default function Feature() {
  return (
    <div className="Feature">
      {course.data.map((value, index) => (
        <Render key={index} image={value.image} title={value.title} />
      ))}
    </div>
  );
}
