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
              <p>Website Release.</p>
              <p>Space Warrior Game 2 level preview.</p>
              <p>Fair Launch.</p>
              <p>CoinGecko, CoinMarketcap, fast track.</p>
              <p>Contract Audit.</p>
            </div>
            <div className="item">
              <h6>PHASE2</h6>
              <p>NFT Marketplace.</p>
              <p>Game Beta.</p>
              <p>Marketing through Social Influencers.</p>
              <p>Regular AMA / Telegram Voice Chats.</p>
              <p>New Themes for the Space Warrior Game Interface.</p>
              <p>Full-time Social Media Marketing Firm.</p>
            </div>
            <div className="item">
              <h6>PHASE3</h6>
              <p>First big website Reskin.</p>
              <p>Full Game Release.</p>
              <p>Influencer Marketing Partnerships.</p>
              <p>More Games Added.</p>
            </div>
            <div className="item">
              <h6>PHASE4</h6>
              <p>First Major Exchange Listings.</p>
              <p>Real World Marketing Partnerships.</p>
              <p>Huge Social Media Campaigns.</p>
              <p>NYC Billboards.</p>
              <p>+ Much More to Come.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}