import { useState, useEffect } from "react";
import { uid } from "uid";


import Form from "./components/Form/Form";
import List from "./components/List/List";
import Heading from "./components/Heading/Heading";

import useFetch from "./components/utils/useFetch/useFetch";


function App() {

  const INITIAL = JSON.parse(localStorage.getItem('activities')) ?? [];

  const [checked, setChecked] = useState(false);
  const [activities, setActivities] = useState(INITIAL);

  const finalWeather = useFetch('https://example-apis.vercel.app/api/weather');
  const weather = finalWeather.isGoodWeather;
  

  const filteredElements = activities.filter(entry => entry.isChecked === weather)

  useEffect(() => {
   
      localStorage.setItem('activities', JSON.stringify(activities))
  }, [activities])
  

  function handleAddActivity (newActivity) {
    setActivities([...activities, newActivity])
  }
  
  function onAddActivity(e) {

    e.preventDefault();

    const form = new FormData(e.target);

    const simple_form = Object.fromEntries(form);

    simple_form.isChecked = checked;

    simple_form.id = uid(8);
    handleAddActivity(simple_form);

    const formElement = e.target;
    formElement.reset();

    const nameInput =  e.target[0];
    nameInput.focus();    

  }

  function handleDeleteActivity (id){
    const deleteActivities = activities.filter((p) => {
      return p.id !== id
    })
    
    setActivities(deleteActivities);

  }

  return(    

  <div className="flex flex-col justify-center items-center my-5">
    <Heading
    condition={finalWeather.condition}
    temperature={finalWeather.temperature}
    />
    
    <List
      filteredElements={filteredElements}
      weather= {weather}
      onDeleteActivity ={handleDeleteActivity}
      />      
 
    <Form
      onAddActivity={onAddActivity}
      checked = {checked}
      setChecked = {setChecked}
      handleAddActivity = {handleAddActivity}
    />
  </div>
  
  )
}

export default App;
