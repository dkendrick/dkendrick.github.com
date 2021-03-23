import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SkillButton = (props) => {
  const { isShowingContent, onClick, skillName } = props;
  const baseClasses =  "btn mb-3 w-100 d-flex justify-content-between";

  const ButtonClassName = () => {
    if (isShowingContent) {
      return baseClasses + " btn-outline-primary";
    }

    return baseClasses + " btn-primary";
  };

  const ButtonArrow = () => {
    return isShowingContent 
      ? <FontAwesomeIcon icon={faAngleDown} /> 
      : <FontAwesomeIcon icon={faAngleRight} />;

  }
  return (
    <div
      className={ButtonClassName()}
      onClick={onClick}>
          {skillName}
          <span className="ml-3"><ButtonArrow /></span>
    </div>
  );
};

export default SkillButton;