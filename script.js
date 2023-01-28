// API - 'https://dog.ceo/api/breeds/image/random';
const randomImageDiv= document.querySelector('.randomDog_img');
const ButtonDiv= document.getElementById('randomDog_btn');


ButtonDiv.onclick=()=>{
    fetchRandomDog();
    console.log('clicked');
}
const fetchRandomDog=()=>{
    
     fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then (json=>{
            let randomDog=json.message;   
            randomImageDiv.innerHTML=`<img src="${randomDog}" alt="Random Dog Images" id="randomDog_img">`  
    }) 
    
}
