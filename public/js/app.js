
//Select the form and input text
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')


//Eventlistener for button submit 
weatherForm.addEventListener("submit", (e) => {
    //Loading message
  
    e.preventDefault()
    const address = search.value
    message1.textContent= 'Loading Forecast...'
    message2.textContent=''
    //Fetch the location and forecast from the url
    fetch('/weather?address='+encodeURIComponent(address)).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error

            }
            else {
                message1.textContent =  data.location
                    message2.textContent = 'Forecast: '+ data.forecast
                     
                

            }

        })
    })


})