// Current year for footer in HTML 
document.addEventListener("DOMContentLoaded", (event) => {
    const year = document.getElementById("year");
    const now = new Date();
    const current = now.getFullYear();
    year.innerText = current;
  });

//Last modification for footer in HTML   
document.addEventListener("DOMContentLoaded", (event) => {
    const lastUpdatedElement = document.getElementById("last-updated");
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastModified.toLocaleDateString('en-US', options);
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = lastModified.toLocaleTimeString('en-US', timeOptions);
    lastUpdatedElement.innerText = `${formattedDate} ${formattedTime}`;
  });
  
  //Hamburguer - Menu 
// Store the selected elements that we are going to use. 
const hamButton = document.querySelector('#menu');
const menu = document.querySelector('.navigation');

hamButton.addEventListener('click', function() {
	menu.classList.toggle('open');
	hamButton.classList.toggle('open');
});