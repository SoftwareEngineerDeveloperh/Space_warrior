import React, { Component } from 'react';
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="home">
          <div className="wrapping">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

              <div className="row">
                <div className="col-md-1">
                  <a href="#home">
                    <img src="images/SPACE_WARRIOR_3x-removebg-preview.png" className="img-fluid" />
                  </a>
                </div>
                <div className="col-md-8">
                  <ul id="nav" className="nav">
                    <li className="current"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#application">Appication</a></li>
                    <li><a href="#character">Character</a></li>
                    <li><a href="#token">Token</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="btns">
                    <a href="https://docs.militia.games" className="head_btn">DOCUMENTS</a>
                    <a href="https://play.militia.games" className="head_btn">LAUNCH APP</a>
                  </div>
                </div>
              </div>
            </nav>

            <div className="main">
              <div className="side">
                <img src="images/SPACE_WARRIOR_3x-removebg-preview.png" />
                <a href="https://www.certik.org/projects/militiagames" className="btn">CertiK Audit</a>
                <a href="https://bscscan.com/token/0xeEa7C025b1EeE9527d631094D45Ff9cE5d830b6f?a=0x000000000000000000000000000000000000dead" className="btn">Burn Address</a>
                <a href="https://pancakeswap.finance/swap?outputCurrency=0xeea7c025b1eee9527d631094d45ff9ce5d830b6f" className="btn">BUY MILIT</a>
              </div>
              {/* <img src="images/banner.fa20c90e.png" className="banner img-fluid" /> */}
              <video controls autoPlay> 
                <source src="images/home.mp4" type="video/mp4" ></source>
              </video>
            </div>
            <p className="scrolldown">
              <a href="#about"><i className="icon-down-circle"></i></a>
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}