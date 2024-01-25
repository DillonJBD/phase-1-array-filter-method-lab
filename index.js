function findMatching(drivers, string){
    const lowerCaseString = string.toLowerCase();
    
    const matchingDrivers = drivers.filter(driver => {
        const lowerCaseDriver = driver.toLowerCase();
        return lowerCaseDriver === lowerCaseString;
    });
    return matchingDrivers;
}


function fuzzyMatch(drivers, string){
    const matchingDrivers = drivers.filter(obj => obj.startsWith(string) );

    return matchingDrivers;
}

function matchName(driver, string){
    const {name, hometown} = driver;

    const matchingDrivers = driver.filter(obj => obj.name === string);

    return matchingDrivers;
}