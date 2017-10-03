//JSON object
{
  // Key            Value
   "key_string"   : "XYZ",					 //string
   "key_num"      :     1,					 //number
   "Key_bool"     :  true,					 //boolean
   "key_null"     :  null,					 //null
   "key_arr"      : ["ABC",1,true,false,null]//array
}

//In Javascript
//Key can be written without double quotes
var msg ={
    // Key          Value
    key_string    : "XYZ",					 //string
    key_num       :     1,					 //number
    Key_bool      :  true,					 //boolean
    key_null      :  null,					 //null
    key_arr       : ["ABC",1,true,false,null]//array
};

//nested json object
var a_msg = {
        name:"John",
         age:30,
        cars: {
                 car1:"Ford",
                 car2:"BMW",
                 car3:"Fiat"
              }
 };
//You can access a JavaScript object
var x = object_name.key_name;
//or
var y = object_name["key_name"];

//or for array
var z = object_name.key_name[index_number];    //index starting from 0 

//for nested object
var a = object_name.sub_object_name.key_name;
var b = object_name.sub_object_name["key_name"];

//You can Modify a JavaScript object
object_name.key_name = "XYZ";
object_name["key_name"] ="XYZ";
object_name.key_name[index_number] =2; //assign value at index 
//for nested object
object_name.sub_object_name.key_name = 2; 
object_name.sub_object_name["key_name"] =1; 

//Examples

var x = msg.key_string = "ABC";   
var y = msg["key_string"] = "ABC";
var z = msg.key_arr[3]=false;
//for nested object
var a = a_msg.cars.car1="Honda";
var b = a_msg.cars["car3"]="Honda";

//inserting javascript variable to JSON object
var carName = "Hyundai"
a_msg.cars.car1 = "the car is"+carName;          //return "the car is Hyundai"
a_msg.cars.car2 = carName+"is the car";          //return "Hyundai is the car"
a_msg.cars.car3 = "the"+carName+"car is good";   //returb "the Hyundai car is good"

//print in console
console.log(var_name);                   //replace var_name with variable name
console.log(JSON.stringify(object_name));//replace object_name with object name

//Example
console.log(x);  
console.log("hello"+name);
console.log(a_msg.name);
console.log(JSON.stringify(msg)); 