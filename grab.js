// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({headless:false});
//   const page = await browser.newPage();
//   await page.goto('https://food.grab.com/sg/en/restaurants');
//   await page.screenshot({path: 'wiki.png'});
//   await browser.waitForTarget(()=>false)

//   const result=await page.evaluate(()=>{
//     const data = JSON.parse(document.getElementById("__NEXT_DATA__").textContent)
//       let restaurantList = data.props.initialReduxState.pageRestaurantsV2.entities.restaurantList
//       for (let key in restaurantList){
//          return ({latitude: restaurantList[key].latitude,
//           longitude: restaurantList[key].longitude})
//       }
//   })

//   console.log(result)

//   await browser.close();
// })();


function getData(){
  const data = JSON.parse(document.getElementById("__NEXT_DATA__").textContent)
  console.log(data+"data")
      let restaurantList = data.props.initialReduxState.pageRestaurantsV2.entities.restaurantList
      for (let key in restaurantList){
         return ({latitude: restaurantList[key].latitude,
          longitude: restaurantList[key].longitude})
      }
}
console.log(getData())
