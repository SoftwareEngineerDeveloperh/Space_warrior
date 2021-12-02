import React, { Component } from 'react';
export default class Token extends Component {
  render() {
    let Data = this.props.Data;

    return (
      <section id="token">
        <div className='wrapping'>
          <div className="title">
            < img className="tokenimg" src="images/block5-tit.dbe8cb96.png" />
          </div>
          <div className='condition'>
            <div className='left'>
              <div className='top'>
                <h5>
                  Total Supply: 1,000,000,000,000
                </h5>
                <p>
                  {/* (Binance Smart Chain) */}
                </p>
              </div>
              <div className='middle'>
                <div className='row'>
                  <div className="label">Tax</div>
                  <div className="value">10%</div>
                </div>
                <div className="row">
                  <div className="label">Marketing</div>
                  <div className="value">5%</div>
                </div>
                <div className="row">
                  <div className="label">Product development</div>
                  <div className="value">15%</div>
                </div>
                <button>
                  <h6>Smart contract</h6>
                  <p>0xeEa7C025b1EeE9527d631094D45Ff9cE5d830b6f</p>
                </button>
              </div>
            </div>
            <div className='right'>
              {/* < img src="images/block5-img.4350ed55.png" /> */}
              <label>
                Mike - Solidity Developer with 7 years experience
              </label>
              <label>
                Holger - Game Developer with 5 years experience
              </label>
              <label>
                Micael - Business Development Manager with 13 years of experience
              </label>
              <label>
                Steffano - Web Developer with 6 years experience
              </label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// Mike - Solidity Developer with 7 years experience
// Holger - Game Developer with 5 years experience
// Micael - Business Development Manager with 13 years of experience
// Steffano - Web Developer with 6 years experience