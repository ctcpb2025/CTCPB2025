import React from 'react'
import BTable from "react-bootstrap/Table";

const spons_text = "Opportunities are available for companies to give advertisements in the abstract book of the symposium, which will contain messages from VIPs and articles from renowned scientists. Interested companies may contact the convener (e-mail) for giving the advertisement. "

const sponsorship = () => {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">Sponsorship</div>
        <div className="titleStyle2">opportunities</div>
        <div class="divider" style={{ marginBottom: "30px" }}></div>
              <p class="" style={{ fontWeight: "400", textAlign: "justify" }}>
                {" "}
                {spons_text}{" "}
              </p>
        <div class="divider" style={{ marginBottom: "10px" , opacity: "0%"}}></div>
        <BTable striped bordered hover responsive>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>Sponsor Category</th>
              <th>Rate (INR)</th>
              <th>Privileges</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: "center", justifyContent: "center" }}>
            <tr>
              <td style = {{backgroundColor: "#ffcccc", fontWeight: "bold"}}>Platinum</td>
              <td>1,00,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo at prominent places including
dias/website; Presentation opportunity;
Advertisement in souvenir.
(full colour back cover page)</td>
            </tr>
            <tr>
              <td style = {{backgroundColor: "#ffffcc", fontWeight: "bold"}}>Gold</td>
              <td>50,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo at prominent places including
dias/website; Advertisement in souvenir.
(full page colour)</td>
            </tr>

            <tr>
              <td style = {{backgroundColor: "#e0e0e0", fontWeight: "bold"}}>Silver</td>
              <td>25,000</td>
              <td style = {{textAlign: "justify"}}>Name/logo on website; Advertisement in
souvenir.
(full page colour)</td>
            </tr>
            
          </tbody>
        </BTable>
        <p>
          <b>Note:</b> Note for sponsors.
        </p>
      </div>
    </div>
  )
}

export default sponsorship