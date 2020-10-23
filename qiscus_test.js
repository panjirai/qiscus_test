// Given the following data ...
const inventory = {
    inventory1: [
        {
            type: 'Book',
            title: 'Jurrasic Park'
        }, {
            type: 'Car',
            brand: 'Mercedes Benz'
        }, {
            type: 'Smartphone',
            brand: 'Samsung',
            operating_system: 'Android'
        }, {
            type: 'Car',
            brand: 'Ferari'
        }, {
            type: 'Book',
            title: 'Harry Potter and The Chamber of Secret'
        }
    ],
    inventory2: [
        {
            type: 'Car',
            brand: 'Tesla'
        }, {
            type: 'Smartphone',
            brand: 'Apple',
            operating_system: 'iOS'
        }, {
            type: 'Smartphone',
            brand: 'Xiaomi',
            operating_system: 'Android'
        }, {
            type: 'Book',
            title: 'Learning Data Mining with Python'
        }
    ]
}

// jawaban :
const hasil = function () {

    inventory1 = inventory.inventory1
    inventory2 = inventory.inventory2

    var comb_Inventory = inventory1.concat(inventory2);

    var filter_inventory = [];

    filter_type_product = comb_Inventory.map(function (key) {
        data = key.type
        return data
    });

    var type = [...new Set(filter_type_product)];
    i = 1
    b = 0

    filter_type = type.map(function (key1) {

        type = i + '. ' + key1
        i++

        filter_inventory = comb_Inventory.filter((key) => {
            return key.type === key1
        });

        product = filter_inventory.map(function (key) {

            if (key.type === "Book") {
                a = "1."
                b += 1
                data = a + "" + b + " " + key.title
            } else if (key.type === "Car") {
                a = "2."
                b += 1
                data = a + "" + b + " " + key.brand
            } else {
                a = "3."
                b += 1
                data = a + "" + b + " " + key.brand + "(" + key.operating_system + ")"
            }
            return data
        });

        product.unshift(type);
        data_product = product.join('\n')
        return data_product

    });

    //output show string data
    inventorys = filter_type.join('\n')
    hasils = inventorys.toString()
    return hasils

    //if you want output with array you can use this code
    //return filter_type
}
console.log(hasil())

    // the output must be:
/*
1. Book
1.1 Jurrasic Park
1.2 Harry Potter and The Chamber of Secret
1.3 Learning Data Mining with Python
2. Car
2.4 Mercedes Benz
2.5 Ferari
2.6 Tesla
3. Smartphone
3.7 Samsung (Android)
3.8 Apple (iOS)
3.9 Xiaomi (Android)
*/

    // The rules are simple
    // - There are no programming language restrictions, you can use Javascript, PHP, Java, Ruby , etc
    // - no variable declaration except the one that already defined
    // by the quiz
    // - function are treated as non variable
    // - function parameter are treated as non variable
    // - Item order are not mandatory (it can be in any order)
    //