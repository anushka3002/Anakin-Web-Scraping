var final
const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Ratan_Tata');
  await page.screenshot({path: 'wiki.png'});
//   await browser.waitForTarget(()=>false)

  let result=await page.evaluate(()=>{
    let headingFromWeb = document.querySelectorAll(".mw-headline")
    const headingList=[...headingFromWeb]
    return headingList.map(h=>h.innerText)
  })
  final=result
  console.log(final)
  
  // document.querySelector("#name").append(result)

  await browser.close();
})();

console.log("hello"+final+"final")


// function getLatLong(){
//   const data = JSON.parse(document.getElementById("__NEXT_DATA__").textContent)
//   let restaurantList = data.props.initialReduxState.pageRestaurantsV2.entities.restaurantList
//   for (let key in restaurantList){
//      return ({latitude: restaurantList[key].latitude,
//       longitude: restaurantList[key].longitude})
//   }
// }
// console.log(getLatLong())