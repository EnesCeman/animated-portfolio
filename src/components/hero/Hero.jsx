import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div class="textContainer">
        <h2>ENES CEMAN</h2>
        <h1>Web devloper and UI designer</h1>
        <div class="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
        <img src="/public/scroll.png" alt="" />
      </div>
      <div class="imageContainer">
        <img src="/public/hero.png" alt="" />
      </div>
    </div>
  );
};
