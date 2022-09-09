import React from "react";
import classNames from 'classnames/bind';

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
  let classNameList = "interviewers__item";
  if (props.selected) {
    classNameList += "--selected"
  }
  const classNameImg = classNames(
    'interviewers__item-image',
    { 'interviewers__item--selected-image': props.selected }
  );

  return (
    <li
      onClick={props.setInterviewer}
      className={classNameList}
    >
      <img
        className={classNameImg}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}