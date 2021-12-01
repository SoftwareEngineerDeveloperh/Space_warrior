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
            </p>
          </div>
          <div className="contactUS">
            <p>Connect with our community on Telegram</p>
            <a href="https://t.me/NFTinder">Join</a>
          </div>
          <img className="chain" src="images/about_background.png" />
          <div className="txt_right">
            <p>
              One day, our beautiful galaxy will be under attack by space intruders and alien shooters. They will destroy all the squadron. You are the last hero of the galaxy and will face an alien shooter. We need your help to save the galaxy from its alien enemies.
              As the game progresses, you will earn the right to upgrade your spaceship or/and objects to bring it to full lethal capacity.
            </p>
          </div>

          {/* <div className="about">
            <div className="about__desc _anim-items _active">
              <b>User experience is key</b>
              <h3>What is NFTDOR</h3>
              <p>
                Space Warrior Game $SWG will bring the most exciting thrill yet seen via a community run ecosystem of P2E games on the ERC-20 Blockchain Network.
                If you are a fan of space shooting games and like to simulate sky shooting, then Space Warrior Game is for you.
                Space Warrior Game puts you at the forefront of a battle with space intruders. You will take control of the lone spaceship and protect the galaxy from alien swarms. In this space game, you will face an increasingly large number of enemies and deal with many epic bosses during your space mission.
              </p>
              <div className="about_contactUS">
                <p>
                  "Connect with our community on telegram"
                </p>
                <a href="https://t.me//NFTinder" target="_blank">Join</a>
              </div>
            </div>
            <div className="about__connecting">
              <div className="about-animate _anim-items _active">
                <div className="about-animate__item">
                  <img src="images/NFT_10.png"></img>
                </div>
                <div className="about-animate__item">
                  <img src="images/NFT_9.png"></img>
                </div>
                <div className="about-animate__item">
                  <img src="images/NFT_8.png"></img>
                </div>
                <div className="about-animate__item">
                  <img src="images/NFT_7.png"></img>
                </div>
                <div className="about-animate__item">
                  <img src="images/NFT_6.png"></img>
                </div>
              </div>
              <div className="about__text">
                <h3>Connecting sellers and buyers</h3>
                <p>
                  Finding new NFTs and collections is often overwhelming with thousands being minted every single day. With the help of NFTNDR you can start browsing NFTs wherever you are — during the bus or subway ride, shopping with your girlfriend, just open up your smartphone and start swiping.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section >
    );
  }
}