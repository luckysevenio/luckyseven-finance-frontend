import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacto</h5>
            <p>Contacto1: +56225678912</p>
            <p>Contacto2: +56225678913</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Direccion</h5>
            <p>
            Avenida Providencia 1208, OF 207 2P, Providencia
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
      >
        © 2021 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          luckyseven
        </a>
      </div>
    </div>
  );
}

export default Footer;