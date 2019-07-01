/* data route */
var url = "http://127.0.0.1:5000/tabularData";
console.log(url);
function buildFrappe() {
  d3.json(url).then(function(response) {
    console.log(response);
    var options = {
      columns: response.map(data => data.columns),
      data: response.map(data => data.results)
      //name: "Bigfoot Sightings",
      //x: response.map(data => data.year),
      //y: response.map(data => data.sightings),
      //line: {color: "#17BECF"}
    };

var data = [options];
var container = document.querySelector('#datatable');
var datatable = new DataTable(container, data);
  });
}
  
buildFrappe();

// var datatable = new DataTable('#datatable', {
//     columns: ['Name', 'Position', 'Salary'],
//     data: [
//         ['Faris', 'Software Developer', '$1200'],
//     ['Manas', 'Software Engineer', '$1400'],
//     ]
// })




// NYC lat/long = 40.730610, -73.935242

// var HeatMap = L.map("h_map", {
//     center: [40.735670, -73.868934],
//     zoom: 12
//   });
  
//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   }).addTo(HeatMap);
  
//   var url = "http://127.0.0.1:5000/heatData"; 
  
//   d3.json(url, function(response) {
//     console.log("-- Next line is the json data")
//     console.log(response);
  
//     var heatArray = [];
//     console.log("-- Next line is the heatArray list.   Should be empty")
//     console.log(heatArray)
  
//     for (var i = 0; i < response.length; i++) {
//       var locations = response[i];
      
//       // console.log(locations)
  
//       if (locations) {
//         heatArray.push([locations.lat, locations.long]);
//       }
//     }
  
//     var heat = L.heatLayer(heatArray, {
//       radius: 20,
//       blur: 35
//     }).addTo(HeatMap);
  
//     //Add a legend
//     var legend = L.control({position: 'topright'});  
//     legend.onAdd = function (map) {
  
//     var div = L.DomUtil.create('div', 'heatLegend'),
//         labels = ['Restaurant Citations <br> Last 3 Months'];
  
//         labels.push
//           div.innerHTML = labels;
//           return div;
//           };
//     legend.addTo(HeatMap);
  
//   });