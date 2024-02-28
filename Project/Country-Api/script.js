

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountry(country)
{
  const request=new XMLHttpRequest();
  request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
  request.send();
  
  request.addEventListener('load',function(){
  const data=JSON.parse(this.responseText)[1]||JSON.parse(this.responseText)[0];
  console.log(data);
  let languages=''
  for(lan in data.languages)
  {
  languages+=data.languages[lan]+' ';
  
  }
  console.log(languages)
  const card=` <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${Math.floor((data.population)/1000000)}M</p>
    <p class="country__row"><span>🗣️</span> ${languages}</p>
    <p class="country__row"><span>💰</span>CUR</p>
  </div>
  </article>
  `
  countriesContainer.insertAdjacentHTML('beforeend',card);

  })


}  
getCountry('russia')
