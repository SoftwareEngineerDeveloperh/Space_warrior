import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="wrapping">
          <div className="title">
            < img src="images/block2-tit.f67a16ac.png" />
          </div>
          <div className='txt'>
            <p>
              Space Warrior Game $SWG will bring the most exciting thrill yet seen via a community run ecosystem of P2E games on the ERC-20 Blockchain Network.
              If you are a fan of space shooting games and like to simulate sky shooting, then Space Warrior Game is for you.
              Space Warrior Game puts you at the forefront of a battle with space intruders. You will take control of the lone spaceship and protect the galaxy from alien swarms. In this space game, you will face an increasingly large number of enemies and deal with many epic bosses during your space mission.
              One day, our beautiful galaxy will be under attack by space intruders and alien shooters. They will destroy all the squadron. You are the last hero of the galaxy and will face an alien shooter. We need your help to save the galaxy from its alien enemies.
              As the game progresses, you will earn the right to upgrade your spaceship or/and objects to bring it to full lethal capacity.
            </p>
          </div>
          < img className="chain" src="images/block2-img.56594e6f.png" />
        </div>
      </section>
    );
  }
}