import che from "../../images/che.png";
import dots from "../../images/dots.svg";

import "./style.css";
const Hero = () => {
  return (
    <>
      <section class="herosection">
        <div class="hero">
          <div class="CTA">
            <h1>Delicious meals at your convenience</h1>
            <p>
              Order your meals from us and we will have it delivered at your
              doorstep.
            </p>
            <button>Get Started</button>
            <label for="search">Instant Order</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="&#128269;  Search for meal"
            />
          </div>
          <div class="image">
            <img src={che} alt="" />
          </div>
        </div>
      </section>
      <div class="fixedMessenger">
        <img src={dots} alt="" />
      </div>
    </>
  );
};

export default Hero;
