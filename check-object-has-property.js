let peopleOnProject = {
      Agnese: {
        age: 30,
        completed: true
      },
      Rian: {
        age: 28,
        completed: false
      },
      Michelle: {
        age: 37,
        completed: false
      },
      Aiden: {
        age: 40,
        completed: true
      }
    };
    
    function isEveryoneHere(peopleOnProjectObj) {
      // Only change code below this line
    if (peopleOnProjectObj.hasOwnProperty("Agnese"), peopleOnProjectObj.hasOwnProperty("Rian"), peopleOnProjectObj.hasOwnProperty("Michelle"), peopleOnProjectObj.hasOwnProperty("Aiden")) {
        return true;
      } else {
        return false;
    }
    
      // Only change code above this line
    }
    
    console.log(isEveryoneHere(peopleOnProject));