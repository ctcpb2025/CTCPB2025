// import React from "react";

import { ExcuseCard, Excuses } from "../layouts/excuses";
import speaker1 from "../images/speakers/speaker1.png";
import speaker2 from "../images/speakers/speaker2.jpeg";
import speaker3 from "../images/speakers/speaker3.jpg";
import speaker4 from "../images/speakers/speaker4.jpg";
import speaker5 from "../images/speakers/speaker5.jpg";
import speaker6 from "../images/speakers/speaker6.jpg";
import speaker7 from "../images/speakers/speaker7.jpg";

function SpeakerLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyleView">VIEW MORE &#160; &#x2192;</div>
    </a>
  );
}

class SpeakerHelper {
  constructor(
    speakerName,
    speakerImage,
    speakerText,
    speakerLink,
    speakerLinkStyle
  ) {
    this.speakerName = speakerName;
    this.speakerImage = speakerImage;
    this.speakerText = speakerText;
    this.SpeakerLink = speakerLink;
    this.speakerLinkStyle = speakerLinkStyle;
  }

  static speakerTextStyle = {
    marginTop: "40px",
    flexWrap: "wrap",
    textAlign: "justify",
  };

  static getKeynoteSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv">
          <img
            className="speakerImg"
            src={speaker.speakerImage}
            alt={speaker.speakerName}
          />
          <div className="upperDiv">
            <div className="speakerName">{speaker.speakerName}</div>
            <div className="speakerText">{speaker.speakerText}</div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }

  static getInvitedSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv col-md-4 col-sm-6 col-xs-12">
          <div className="upperDiv">
            <div className="speakerName2">{speaker.speakerName}</div>
            <div className="speakerText" style={{ marginBottom: "40px" }}>
              {speaker.speakerText}
            </div>
            <div style={speaker.speakerLinkStyle}>
              <SpeakerLink link={speaker.SpeakerLink} />
            </div>
          </div>
        </div>
      );
    });
  }
}

const invitedSpeakers = [
  new SpeakerHelper(
    "Dr. Alok K. Sinha",
    speaker1,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        NIPGR
        <br />
        New Delhi
      </div>
    ),
    "https://nipgr.ac.in/research/dr_asinha.php"
  ),
  new SpeakerHelper(
    "Prof. Manoj Prasad",
    speaker2,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Delhi University
        <br />
        New Delhi
      </div>
    ),
    "http://www.nipgr.res.in/research/dr_mprasad.php"
  ),
  new SpeakerHelper(
    "Prof. Rakhi Chaturvedi",
    speaker3,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        IIT Guwahati
        <br />
        Guwahati
      </div>
    ),
    "https://www.iitg.ac.in/rakhi_chaturvedi/profile.html"
  ),
  new SpeakerHelper(
    "Dr. Pradeep Agarwal",
    speaker4,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        CSIR CSMCRI Bhavnagar
        <br />
        Bhavnagar
      </div>
    ),
    "https://www.csmcri.res.in/node/340"
  ),
  new SpeakerHelper(
    "Prof. Sneh Lata Singh Pareek",
    speaker5,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        International Center for Genetic Engineering and Biotechnology
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/sneh-lata-singla-pareek/"
  ),
  new SpeakerHelper(
    "Prof. Sudhir K. Sopory",
    speaker6,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        International Center for Genetic Engineering and Biotechnology
        <br />
        New Delhi
      </div>
    ),
    "https://www.icgeb.org/sudhir-k-sopory/"
  ),
  new SpeakerHelper(
    "Prof. Tarun Kant",
    speaker7,
    (
      <div className="speakerText" style={{ marginTop: "25px" }}>
        Indian Council for Forestry Research and Education
        <br />
        Dehradun
      </div>
    ),
    "https://afri.icfre.gov.in/index.php?linkid=r4680&link=0"
  ),

];

function Speakers() {
  // return (
  //   <ExcuseCard excuseType={Excuses.TBU}/>
  // )

  return (
    <div
      className="container"
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="titleStyle1">Our</div>
      <div className="titleStyle2">Speakers</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>

      {/* <h2 class="heading-secondary">Keynote Speakers</h2> */}
      {/* {SpeakerHelper.getKeynoteSpeakerCards(speakerList1)} */}

      <h2 class="heading-secondary">Invited Speakers</h2>
      {SpeakerHelper.getKeynoteSpeakerCards(invitedSpeakers)}
    </div>
  );
}

export default Speakers;
