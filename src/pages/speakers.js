// import React from "react";

import { ExcuseCard, Excuses } from "../layouts/excuses";

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
    marginTop: '40px',
    flexWrap: 'wrap',
    textAlign: 'justify'
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
            <div className="speakerText" style={{ marginTop: "25px", marginBottom: '40px' }}>
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

  static getInvitedSpeakerCards(speakerList) {
    return speakerList.map(function (speaker, _) {
      return (
        <div className="speakerDiv col-md-4 col-sm-6 col-xs-12">
          <div className="upperDiv">
          <div className="speakerName2">{speaker.speakerName}</div>
            <div className="speakerText" style={{marginBottom: '40px'}}>
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

// const speakerList1 = [
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker1,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof<br />
//         University
//       </div>
//     ),
//     "link of profile"    
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker1,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof<br />
//         University
//       </div>
//     ),
//     "link of profile"    
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker1,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof<br />
//         University
//       </div>
//     ),
//     "link of profile"    
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker1,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof<br />
//         University
//       </div>
//     ),
//     "link of profile"    
//   ),
// ];

// const speakerList2 = [
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
//   new SpeakerHelper(
//     "Prof. Name",
//     speaker01,
//     (
//       <div className="speakerText" style={{ marginTop: "25px" }}>
//         Dept of the prof <br />
//         Univeristy
//       </div>
//     ),
//     "link"
//   ),
  
 
// ];

function Speakers() {

  return (
    <ExcuseCard excuseType={Excuses.TBU}/>
  )
  
  // return (
  //   <div
  //     className="container"
  //     style={{
  //       marginBottom: "50px",
  //     }}
  //   >
  //     <div className="titleStyle1">Our</div>
  //     <div className="titleStyle2">Speakers</div>
  //     <div class="divider" style={{ marginBottom: "30px" }}></div>
      
  //     <h2 class="heading-secondary">Keynote Speakers</h2>
  //       {/* {SpeakerHelper.getKeynoteSpeakerCards(speakerList1)} */}

  //     <h2 class="heading-secondary" style={{ marginTop: "50px" }}>Invited Speakers</h2>
  //     <div class="row">
  //       {/* {SpeakerHelper.getInvitedSpeakerCards(speakerList2)} */}
  //     </div>
  //   </div>
  // );
}

export default Speakers;
