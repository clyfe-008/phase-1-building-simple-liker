// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.querySelectorAll('.like-glyph');

// Function to simulate a server request
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        resolve('Request successful');
      } else {
        reject('Request failed');
      }
    }, 300);
  });
}

// Function to handle the heart button click
function handleHeartClick(event) {
  const heartButton = event.target;
  mimicServerCall()
    .then((response) => {
      // Server request successful
      heartButton.classList.toggle('activated-heart');
      if (heartButton.innerHTML === '♡') {
        heartButton.innerHTML = '♥';
      } else {
        heartButton.innerHTML = '♡';
      }
    })
    .catch((error) => {
      // Server request failed
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listener to each heart button
heartButtons.forEach((button) => {
  button.addEventListener('click', handleHeartClick);
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
