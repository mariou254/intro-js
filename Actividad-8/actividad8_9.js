/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/
let myObject = {
    myFunction: function () {
        
        Object.defineProperties(this,{
            'name':{
                value: 'propertie',
                writable: false,
                enumerable: true
            }
        })
    }
};

myObject.myFunction()

console.log(myObject);

myObject.myNewProp = "Hello world" 

console.log(myObject);