const  nums = [1.2, 2, 3, 4, 5, 6, 7,8 ]
for ( let x in nums){
    if (x == 6){
        break

    }
    console.log(`${x} = ${nums[x]}`)
}
for ( let y in nums){
    if (y == 7){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}