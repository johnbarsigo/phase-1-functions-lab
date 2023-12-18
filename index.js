function distanceFromHqInBlocks ( block ){
    let blocks =  block - 42;
    if (blocks < 0){
        blocks = blocks * -1
    }
    return blocks
}

function distanceFromHqInFeet ( block ){
    let blocks = distanceFromHqInBlocks( block )
    let feetBlock = 264
    let distanceInFeet = blocks * feetBlock
    return distanceInFeet
}

function distanceTravelledInFeet ( startBlock, endBlock ){
    let blocksDifference = startBlock - endBlock
    if (blocksDifference < 0){
        blocksDifference = blocksDifference * -1
    }
    let distanceTravelledFeet = blocksDifference * 264
    return distanceTravelledFeet
}

function calculatesFarePrice ( startBlock, endBlock ){
    let distanceTravelledFeet = distanceTravelledInFeet ( startBlock, endBlock )

    let fare
    let pricePerFoot = 0.02
    if (distanceTravelledFeet <= 400 ){
        fare = 0
        return fare
    }
    else if ( distanceTravelledFeet > 400 && distanceTravelledFeet <= 2000 ){
        fare = ( distanceTravelledFeet - 400 )* pricePerFoot
        return fare
    }
    else if ( distanceTravelledFeet >2000 && distanceTravelledFeet <= 2500 ){
        fare = 25
        return fare
    }
    else if ( distanceTravelledFeet > 2500 ){
        return 'cannot travel that far'
    }
}