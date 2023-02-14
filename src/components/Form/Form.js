import React from "react";

const Form = ({onAddActivity, checked, setChecked, handleAddActivity}) => {


  return (
    <>
      <form onSubmit={onAddActivity}>
        <h1>Add new Activity:</h1>
        <div>
          <label>Name:</label>
          <input name='name' ></input>
        </div>
        <div>
            <label>Good Weather Activity:</label>
            <input 
            type='checkbox'
            name='isForGoodWeather' 
            checked={checked}
            onChange={(e) => {setChecked(e.target.checked); console.log(e.target.checked)} }
            >

            </input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
