import React from "react";
import "./Resources.css";
import Resource from "./Resource";
import SecurityIcon from "@material-ui/icons/Security";
import PersonIcon from "@material-ui/icons/Person";
import GradeIcon from "@material-ui/icons/Grade";

function Resources() {
  return (
    <div className="resources__recomended">
      <div className="resources__header">
        <p>
          Welcome to BOUY!!
          <br />
          <br />
          We are a Suicide Prevention site aimed at getting Resources to people
          in Real-Time. Believe it or not but we have all been exactly where you
          are right now, you are not alone, and don't have to go through this by
          yourself. below you will see a quick list of resources laid out by
          category for you, if that's not your bag or fast enough, please jump
          in the chat and talk to someone right now, we have Peer Advisors that
          would be excited to talk to you and help you get through whatever it
          is that has brought you here today.
          <br />
          <br />
          MISSION: Our goal is to get the number of daily Suicides to 0. As bold
          as that sounds, we strive every single day to help people just like
          yourself with a wide range of problems. because we know most of the
          time the feeling of not being enough, just wanting a break, or Life
          just being too much to handle is a very real feeling. We are BOUY, and
          you don't have to drown in the Sea of life.
          <br />
          <br />
          If you don't need help right now, but would like to support our cause
          you can take a spin in the gift shop. Where All merchandise sales
          proceeds are used to help us run this site and the rest is donated
          quarterly to charities, so that nobody has to spend their last minutes
          on this planet feeling alone or helpless. or jump in the chat and help
          some people who just need a friend, Zero data is kept on our end to
          ensure that your ananymoty is taken care of.
        </p>
      </div>
      <h2>
        <PersonIcon /> <PersonIcon /> <PersonIcon /> Civilians <PersonIcon />{" "}
        <PersonIcon /> <PersonIcon />
      </h2>

      <div className="resources">
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
         prevention gatekeeper module helps schools and districts train their students and staff. "
          listing="https://dpi.wi.gov/sspw/mental-health/youth-suicide-prevention"
        />
      </div>

      <h2>
        <GradeIcon /> <GradeIcon /> <GradeIcon /> Vetreans <GradeIcon />{" "}
        <GradeIcon /> <GradeIcon />
      </h2>

      <div className="resources__vet">
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
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMN4f1N6WVa8Kgg4YUUdkW8cx2_XCdRUoC6w&usqp=CAU"
          title="The Columbia Lighthouse Project"
          summary="Suicide Prevention for First Responders Resources”"
          listing="https://firstwatch.net/suicide-prevention-for-first-responders-resources/"
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

      <h2>
        <SecurityIcon /> <SecurityIcon /> <SecurityIcon /> First Responders
        <SecurityIcon /> <SecurityIcon /> <SecurityIcon />
      </h2>

      <div className="resources">
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

export default Resources;
