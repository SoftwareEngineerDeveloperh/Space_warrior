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
                  100,000,000 MILIT
                </h5>
                <p>
                  (Binance Smart Chain)
                </p>
              </div>
              <div className='middle'>
                <div className='row'>
                  <div className="label">TOKEN</div>
                  <div className="value">MILIT</div>
                </div>
                <div className="row">
                  <div className="label">MAX SUPPLY</div>
                  <div className="value">100,000,000</div>
                </div>
                <button>
                  <h6>Smart contract</h6>
                  <p>0xeEa7C025b1EeE9527d631094D45Ff9cE5d830b6f</p>
                </button>
              </div>
            </div>
            <div className='right'>
              < img src="images/block5-img.4350ed55.png" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}