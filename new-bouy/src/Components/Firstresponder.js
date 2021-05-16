import React from "react";
import "./Firstresponder.css";
import Resource from "./Resource";
import SecurityIcon from "@material-ui/icons/Security";

function Firstresponder() {
  return (
    <div className="first__responder">
      <h2>
        <SecurityIcon /> <SecurityIcon /> <SecurityIcon /> First Responders
        <SecurityIcon /> <SecurityIcon /> <SecurityIcon />
      </h2>
      <div className="firstResponder__resources">
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="LIFELINE"
          summary="We can all help prevent suicide. The Lifeline provides 24/7,
           free and confidential support for people in distress, prevention and 
           crisis resources for you or your loved ones, and best practices for professionals."
          listing="https://suicidepreventionlifeline.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklG_9nVnC0RXdNo6MqK4TJce41y4OT8UfIA&usqp=CAU"
          title="SPRC"
          summary="We all have a role to play. Together, we can save lives."
          listing="https://www.sprc.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPB19-Emzor6AGCutwVMPUg2eLPIokYmEjg&usqp=CAU"
          title="The Green Code Campaign"
          summary="The Code Green Campaign® is a first responder oriented mental health advocacy and education
           organization. Also known as Code Green, we serve all types of first responders. This includes firefighters,
            EMTs, paramedics, dispatchers, police, corrections, air medical, and search & rescue."
          listing="https://codegreencampaign.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMN4f1N6WVa8Kgg4YUUdkW8cx2_XCdRUoC6w&usqp=CAU"
          title="The Columbia Lighthouse Project"
          summary="Suicide Prevention for First Responders Resources”"
          listing="https://firstwatch.net/suicide-prevention-for-first-responders-resources/"
        />

        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmZvTptXWQ4EAVl8pMziUTay9eGn4Gr-i2A&usqp=CAU"
          title="SAMHSA"
          summary="Disaster Technical Assistance Center Supplemental Research Bulletin
        First Responders: Behavioral Health Concerns, Emergency Response, and Trauma"
          listing="https://www.samhsa.gov/"
        />

        <Resource
          image="http://static1.squarespace.com/static/555d1154e4b09b430c18fd39/t/57a3ad3e1b631bd3b094174e/1542237342435/?format=1500w"
          title="Reviving Responders"
          summary="Safe Call Now is a resource for public safety employees to speak confidentially with officers, former law enforcement
         officers, public safety professionals and/or mental healthcare providers who are familiar with your line of work. CONFIDENTIAL,
          comprehensive, 24-hour crisis referral service for all public safety employees, all emergency services personnel and their family
           members nationwide."
          listing="http://www.revivingresponders.com/needhelpnow"
        />
      </div>
    </div>
  );
}

export default Firstresponder;
