import { Outlet } from "react-router-dom";

function Popup() {
  return (
   <div className="popupfake">
     <div className="popup-background">
      <div className="popup">
        <Outlet />
      </div>

      <div className="popup-message">Use your laptop!</div>
    </div>
   </div>
  );
}

export default Popup;
