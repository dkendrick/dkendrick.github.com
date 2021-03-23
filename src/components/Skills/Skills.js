import { useState } from 'react';
import SkillButton from "../SkillButton";
import "./Skills.css"

const Skills = () => {
  const [isShowingFrontend, setIsShowingFrontend] = useState(false);
  const [isShowingBackend, setIsShowingBackend] = useState(false);
  const [isShowingSoft, setIsShowingSoft] = useState(false);

  const FrontEndSkills = (isShowing) => {
    if (!isShowing) {
      return <div className="skills-container" />
    }

    return (
      <div className="fade-in fade-out">
        <ul className="list-group">
          <li className="list-group-item">React</li>
          <li className="list-group-item">AngularJS</li>
          <li className="list-group-item">HTML5/CSS3</li>
        </ul>
      </div>
    );
  }

  const BackEndSkills = (isShowing) => {
    if (!isShowing) {
      return <div className="skills-container" />
    }

    return (
      <div className="fade-in fade-out">
        <ul className="list-group">
          <li className="list-group-item">C#/.NET</li>
          <li className="list-group-item">Ruby on Rails</li>
          <li className="list-group-item">SQL and NoSQL</li>
          <li className="list-group-item">AWS, Azure and Google Cloud</li>
        </ul>
      </div>
    );
  }

  const SoftSkills = (isShowing) => {
    if (!isShowing) {
      return <div className="skills-container" />
    }

    return (
      <div className="fade-in fade-out">
        <ul className="list-group">
          <li className="list-group-item">Positive Attitude</li>
          <li className="list-group-item">Good Communicator</li>
          <li className="list-group-item">Self-motivated</li>
          <li className="list-group-item">Work well in teams</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <SkillButton
          isShowingContent={isShowingFrontend} 
          onClick={() => setIsShowingFrontend(!isShowingFrontend)}
          skillName="Frontend Skills"
        />
        <div className="skills-container">
          {FrontEndSkills(isShowingFrontend)}
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <SkillButton
          isShowingContent={isShowingBackend}
          onClick={() => setIsShowingBackend(!isShowingBackend)}
          skillName="Backend Skills"
        />
        <div className="skills-container">
          {BackEndSkills(isShowingBackend)}
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <SkillButton
          isShowingContent={isShowingSoft}
          onClick={() => setIsShowingSoft(!isShowingSoft)}
          skillName="Soft Skills"
        />
        <div className="skills-container">
          {SoftSkills(isShowingSoft)}
        </div>
      </div>
    </div>
  );
};

export default Skills;