// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.



function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        let spaces = ' '.repeat(nFloors - 1 - i);
        let stars = '*'.repeat(2 * i + 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}