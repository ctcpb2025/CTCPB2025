import React from "react";
import { ExcuseCard, Excuses } from "../layouts/excuses";

function PastEditionElement({ link, yearname }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="nopener noreferrer"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <div className="boxStyle">
        <b>{yearname}</b>
      </div>
    </a>
  );
}

function PastEditions() {
  return (
    <div>
      <ExcuseCard excuseType={Excuses.TBU} />
    </div>
  );

  // return(
  //     <div className="container" style={{/* marginLeft:"60px", marginTop: "40px" */}}>
  //         <div className = 'titleStyle1'>
  //             Previous
  //         </div>
  //         <div className = 'titleStyle2'>
  //             Conferences
  //         </div>
  //         <div class="divider" style={{marginBottom: '30px'}}></div>
  //         <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', /*marginLeft: '60px', marginRight: '120px',*/ marginTop: "60px"}}>
  //             <PastEditionElement link="" yearname="2013" />
  //             <PastEditionElement link="" yearname="2015" />
  //             <PastEditionElement link="" yearname="2017" />
  //             <PastEditionElement link="" yearname="2018" />
  //         </div>
  //         <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', /*marginLeft: '60px', marginRight: '120px'*/}}>
  //             <PastEditionElement link="" yearname="2019" />
  //             <PastEditionElement link="" yearname="2020" />
  //             <PastEditionElement link="" yearname="2021" />
  //             <PastEditionElement link="" yearname="2022" />
  //         </div>
  //     </div>
  // )
}

export default PastEditions;
