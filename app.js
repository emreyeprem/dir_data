let app = document.getElementById("app")



let arr = [
{name: "webkit", path: "/Users/emreakurek/Desktop/webkit", createdAt: "Wed Jun 05 2019 13:14:12 GMT-0500 (Central Daylight Time)", size: 256},
{name: "components", path: "/Users/emreakurek/Desktop/components", createdAt: "Tue Jun 04 2019 11:14:12 GMT-0500 (Central Daylight Time)", size: 156},
{name: "citizenship", path: "/Users/emreakurek/Desktop/citizenship", createdAt: "Thu Jun 06 2019 15:14:12 GMT-0500 (Central Daylight Time)", size: 246},
{name: "practice", path: "/Users/emreakurek/Desktop/practice", createdAt: "Fri Jun 07 2019 14:14:12 GMT-0500 (Central Daylight Time)", size: 556}
];
console.log(str_datetime_to_datetime(arr, 'createdAt'))

function sort_by_object_key_desc(array , key){
  return array.sort(function (a, b){
    if (b[key] > a[key]) {
      return -1;
    }
    if (b[key] > a[key]) {
      return 1;
    }
    return 0;
  });
}

//console.log(sort_by_object_key_desc(arr, 'name'))


 // * convert string datetime to datetime object in each object of the array
 // * @param  {array} array of objects
 // * @param  {key} key of each object to convert with the value of string datetime
 // * @return updated array with datetime object value of given key in each object

function str_datetime_to_datetime(array, key){
  array.map((each)=>{
      each[key] = new Date(each[key]);
  });
  return array
}

//
// Array.prototype.sortBy = function(p) {
//   return this.slice(0).sort(function(a,b) {
//     return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
//   });
// }
