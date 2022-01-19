let hqLocation = 42;
let cityBlockInFeet = 264

function distanceFromHqInBlocks(currentLocation) {
    if (currentLocation >= hqLocation) {
        return currentLocation - hqLocation;
    } else {
        return hqLocation - currentLocation;
    }
}
function distanceFromHqInFeet(currentLocation) {
    const distance = distanceFromHqInBlocks(currentLocation);
    let distanceInFeet = distance * cityBlockInFeet;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * cityBlockInFeet;
    } else {
        return (destination - start) * cityBlockInFeet;
    }
}
function calculatesFarePrice(start, destination) {
    const fareDistance = distanceTravelledInFeet (start, destination);
    if (fareDistance < 400) {
        return 0;
    } else if (fareDistance > 400 && fareDistance <= 2000) {
        return 0.02 * (fareDistance - 400);
    } else if (fareDistance > 2000 && fareDistance <  2500) {
        return 25;
    } else return "cannot travel that far";
}

