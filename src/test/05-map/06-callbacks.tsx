import React, { ChangeEvent, MouseEvent } from "react";

export const User = () => {
  const deletUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  };
  const saveUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  };

  const onChange = () => {
    console.log("name changedd");
  };

  const onAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("age change: " + e.currentTarget.value);
  };

  const onBlur = () => {
    console.log("lost focus");
  };

  return (
    <div>
      <textarea onChange={onChange} onBlur={onBlur}>
        Dimych
      </textarea>
      <input onChange={onAgeChange} type={"number"} />
      <button name="delete" onClick={deletUser}>
        del
      </button>
      <button name="save" onClick={saveUser}>
        save
      </button>
    </div>
  );
};
