const retailer = {
    numberOfPackages: 3,
    retailer_packages: [
        pack1 = {
            status: 'store',
            pickupLocation: {
                address: 'Yaba, Lagos',
                coordinates: {
                    lat: 3.371094,
                    long: 6.509544
                }
            },
            destination: {
                address: 'Lamido, Kano',
                coordinates: {
                    lat: 2215554.36672,
                    long: 21342.878
                }
            }
        },
        pack2 = {
            status: 'store',
            pickupLocation: {
                address: 'Doha, Qatar',
                coordinates: {
                    lat: 25.281639,
                    long: 51.524300
                }
            },
            destination: {
                address: 'Duhail, Qatar',
                coordinates: {
                    lat: 51.463240,
                    long: 25.360300
                }
            }
        },
        pack3 = {
            status: 'store',
            pickupLocation: {
                address: 'Baaya, Qatar',
                coordinates: {
                    lat: 25.272460,
                    long: 51.437130
                }
            },
            destination: {
                address: 'Al Souq, Qatar',
                coordinates: {
                    lat: 25.288783,
                    long: 51.53375
                }
            }
        }
    ]
}

const driver = {
    location: {
        lat: 25.35534,
        long: 51.783455
    },
    listOfPackages: []
}


function DeliverPackages(driver, retailer) {
    for (let i = 0; i < retailer.retailer_packages.length; i++) {
        if (driver.location.lat == retailer.retailer_packages[i].pickupLocation.coordinates.lat && driver.location.long == retailer.retailer_packages[i].pickupLocation.coordinates.long) {
            driver.listOfPackages.push(retailer.retailer_packages[i]);
            retailer.retailer_packages.splice(i, 1);
            retailer.numberOfPackages--;
            retailer.retailer_packages[i].status = 'enroute';
        }
    }

    for (let i = 0; i < listOfPackages.length; i++) {
        if (driver.location.lat == driver.listOfPackages[i].destination.coordinates.lat && driver.location.long == driver.listOfPackages[i].destination.coordinates.long) {
            driver.listOfPackages.splice(i, 1);
            driver.listOfPackages[i].status = 'delivered';
        }
    }
};