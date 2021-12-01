import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapping">
          <img src="images/floor-bg.8d8383a0.png" alt className="des" />
          <img src="images/SPACE_WARRIOR_3x-removebg-preview.png" alt className="logo" />
          <div className="text">
            <p>Militia Game Platform, Creating More NFT GamePlay, Opening a New Era</p>
            <p className="copyright">@2021-2022 by MILIT All rights reserved.</p>
          </div>
          <div className="website">
            <dt>Websites</dt>
            <dd>
              <a href="#">Home</a>
            </dd>
            <dd>
              <a href="#about">About us</a>
            </dd>
            <dd>
              <a href="#character">Characters</a>
            </dd>
            <dd>
              <a href="#token">Token</a>
            </dd>
            <dd>
              <a href="#roadmap">Roadmap</a>
            </dd>
          </div>
          <div className="community">
            <h6>Community</h6>
            <div className="inner">
              <a href="https://t.me/MilitiaGame">
                <img src="images/inner_tome.png" />
              </a>
              <a href="https://twitter.com/MilitiaGame">
                <img src="images/inner_twi.png" />
              </a>
            </div>
            {/* <div className="el-select">
              <div className="el-select el-input--suffix">
                <input types="text" readonly="readonly" autocomplete="off" placeholder="请选择" className="el-input_inner"></input>
                <span className="el-input__suffix">
                  <span className="el-input__suffix-inner">
                    <i className="el-select__caret el-input__icon el-icon-arrow-up" ></i>
                  </span>
                </span>
              </div>
            </div> */}
          </div>
          <div id="go-top"><a title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}