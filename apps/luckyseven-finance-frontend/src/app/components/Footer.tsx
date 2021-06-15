import React from 'react'
import styled from 'styled-components';

const StyledApp = styled.div`
.footer{
  border:1px solid;
  height: 15rem; 
  width: 100%;
  color: white;
  background-color: #343a40;
}
@media only screen and (max-width: 1000px){
  .footer{
    height: 23rem;
  }
}
`;

function Footer() {
          return (
            <StyledApp>
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
              >
                © 2021 Copyright:
                <a className="text-light" href="#">
                  luckyseven
                </a>
              </div>
            </div>
            </StyledApp>
          );
        }

export default Footer;
