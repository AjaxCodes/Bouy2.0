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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h31ZiAYr8_-6itA3-PD9LgKMermJEcilIw&usqp=CAU"
          title="American Psychiatric Association"
          summary="As the 10th leading cause of death in the United States and the second leading cause of death
          (after accidents) for people aged 10 to 34, suicide is a serious public health problem."
          listing="https://www.psychiatry.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvK9zDhS6OulLpw0LsllErEaBO3-2Sdv94fQ&usqp=CAU"
          title="National Alliance on Mental Health"
          summary="Suicidal thoughts, much like mental health conditions, can affect anyone regardless of age, gender
           or background. In fact, suicide is often the result of an untreated mental health condition. Suicidal thoughts,
            although common, should not be considered normal and often indicate more serious issues"
          listing="https://www.nami.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZ5OdPIVZmksd_tWXQcKUYjQa2R3KCbfIxg&usqp=CAU"
          title="Public Instruction"
          summary="DPI’s Gatekeeper Training Module
          An important step in protecting all students from the dangers of suicide is the ability to recognize the warning
         signs of suicide ideation and take appropriate steps to keep a suicidal student safe. This new, interactive suicide
         prevention gatekeeper module helps schools and districts train their students and staff. The module takes approximately
         20 minutes to complete."
          listing="https://dpi.wi.gov/sspw/mental-health/youth-suicide-prevention"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZ5OdPIVZmksd_tWXQcKUYjQa2R3KCbfIxg&usqp=CAU"
          title="Public Instruction"
          summary="DPI’s Gatekeeper Training Module
          An important step in protecting all students from the dangers of suicide is the ability to recognize the warning
         signs of suicide ideation and take appropriate steps to keep a suicidal student safe. This new, interactive suicide
         prevention gatekeeper module helps schools and districts train their students and staff. The module takes approximately
         20 minutes to complete."
          listing="https://dpi.wi.gov/sspw/mental-health/youth-suicide-prevention"
        />
      
     
      </div>
    </div>
  );
}

export default Civilian;
