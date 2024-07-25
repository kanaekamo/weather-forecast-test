document.getElementById('get-weather').addEventListener('click',()=>{
  let city = document.getElementById('city-select').value;
  if(city == ""){
    alert("都市を選択してください。");
  }else{
    let url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${city}.json`;
      fetch(url)
      .then(response =>{
        return response.json();
      })
      .then(weather=>{
        console.log(weather);
        let areas = weather[0].timeSeries[0].areas[0];
        document.getElementById('publishingOffice').lastElementChild.textContent = weather[0].publishingOffice;
        document.getElementById('reportDatetime').lastElementChild.textContent = weather[0].reportDatetime;
        document.getElementById('targetArea').lastElementChild.textContent = areas.area.name;
        document.getElementById('todayHighTemperature').lastElementChild.textContent = weather[1].tempAverage.areas[0].max + "℃";
        document.getElementById('todayLowTemperature').lastElementChild.textContent = weather[1].tempAverage.areas[0].min + "℃";
        document.getElementById('today').lastElementChild.textContent = areas.weathers[0];
        document.getElementById('tomorrow').lastElementChild.textContent = areas.weathers[1];
        document.getElementById('dayAfterTomorrow').lastElementChild.textContent = areas.weathers[2];
      })
      .catch(error =>{
        alert(error.message);
      });
  }
})