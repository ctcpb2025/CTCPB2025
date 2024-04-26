import React from "react";
import logo from "../about/ctcpb-logo.png"

const aboutText = "Department of Biological Sciences, BITS Pilani, K. K. Birla Goa Campus along with Plant Tissue Culture Association (India) invites you for National Symposium. The symposium aims to bring eminent scientists working in the frontier areas of Plant Tissue Culture, Biotechnologist, Genomics, Genetics, Metabolomics, Stress Biology, Developmental Biologist together and provide a forum for sharing their immense experience to encourage and inspire young researchers for exploring the emerging areas of Plant Biotechnology. The conference would address, deliberate and consolidate the issues and technologies aimed to develop climate resilient crops to meet the global food demand."
const aboutText2 = "text 2";
const aboutText3 = "text 3";

function CTCPB() {
    return(
      <div className="container" style={{marginBottom:"20px"}}>
      <div className="titleStyle1">About</div>
      <div className="titleStyle2">
       CTCPB 2025

      </div>
      <div className="divider" style={{marginBottom: '30px'}}></div>
      <div className="about-content">
        <div className="about-mid-grid">
          <img
            src={logo}
            alt="CTCPB logo"
            className="about-img-logo"
          />
          <p> </p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText}</p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText2}</p>
          <p style={{fontWeight: '400'}} className="about-txt-cnt">{aboutText3}</p>
        </div>
      </div>
    </div>
   );
}
    
 export default CTCPB;
  
