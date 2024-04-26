import React from "react";

class CommitteeMember {
  constructor(memberType, name, description, institute, link) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
    this.link = link;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2">
          <a href={patron.link} target="_blank" rel="nopener noreferrer">
            <p class="card-name">{patron.name}</p>
            <p class="card-description">{patron.description}</p>
            <p class="card-description">{patron.institute}</p>
          </a>
        </div>
      );
    });
  }
}

const ChiefPatron = [
  new CommitteeMember(
    "Chief Patron",
    "Prof. V Ramgopal Rao",
    "Vice Chancellor,",
    "Birla Institute of Technology and Science, Pilani"
  ),
  new CommitteeMember(
    "Patron",
    "Prof. Suman Kundu",
    "Director,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];


function Patrons() {
  return (
    <div style={{ textAlign: "start" }}>
      <div class="titleStyle1">Our</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Chief Patron</h2>
      <div class="row px-3">{CommitteeMember.getCards(ChiefPatron)}</div>
    </div>
  );
}

export default Patrons;
