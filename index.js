// Code your solution in this file!

// Returns distance in blocks
    function distanceFromHqInBlocks (pickup) {
        if (pickup > 42) {
            return pickup - 42;
        } else {return 42 - pickup}
    }

// Returns distance in feet
    function distanceFromHqInFeet (pickup) {
        return distanceFromHqInBlocks (pickup) * 264;
    }

// Returns distance travelled in feet
    function distanceTravelledInFeet (beginning, end) {
        if(beginning > end) {
            return (beginning - end) * 264;
        } else {return (end - beginning) * 264}
    }
    

// Returns fee for distance travelled in feet
    function calculatesFarePrice (beginning, end) {
        if (distanceTravelledInFeet (beginning, end) <= 400) {
            return 0;
        } 
        else if ((distanceTravelledInFeet (beginning, end) > 400) && (distanceTravelledInFeet (beginning, end) <= 2000)) {
            return ((distanceTravelledInFeet (beginning, end) - 400) * .02);
        } 
        else if ((distanceTravelledInFeet (beginning, end) > 2000) && (distanceTravelledInFeet (beginning, end) <= 2500)) {
            return 25;
        } 
        else { 
            return "cannot travel that far";
        }
       }

