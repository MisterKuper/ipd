import React, { useContext } from "react";
import UnitLayout from "../UnitLayout/UnitLayout.js";
import { StoreContext } from "../../context/StoreContext.js";

function UnitDisplay() {
  const { unit_list } = useContext(StoreContext);

  return (
    <div >
      {unit_list.map((item, index) => {
        return (
          <UnitLayout
            key={item._id}
            index={index}
            title={item.title}
            image={item.image}
            lessons={item.lessons}
          />
        );
      })}
    </div>
  );
}

export default UnitDisplay;
