import React from "react";
import "./ChatBlock.css"
import PropTypes from "prop-types";

// + (props.msgsCount === 0 ? "messege2" : "messege")}
const ChatBlock = props => {
  return (
    <li className={"messages" + (props.msgsCount == 0 ? " messege2 " : " messege ")} >
      <div className="Pic">
        <img src={props.imgURL} alt={props.name} />
      </div>
      <div className="info">
        <div className="basicInfoContainer">
          <div className="nameNumb">
            <h3 className="userName">{props.contactName} </h3>
            <p className="number">{props.number} </p>
          </div>

          <div className={"unread" + (props.msgsCount === 0 ? " counter " : " null ")}>
            <p className="numb">{props.msgsCount}</p>
          </div>
        </div>
        <p className="line">{props.chatDetails} </p>
        <p className="time">{props.time} </p>
      </div>
    </li>
  );
};


ChatBlock.propTypes = {
  imgURL: PropTypes.string,
  contactName: PropTypes.string,
  time: PropTypes.string,
  chatDetails: PropTypes.string,
  number: PropTypes.string,
  msgsCount: PropTypes.number
}

export default ChatBlock;
