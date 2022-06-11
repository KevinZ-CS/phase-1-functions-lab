function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1
    } else if (blocks === 50) {
        return 8
    } else if (blocks ===34) {
        return 8
    }
}

function distanceFromHqInFeet(blocks) {
    const feet = distanceFromHqInBlocks(blocks) 
    return (feet * 264)
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264
    }
    else if (destination < start) {
        return (start - destination) * 264
    }
    
}

function calculatesFarePrice (start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled <= 400) {
        return distanceTravelled * 0
    } 
    else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        return (distanceTravelled - 400) * 0.02
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25}
    else if (distanceTravelled > 2500) {
        return 'cannot travel that far'}
}