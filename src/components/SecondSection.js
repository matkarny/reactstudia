import React from "react";
import Button from "./Button";

const SecondSection = () =>

<section>
<div className="container">
  <div className="row">
    <div className="col-sm-8 col-md-7 py-4">
      <h4>About</h4>
      <p className="text-muted">
        Add some information about the album below, the author, or any
        other background context. Make it a few sentences long so folks
        can pick up some informative tidbits. Then, link them off to some
        social networking sites or contact information.
      </p>
      <Button name = "Nowa nazwa" />
    </div>
  </div>
</div>
</section>

export default SecondSection