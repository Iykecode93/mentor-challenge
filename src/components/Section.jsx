import React from "react";
import mobile from '../assets/images/image-hero-mobile.png';
import desktop from '../assets/images/image-hero-desktop.png';
import audiophile from '../assets/images/client-audiophile.svg';
import databiz from '../assets/images/client-databiz.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';


const Section = () => {
  return (
    <section className="section">
      <article className="article">
        <h1 className="art-h1">Make <br/> remote Work</h1>
        <p className="art-p">Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.</p>
            <button className="art-button">Learn more</button>
            <ul className="art-ul">
              <li><img src={databiz} alt="" className="art-li"/></li>
              <li><img src={audiophile} alt="" className="art-li"/></li>
              <li><img src={maker} alt="" className="art-li"/></li>
              <li><img src={meet} alt="" className="art-li"/></li>
            </ul>
      </article>
      <article className="article-img">
        <picture>
          <source media="(768px)" srcset={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
    </section>
  );
};

export default Section;
