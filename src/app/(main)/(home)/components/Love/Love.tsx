import React from "react";
import "./Love.css";
function Love() {
  return (
    <div className="Love">
      <div className="wrapper">
        <div className="chua">
          <input type="radio" name="slide" id="c1" defaultChecked />

          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4>forest</h4>
                <p>
                  Rừng là một môi trường tự nhiên đầy màu sắc và sống động, mang
                  lại sự tự thân và hòa nhập cho con người
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4>Sea</h4>
                <p>
                  Biển là một thế giới hùng vĩ, với đại dương bao la và đầy bí
                  ẩn, là nơi sinh sống của nhiều loài động vật và cây cỏ độc đáo
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4>sky</h4>
                <p>
                  Bầu trời - vô biên, tĩnh lặng và đầy bí ẩn, là nguồn cảm hứng
                  vô tận cho trí tưởng tượng của con người
                </p>
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4>Moutain</h4>
                <p>
                  Núi - những khối đá cao vút, tạo nên cảnh quan hùng vĩ, mang
                  đến sự yên bình và một góc nhìn tuyệt đẹp lên thế giới từ độ
                  cao.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Love;
