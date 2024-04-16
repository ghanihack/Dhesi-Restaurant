function getCodeBoxElement(index) {
  return document.getElementById("five" + index);
}

function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  const maxLength = 1; // Set the maximum length of each input box to 1
  const currentElement = getCodeBoxElement(index);

  // Check if the input box is filled
  if (currentElement.value.length === maxLength) {
    if (index !== 5) {
      // Move focus to the next input box
      getCodeBoxElement(index + 1).focus();
    } else {
      // Last input box is filled, so blur it
      currentElement.blur();

      // Perform action after all OTP digits are entered (e.g., submit code)
      console.log("Submit code");
    }
  }

  // Handle backspace key
  if (eventCode === 8 && index !== 1) {
    // Move focus to the previous input box when backspace is pressed
    getCodeBoxElement(index - 1).focus();
  }
}

function onFocusEvent(index) {
  for (let item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      // Focus on the first empty input box encountered
      currentElement.focus();
      break;
    }
  }
}
