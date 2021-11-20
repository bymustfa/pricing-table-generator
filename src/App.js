import React from "react";

const App = () => (
  <main>
    <div className="flex-item">Sol</div>
    <div className="flex-item">
      <div className="wrapper">
        <ui className="mainMenu">
          <li className="item" id="step1">
            <a href="#step1" className="btn">
              <i className="fas fa-user-circle" />
              My Account
            </a>
            <div className="subMenu">111</div>
          </li>

          <li className="item" id="step2">
            <a href="#step2" className="btn">
              <i className="fas fa-address-card" />
              About
            </a>
            <div className="subMenu">111</div>
          </li>

          <li className="item" id="step3">
            <a href="#step3" className="btn">
              <i className="fas fa-address-card" />
              About
            </a>
            <div className="subMenu">222</div>
          </li>
        </ui>
      </div>
    </div>
  </main>
);
export default App;
