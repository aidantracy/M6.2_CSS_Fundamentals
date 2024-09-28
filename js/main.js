/**
 * This function returns the text of what was selected when the button is pressed. 
 */

export const display = () => {
    const options = document.getElementsByName('option');

    let selectedValue = 'Nothing was selected'; // default if nothing was selected
  
    // checks for a selected radio button then updates the value. 
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selectedValue = options[i].value;
      }
    }

    alert(selectedValue)
  }
  

  