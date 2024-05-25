import React from "react";
import BTable from "react-bootstrap/Table";
const hotelslink = "https://www.bits-pilani.ac.in/goa/goahotels"

const accoText = "Note about accomodation. Mention in registration form if hostels are available"

function Accomodation() {
    return (
        <div className="container">
            <div className="titleStyle1"> Accomodation </div>
            <div className="titleStyle2"> Nearby </div>
            <div class="divider" style={{marginBottom: '30px'}}></div>
                <BTable striped bordered hover responsive>
                <thead style={{ textAlign: "center" }}>
                    <tr>
                    <th>Hotel Name</th>
                    <th>Hotel Category</th>
                    {/* <th>Fare (INR)</th> */}
                    </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                    <tr>
                    <td>The HQ</td>
                    <td>4 star</td>
                    {/* <td>300</td> */}
                    </tr>
                    <tr>
                    <td> The Flora Grand</td>
                    <td>3 star</td>
                    {/* <td>2000</td> */}
                    </tr>

                    <tr>
                    <td>The Queeny </td>
                    <td>3 star</td>
                    {/* <td>300</td> */}
                    </tr>

                    <tr>
                    <td>Ocean View: The Apartment Hotel (2BHK) </td>
                    <td>3 star</td>
                    {/* <td>700</td> */}
                    </tr>
                    <tr>
                    <td>Hotel Supremo Vasco</td>
                    <td>3 star</td>
                    {/* <td>800</td> */}
                    </tr>
                </tbody>
                </BTable>
            <p style={{fontWeight: '400'}} className="about-txt-cnt">{accoText}</p>
            <a class="black-button" href={hotelslink} target="_blank" rel="nopener noreferrer">CLICK HERE FOR MORE ACCOMODATION DETAILS NEARBY</a>
            <p></p>
            
        </div>
    );
}

export default Accomodation;