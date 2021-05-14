import React from "react";
import "./Civilian.css";
import PersonIcon from "@material-ui/icons/Person";
import Resource from "./Resource";

function Civilian() {
  return (
    <div className="civilian">
      <h2>
        <PersonIcon /> <PersonIcon /> <PersonIcon /> Civilians <PersonIcon />{" "}
        <PersonIcon /> <PersonIcon />
      </h2>

      <div className="civilian__resources">
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="LIFELINE"
          summary="We can all help prevent suicide. The Lifeline provides 24/7,
           free and confidential support for people in distress, prevention and 
           crisis resources for you or your loved ones, and best practices for professionals."
          listing="https://suicidepreventionlifeline.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8xt2KoXvdkS92tnJ6TS7H0TKda-LcrpAbg&usqp=CAU"
          title="AFPS"
          summary="
          You're not alone
          Whether you have struggled with suicide yourself or have lost a loved one, know you are not alone. Hear about
           personal experiences from people in your local community whose lives have been impacted by suicide."
          listing="https://afsp.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklG_9nVnC0RXdNo6MqK4TJce41y4OT8UfIA&usqp=CAU"
          title="SPRC"
          summary="We all have a role to play. Together, we can save lives."
          listing="https://www.sprc.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwNCz6QfQgET45bo_2jfQjYj8txDqH5DVzQ&usqp=CAU"
          title="NIMH"
          summary="Call the National Suicide Prevention Lifeline, or text the Crisis Both services are free and available 
          24 hours a day, seven days a week. The deaf and hard of hearing cancontact the Lifeline via TTY at 1-800-799-4889.
          All calls are confidential. "
          listing="https://www.nimh.nih.gov/health/topics/suicide-prevention/"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUb4Cu8X7Ih7cvLrO_KG_MuYoYIGQxmxa9PQ&usqp=CAU"
          title="crisis Line Text"
          summary="Text HOME to 741741 from anywhere in the United States, anytime. Crisis Text Line is here for any crisis.
           A live, trained Crisis Counselor receives the text and responds, all from our secure online platform. The volunteer
            Crisis Counselor will help you move from a hot moment to a cool moment."
          listing="https://www.crisistextline.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J_VK4nxkKXfSEIgTKE78N3VwTQRdXKFXFg&usqp=CAU"
          title="World Health Organization"
          summary="Close to 800 000 people die by suicide every year. Furthermore, for each suicide, there are more than 20 suicide attempts.
          Suicides and suicide attempts have a ripple effect that impacts on families, friends, colleagues, communities and societies.
          Suicides are preventable. Much can be done to prevent suicide at individual, community and national levels. 
          What you can do"
          listing="https://www.who.int/health-topics/suicide#tab=tab_1"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="LIFELINE"
          summary="We can all help prevent suicide. The Lifeline provides 24/7,
           free and confidential support for people in distress, prevention and 
           crisis resources for you or your loved ones, and best practices for professionals."
          listing="https://suicidepreventionlifeline.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="LIFELINE"
          summary="We can all help prevent suicide. The Lifeline provides 24/7,
           free and confidential support for people in distress, prevention and 
           crisis resources for you or your loved ones, and best practices for professionals."
          listing="https://suicidepreventionlifeline.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="LIFELINE"
          summary="We can all help prevent suicide. The Lifeline provides 24/7,
           free and confidential support for people in distress, prevention and 
           crisis resources for you or your loved ones, and best practices for professionals."
          listing="https://suicidepreventionlifeline.org"
        />
      </div>
    </div>
  );
}

export default Civilian;
