import React, { Component } from 'react';
export default class Roadmap extends Component {
  render() {
    return (
      <section id="roadmap">
        <div className="wrapping">
          <div className="title">
            <img src="images/block6-tit.3ce71bad.png" />
          </div>
          <div className="condition">
            <div className="item">
              <h6>PHASE1</h6>
              <p>Conceptualize and Design Websites.</p>
              <p>Create Contract, Launch MILIT on Binance Smart Chain.</p>
              <p>Audit the Contract.</p>
              <p>White Paper Creation.</p>
              <p>Initial Marketing.</p>
            </div>
            <div className="item">
              <h6>PHASE2</h6>
              <p>Solicit Whitelist.</p>
              <p>Game Beta.</p>
              <p>Launch Blind Box Sale.</p>
              <p>Influencer Marketing.</p>
              <p>Launch Private Sale(TBA).</p>
              <p>List MILIT on PancakeSwap</p>
            </div>
            <div className="item">
              <h6>PHASE3</h6>
              <p>Open Hero Training.</p>
              <p>Open NFT market.</p>
              <p>1st Round of Airdrop.</p>
              <p>Coingecko Coinmarketcap listing.</p>
              <p>Open Hero Recast.</p>
              <p>Release Hero Fighting PVE Feature.</p>
            </div>
            <div className="item">
              <h6>PHASE4</h6>
              <p>Release Equipment Feature.</p>
              <p>Upgrade the Game [characters, equipment, etc].</p>
              <p>CEX listing.</p>
              <p>Launch 2nd Airdrop program.</p>
              <p>Release more Games(Coming Soon).</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}