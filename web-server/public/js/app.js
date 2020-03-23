
//Select the form and input text
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

//Eventlistener for button submit 
weatherForm.addEventListener("submit", (e) => {

    e.preventDefault()
    const address = search.value
    //Fetch the location and forecast from the url
    fetch('http://localhost:3000/weather?address='+encodeURIComponent(address)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)

            }
            else {
                console.log('location: ' +data.location)
                    console.log('forecast: '+ data.forecast)
                     
                

            }

        })
    })


})