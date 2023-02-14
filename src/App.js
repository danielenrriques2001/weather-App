import { useState } from "react";
import Form from "./components/Form/Form";

function App() {

  const [checked, setChecked] = useState(false);


  function onAddActivity(e) {

    e.preventDefault();

    const form = new FormData(e.target);

    const simple_form = Object.fromEntries(form);

    simple_form.isChecked = checked;

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
  />
  )
}

export default App;
