import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = (numSpots) => {
    if (numSpots === 0) {
      return "no spots";
    }
    if (numSpots === 1) {
      return "1 spot"
    }
    return `${numSpots} spots`;
  };

  return (
    <li className={dayListItemClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)} remaining</h3>
    </li>
  );
}