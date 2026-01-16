import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <svg class="svg-filter" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="jelly-backdrop" x="-90%" y="-90%" width="200%" height="200%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="1" result="turbulence"/>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
      <feColorMatrix in="displaced" type="saturate" values="2" result="saturated"/>
      <feGaussianBlur in="saturated" stdDeviation="0.5"/>
    </filter>
  </defs>
</svg> */}

      <svg class="svg-filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id="jelly-backdrop"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            color-interpolation-filters="sRGB"
          >
            {/* <!-- Lower baseFrequency = smoother, less chaotic --> */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="3"
              seed="1"
              result="turbulence"
            />
            {/* <!-- Lower scale = subtle, elegant distortion --> */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="-30"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* <!-- Smooth it out --> */}
            <feGaussianBlur in="displaced" stdDeviation="0.5" result="blurred" />
            {/* <!-- Boost colors --> */}
            <feColorMatrix in="blurred" type="saturate" values="1.8" />
          </filter>
        </defs>
      </svg>

      <div className="nav-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : undefined}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : undefined}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/works"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : undefined}`
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : undefined}`
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
