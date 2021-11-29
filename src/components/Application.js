import React, { Component } from 'react';
export default class Application extends Component {
  render() {
    return (
      <section id="application">
        <div className="wrapping">
          <div className="title">
            < img src="images/block3-tit.2f98f816.png" />
          </div>
          <div className="condition">
            <div className="box">
              <h6>HERO FIGHTING</h6>
              <p>Battle your Hero against other player's Heroes and receive rewards.</p>
              <p>Take your Hero on daily quests to earn rewards and Hero Chests.</p>
              <p>Both the game and Heroes will be updated frequently.</p>
            </div>
            <div className="box">
              <h6>HERO TRAINING</h6>
              <p>Own your own Heroes; use $MILIT to buy them on the NFT marketplace.</p>
              <p>Have your Heroes join Hero Training and earn $MILIT rewards.</p>
              <p>Anyone can buy Hero NFTs and participate in Hero Training.</p>
            </div>
            <div className="box" >
              <h6>NFT MARKET</h6>
              <p>Exchange your characters or items with other players in the game. Buy and sell Heroes and equipment.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}