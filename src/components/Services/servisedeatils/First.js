import SSBAR1 from "../../../assets/images/backgrounds/funfact-bg-1-1.jpg";
import React from "react";
import Designer from "../../Designer";

function First() {
  return (
    <>
      <div className="container">
        <div className="service-sidebar__call">
          <div
            className="service-sidebar__call-bg"
            style={{ backgroundImage: `url(${SSBAR1})` }}
          ></div>
          <div className="row">
            <div className="col-lg-6">
              <Designer />
            </div>
            <div className="col-md">
            <h3>Ambalaj Tasarım</h3>
            <p>
              Lorem ipsum is simply free text used by copytyping refreshing.
              Neque porro est qui dolorem ipsum quia quaed inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Aelltes
              port
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
