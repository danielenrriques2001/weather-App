import React from "react";

const Form = ({onAddActivity}) => {
  return (
    <>
      <form>
        <h1>Add new Activity:</h1>
        <div>
          <label>Name:</label>
          <input name='nameInput' ></input>
        </div>
        <div>
            <label>Good Weather Activity:</label>
            <input type='checkbox'name='nameCheckbox'></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
