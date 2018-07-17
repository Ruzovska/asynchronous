
function makeWine (cb) {
    console.log("Making wine...");
    setTimeout(function (cb) {
        console.log("Wine is ready!");
        cb({
            amount: 5,
            what: "wine"
       });
    } , 7000, cb);
}

function makeBeer (cb) {
    console.log("Making beer...");
    setTimeout(function (cb) {
        console.log("Beer is ready!");
        cb({
            amount: 6,
            what: "beer"
        });
    }, 2000, cb);
}

/* TODO: Identify every package with a unique serial number. */
function packageAlcohol (packs, cb) {
    console.log("Packaging: " + packs);
    setTimeout(function () {
        console.log ("Package ready: " + packs);
        cb({
            serial: 0,
            contents: packs
        });
    }, 3000, packs);
}

function ship (delivery) {
    setTimeout (function () {
        console.log("Shipping: " + delivery);
    }, 500);
}

module.exports = {
    makeWine: makeWine,
    makeBeer: makeBeer,
    packageAlcohol: packageAlcohol,
    ship: ship
};
