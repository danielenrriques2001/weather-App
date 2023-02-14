import { useState, useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ListElement from "./components/List/ListElement/ListElement";

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('activities')) ?? [];

  const [checked, setChecked] = useState(false);
  const [activities, setActivities] = useState(INITIAL);

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

  return(    

  <>
    <List>
      {
      activities.map((activity) => {
        return (
         <ListElement
         name = {activity.name}
         key = {activity.id}
         />
        )

      })


      }
    </List>
    <Form
    onAddActivity={onAddActivity}
    checked = {checked}
    setChecked = {setChecked}
    handleAddActivity = {handleAddActivity}
  />
  </>
  
  )
}

export default App;
