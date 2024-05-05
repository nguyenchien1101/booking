import React from "react";
import "./Picture.css";
import { TbBackground } from "react-icons/tb";
const Picture = () => {
  return (
    <div className="Picture">
      <div className="row">
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/564x/5d/ce/e6/5dcee663ba91d5590ab82d604549eb07.jpg) ",
            }}
          ></div>
          <h2>Phòng Standard</h2>
          <div className="slide">
            <p>
              Đây là loại phòng cơ bản nhất tại hầu hết các khách sạn, một số
              khách sạn 5 sao có thể không có loại phòng này. Phòng thường khá
              nhỏ, được bố trí ở các tầng thấp, không có view đẹp và chỉ gồm
              những vật dụng cơ bản nhất.
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://www.vietnambooking.com/wp-content/uploads/2018/06/co-nhung-loai-phong-khach-san-nao-02-06-18-2.jpg)",
            }}
          ></div>
          <h2>Phòng Superior</h2>
          <div className="slide">
            <p>
              Loại phòng khách sạn này tương đối chất lượng hơn phòng Standard,
              diện tích phòng được tăng thêm, có view nhìn và cách bày trí đẹp
              mắt hơn hẳn và thường nằm ở những tầng gần giữa của tòa nhà.
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/564x/a8/ac/56/a8ac56dc84a3cfa20fff002faec2120b.jpg)",
            }}
          ></div>
          <h2>Phòng Deluxe</h2>
          <div className="slide">
            <p>
              Loại phòng khách sạn này thường nằm ở các tầng giữa trở lên nên sở
              hữu view nhìn ra quang cảnh bên ngoài khá đẹp
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://www.vietnambooking.com/wp-content/uploads/2018/06/co-nhung-loai-phong-khach-san-nao-02-06-18-4-2.jpg)",
            }}
          ></div>
          <h2>Phòng Suite</h2>
          <div className="slide">
            <p>
              Đây là loại phòng cao cấp nhất trong tất cả các loại phòng khách
              sạn, thông thường được bố trí ở các tầng cao nhất.
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://www.vietnambooking.com/wp-content/uploads/2018/06/co-nhung-loai-phong-khach-san-nao-02-06-18-6.jpg)",
            }}
          ></div>
          <h2>Single Bedroom</h2>
          <div className="slide">
            <p>phòng 1 giường đơn cho 1 người</p>
          </div>
        </div>
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/3d/b5/90/3db590f0858511f322f21c099124550a.jpg)",
            }}
          ></div>
          <h2>Twin Bedroom </h2>
          <div className="slide">
            <p>phòng 2 giường đơn cho 2 người.</p>
          </div>
        </div>
        <div className="col">
          <div
            className="photoss"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/564x/31/f8/c5/31f8c57fac03b924958d667c088a3c3e.jpg)",
            }}
          ></div>
          <h2>Double Bedroom</h2>
          <div className="slide">
            <p>phòng 1 giường đôi cho 2 người.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Picture;
