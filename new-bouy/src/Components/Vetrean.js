import React from "react";
import "./Vetrean.css";
import Resource from "./Resource";
import GradeIcon from "@material-ui/icons/Grade";

function Vetrean() {
  return (
    <div className="vetrean">
      <h2>
        <GradeIcon /> <GradeIcon /> <GradeIcon /> Vetreans <GradeIcon />{" "}
        <GradeIcon /> <GradeIcon />
      </h2>

      <div className="vetrean__resources">
      <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwNCz6QfQgET45bo_2jfQjYj8txDqH5DVzQ&usqp=CAU"
          title="NIMH"
          summary="Call the National Suicide Prevention Lifeline, or text the Crisis Both services are free and available 
          24 hours a day, seven days a week. The deaf and hard of hearing cancontact the Lifeline via TTY at 1-800-799-4889.
          All calls are confidential. "
          listing="https://www.nimh.nih.gov/health/topics/suicide-prevention/"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiy48Du7AdT3Fo44_FxJ4CAWp596DNpTgKyQ&usqp=CAU"
          title="Vetreans Crisis Line"
          summary="No matter what you are experiencing, there is support for getting your life back on track"
          listing="https://www.veteranscrisisline.net"
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcAAPx5fCE_kvuyRagKB5XdtBk3gsJUUvdQ&usqp=CAU"
          title="Department of Vetreans Affairs"
          summary="We are available to consult with providers who have
          questions about treating the mental health effects of COVID-19 with Veteran
          and non-Veteran patients. Contact us today."
          listing="https://www.ptsd.va.gov"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N2V5hBxje1_lQ3ZSp6uyXWTJzWnG09LGMQ&usqp=CAU"
          title="PREVENT 22"
          summary="Prevent 22 is an Illinois-based coalition comprised of military brothers and sisters out to accomplish
           one mission: lowering the number of Veteran suicides to 0 and bringing an end to the suffering our Veterans face
            when they return home. It's time we give our heroes a chance to live the lives they selflessly put on hold for our
             great country."
          listing="https://www.prevent22.org"
        />
        <Resource
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcAAPx5fCE_kvuyRagKB5XdtBk3gsJUUvdQ&usqp=CAU"
          title="VA Mental Health"
          summary="We are available to consult with providers who have
          questions about treating the mental health effects of COVID-19 with Veteran
          and non-Veteran patients. Contact us today."
          listing="https://www.mentalhealth.va.gov/suicide_prevention/"
        />
      </div>
    </div>
  );
}

export default Vetrean;
