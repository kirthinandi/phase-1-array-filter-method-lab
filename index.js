// Code your solution here
function findMatching(driver, name) {
    return driver.filter(function(dn) {
        return dn.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
}

function fuzzyMatch(driver, name) {
    return driver.filter(function(dn) {
        return dn.toLowerCase().slice(0, 2).indexOf(name.toLowerCase()) !== -1
    })
}

function matchName(driver, string) {
    /* for (const drivers of driver) {
        if (drivers.name === string) {
            return drivers;
        }
    }
    */
    return driver.filter(word => word.name === string);
}