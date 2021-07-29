import React from 'react'
import styled from 'styled-components';

const StyledApp = styled.div`
.footer{
  height: 15rem; 
  width: 100%;
  color: white;
  background-color: #171b22;
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
