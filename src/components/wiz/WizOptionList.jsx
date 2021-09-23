import React, { Fragment } from "react";
import { includesIgnoreCase } from "../../utilities/helpers";

export default function WizOptionList(props) {
  let filtered;
  if (props.filterText === "") {
    filtered = props.items;
  } else {
    filtered = props.items.filter((item) =>
      includesIgnoreCase(item.name, props.filterText)
    );
  }
  const { ItemCard } = props;
  return (
    <Fragment>
      {filtered.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onSelect={() => props.onSelect(item)}
          selected={props.selected ? item.id === props.selected.id : false}
        />
      ))}
    </Fragment>
  );
}
