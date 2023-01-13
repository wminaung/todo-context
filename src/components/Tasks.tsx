import React, { memo } from "react";

import { CheckUnCheck } from "./CheckUnCheck";
import { Task } from "./Task";

export const Tasks = () => {
  return (
    <div className=" w-11/12 relative z-20  rounded-t-lg overflow-hidden  mx-auto">
      <Task>
        <CheckUnCheck check={true} readonly={false} />
      </Task>
      <Task>
        <CheckUnCheck check={true} readonly={false} />
      </Task>
      <Task>
        <CheckUnCheck check={true} readonly={false} />
      </Task>
    </div>
  );
};
