// get elements from the DOM
body = document.body

let makeOrderedList = (items) => {
  // create an ordered list
  div = document.createElement('div')
  ol = document.createElement('ol')

  items.forEach((item, index) => {
    // create a DOM object for the content
    li = document.createElement('li')
    a = document.createElement('a')
    a.href = item
    content = document.createTextNode(item.toString())
    a.appendChild(content)
    li.appendChild(a)
    ol.appendChild(li)

  })

  body.appendChild(ol)

}

async function run(){
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);

  // create an ordered list
  makeOrderedList(locations)

  // timer
  setTimeout(run, 600000);
}

async function getBusLocations(){
  // // reach out to MBTA with URL for bus data for route 1
  // const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json();
  return json.data;

}






