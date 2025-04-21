import {
  dept1,
  dept2,
  dept4,
  dept5,
  dept6,
  dept7,
  dept8,
  dept9,
  dept10,
  dept11,
  dept12,
  dept13,
  dept14,
  dept15,
  deptfac2022,
} from "../../assets/images";
function Slider() {
  return (
    <div className="px-5 py-24 mx-auto bg-accent-dark">
      <div className="container slider-container">
        <div class="slider">
          <div class="slides">
            <img src={dept1} alt="1" />
            <img src={dept2} alt="2" />
            <img src={deptfac2022} alt="3" />
            <img src={dept4} alt="4" />
            <img src={dept5} alt="5" />
            <img src={dept6} alt="6" />
            <img src={dept7} alt="7" />
            <img src={dept8} alt="8" />
            <img src={dept9} alt="9" />
            <img src={dept10} alt="10" />
            <img src={dept11} alt="11" />
            <img src={dept12} alt="12" />
            <img src={dept13} alt="13" />
            <img src={dept14} alt="14" />
            <img src={dept15} alt="15" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
