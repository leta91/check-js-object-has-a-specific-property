# Check if an Object has a Property (freeCodeCamp Challenge)

## "Basic Data Structures" --> Chapter 5
##  Part of the JavaScript Certification --> Lesson 17

### There are 2 ways to check for the existence of an object property:
1. objectName.hasOwnProperty("propertyToCheck");
2. propertyToCheck in objectName;

that, applied to this challenge, become:

1. peopleOnProjectObj.hasOwnProperty("Agnese"), peopleOnProjectObj.hasOwnProperty("Rian"), peopleOnProjectObj.hasOwnProperty("Michelle"), peopleOnProjectObj.hasOwnProperty("Aiden")

2. "Agnese" in peopleOnProjectObj && "Rian" in peopleOnProjectObj && "Michelle" in peopleOnProjectObj && "Aiden" in peopleOnProjectObj

#### Complete the Challenge:
Finish writing the function so that it returns *true* if the object passed to it contains all 4 names:
- `Agnese, Rian, Michelle` and `Aiden`
and returns *false* otherwise [^1]

[^1]: Double and single quotes are interchangeable in JavaScript


