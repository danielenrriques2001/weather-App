import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";

function App() {

  const [checked, setChecked] = useState(false);
  const [activities, setActivities] = useState([]);

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

  return(    
  <Form
  onAddActivity={onAddActivity}
  checked = {checked}
  setChecked = {setChecked}
  handleAddActivity = {handleAddActivity}
  />
  )
}

export default App;
