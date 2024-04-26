import React from "react";

class CommitteeMember {
  constructor(memberType, name, description, institute) {
    this.patronType = memberType;
    this.name = name;
    this.description = description;
    this.institute = institute;
  }

  static getCards(patronList) {
    return patronList.map(function (patron, _) {
      return (
        <div class="btn-raise raise col-md-4 col-sm-6 col-xs-12 p-3 my-2">
          <p class="card-name">{patron.name}</p>
          <p class="card-description">{patron.description}</p>
          <p class="card-description">{patron.institute}</p>
        </div>
      );
    });
  }
}

const OrganizingChair = [
  new CommitteeMember(
    "Organizer",
    "Prof. Kundan Kumar",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];
const OrganizingSec = [
  new CommitteeMember(
    "Organizing Secretary",
    "Prof. Veeky Baths",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Secretary",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];
const OrganizingCommittee = [
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Organizing Committee",
    "Prof. Name",
    "Department of Biological Sciences,",
    "BITS Pilani K K Birla Goa Campus"
  ),

];
const WebsiteTeam = [
  new CommitteeMember(
    "Website Team",
    "Mr. Ashish Pankhedkar",
    "Department of CSIS ,",
    "BITS Pilani K K Birla Goa Campus"
  ),
  new CommitteeMember(
    "Website Team",
    "Mr. Ojas Kanth",
    "Department of CSIS,",
    "BITS Pilani K K Birla Goa Campus"
  ),
];

function OrgCommittee() {
  return (
    <section style={{ textAlign: "start" }}>
      <div class="titleStyle1">Organizing</div>
      <div class="titleStyle2">Committee</div>
      <div class="divider" style={{ marginBottom: "30px" }}></div>
      <h2 class="heading-secondary my-4">Organizer</h2>
      <div class="row px-3">{CommitteeMember.getCards(OrganizingChair)}</div>
      <h2 class="heading-secondary my-4">Organizing Secretary</h2>
      <div class="row px-3">{CommitteeMember.getCards(OrganizingSec)}</div>
      {/* <h2 class="heading-secondary my-4">Organizing Committee</h2>
      <div class="row px-3">
        {CommitteeMember.getCards(OrganizingCommittee)}
      </div> */}
      {/* <h2 class="heading-secondary my-4">Design and Web Development</h2>
      <div class="row px-3">{CommitteeMember.getCards(WebsiteTeam)}</div> */}
    </section>
  );
}

export default OrgCommittee;
