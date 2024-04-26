import React from "react";
import { Link } from "react-router-dom";
import "../timeline.css";
import { ExcuseCard, Excuses } from "../layouts/excuses";

class timelineEvent {
  constructor(date, name) {
    this.name = name;
    this.date = date;
  }

  static getCards(eventList) {
    return eventList.map(function (event, index) {
      return (
        <li>
          <div class={index % 2 ? "direction-r" : "direction-l" }>
            <div class="flag-wrapper">
              <span class="flag">{event.date}</span>
            </div>
            <div class="desc">{event.name}</div>
          </div>
        </li>
      );
    });
  }
}

const eventList = [
  new timelineEvent("Date 1", "Event 1"),
  new timelineEvent("Date 2", "Event 2"),
  new timelineEvent("Date 3", "Event 3"),
  new timelineEvent("Date 4", "Event 4"),
  new timelineEvent("Date 5", "Event 5"),
];

function Timeline() {
  return (
    <div className="container">
       <div className="titleStyle1">Timeline</div>
    <div className="titleStyle2">Of Events</div>
    <ExcuseCard excuseType={Excuses.TBU} />
    </div>
    // <div class="container">
    //   <div className="titleStyle1">Timeline</div>
    //   <div className="titleStyle2">Of Events</div>
    //   <div class="divider" style={{ marginBottom: "30px" }}></div>
    //   <section class="section-timeline">
    //     <div class="scale">
    //       <ul class="timeline">{timelineEvent.getCards(eventList)}</ul>
    //       <div className="center-fix">
    //         <Link class="black-button mg-tp" to="/contact">
    //           CONTACT US <span> REGARDING ANY OTHER DETAILS </span>
    //         </Link>
    //         <p></p>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Timeline;
