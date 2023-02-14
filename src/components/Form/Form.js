import React from "react";

const Form = ({onAddActivity, checked, setChecked, handleAddActivity}) => {


  return (
    <>
      <form 
      className = 'my-5 font-mono'
      onSubmit={onAddActivity}>
        <h1
        className=' text-xl font-mono'
        >Add new Activity:</h1>
        <div className='py-5'>
          <label className='text-lg'>Name:</label>
          <input 
          className='border border-black rounded-2xl p-2' 
          name='name'></input>
        </div>
        <div className='py-2'>
            <label className = 'text-lg'>Good Weather Activity:</label>
            <input 
            className=" w-10"
            type='checkbox'
            name='isForGoodWeather' 
            checked={checked}
            onChange={(e) => {setChecked(e.target.checked);} }
            >

            </input>
        </div>

        <div className='flex justify-center'>
        <button 
        type="submit"
        className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-gray-600 py-2 px-4 border border-black-500 rounded"
        >Submit
        </button>
        </div>
       
      </form>
    </>
  );
};

export default Form;
