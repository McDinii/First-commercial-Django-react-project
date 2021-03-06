const products = [
    {
        "_id": '1',
        "rating": 4.5,
        "numReviews": 12,
        "img": "images/coffe_table_eternity.png",
        "name": 'Журнальный стол "Eternity"',
        "brand": "LIGNEA",

        "category": "Журнальные столы",
        "price": 149.99,
        "description": "",
        "countInStock": 3,

    },
    {
        "_id": '2',
        "rating": 4.2,
        "numReviews": 7,
        "name": 'Журнальный стол "Minimalism"',
        "brand": "LIGNEA",
        "category": "Журнальные столы",
        "img": "img/images/table_minimalism.png",
        "price": 179,
        "description": "",
        "countInStock": 5,

    },
    {
        "_id": '3',
        "rating": 4.8,
        "numReviews": 4,
        "name": 'Журнальный стол "Lake"',
        "brand": "LIGNEA",
        "category": "Журнальные столы",
        "img": "img/images/table_lake.png",
        "price": 999,
        "description": "",
        "countInStock": 1,

    },
    {
        "_id": '4',
        "rating": 4.5,
        "numReviews": 11,
        "name": 'Журнальный стол "Circuit"',
        "brand": "LIGNEA",
        "category": "Журнальные столы",
        "img": "img/images/table_circuit.png",
        "price": 699,
        "description": "",
        "countInStock": 10,

    }, {
        "_id": '4',
        "rating": 4.8,
        "numReviews": 18,
        "name": 'Обеденный стол "Refraction"',
        "brand": "LIGNEA",
        "img": "img/images/obed_refraction.png",
        "category": "Обеденные столы",
        "price": 649,
        "description": "",
        "countInStock": 3,
    },
    {
        "_id": '5',
        "rating": 4.3,
        "numReviews": 11,
        "name": 'Обеденный стол "Wide Away"',
        "brand": "LIGNEA",
        "img": "img/images/obed_wide_away.png",
        "category": "Обеденные столы",
        "price": 599,
        "description": "",
        "countInStock": 6,
    },
    {
        "_id": '6',
        "rating": 4.4,
        "numReviews": 10,
        "name": 'Обеденный стол "Default"',
        "brand": "LIGNEA",
        "img": "img/images/obed_default.png",
        "category": "Обеденные столы",
        "price": 489,
        "description": "",
        "countInStock": 11,
    },
    {
        "_id": '7',
        "rating": 4.2,
        "numReviews": 12,
        "name": 'Обеденный стол "Wex"',
        "brand": "LIGNEA",
        "img": "img/images/obed_wex.png",
        "category": "Обеденные столы",
        "price": 679,
        "description": "",
        "countInStock": 15,
    },
    {
        "_id": '8',
        "rating": 4.9,
        "numReviews": 3,
        "name": 'Декорированный стол "Serenity"',
        "brand": "LIGNEA",
        "img": "img/images/tabledecor_serenity.png",
        "category": "Декорированные столы",
        "price": 899,
        "description": "",
        "countInStock": 5,
    },
    {
        "_id": '9',
        "rating": 4.3,
        "numReviews": 7,
        "name": 'Декорированный стол "Pit"',
        "brand": "LIGNEA",
        "img": "img/images/tabledecor_pit.png",
        "category": "Декорированные столы",
        "price": 899,
        "description": "",
        "countInStock": 3,
    },
    {
        "_id": '10',
        "rating": 4.9,
        "numReviews": 7,
        "name": 'Декорированный стол "Shards"',
        "brand": "LIGNEA",
        "img": "img/images/tabledecor_shards.png",
        "category": "Декорированные столы",
        "price": 599,
        "description": "",
        "countInStock": 14,
    },
    {
        "_id": '11',
        "rating": 4.4,
        "numReviews": 4,
        "name": 'Декорированный стол "Black"',
        "brand": "LIGNEA",
        "img": "img/images/tabledecor_black.png",
        "category": "Декорированные столы",
        "price": 799,
        "description": "",
        "countInStock": 7,
    },
    {
        "_id": '12',
        "rating": 4.6,
        "numReviews": 9,
        "name": 'Настенные часы "Ember"',
        "brand": "LIGNEA",
        "img": "img/images/decor_ember.png",
        "category": "Декор",
        "price": 39,
        "description": "",
        "countInStock": 20,
    },
    {
        "_id": '13',
        "rating": 4.5,
        "numReviews": 17,
        "name": 'Декоротивная картина "Waves"',
        "brand": "LIGNEA",
        "img": "img/goods/decor_waves.png",
        "category": "Декор",
        "price": 139,
        "description": "",
        "countInStock": 10,
    },
    {
        "_id": '14',
        "rating": 4.9,
        "numReviews": 20,
        "name": 'Настенная карта мира "Around world"',
        "brand": "LIGNEA",
        "img": "img/images/decor_map.png",
        "category": "Декор",
        "price": 99,
        "description": "",
        "countInStock": 10,
    },
    {
        "_id": '15',
        "rating": 4.3,
        "numReviews": 9,
        "name": 'Светильник "Sunlight"',
        "brand": "LIGNEA",
        "img": "img/images/decor_sunlight.png",
        "category": "Декор",
        "price": 39,
        "description": "",
        "countInStock": 17,
    },
    {
        "_id": '16',
        "rating": 4.7,
        "numReviews": 12,
        "name": 'Зеркала "Cosy"',
        "brand": "LIGNEA",
        "img": "img/goods/decor_cosy.png",
        "category": "Декор",
        "price": 89,
        "description": "",
        "countInStock": 21,
    },
    {
        "_id": '17',
        "rating": 4.8,
        "numReviews": 8,
        "name": 'Подсвечник "Ships in the night"Зеркала "Cosy"',
        "brand": "LIGNEA",
        "img": "img/images/decor_ships.png",
        "category": "Декор",
        "price": 109,
        "description": "",
        "countInStock": 12,
    },
    {
        "_id": '18',
        "rating": 4.6,
        "numReviews": 18,
        "name": 'Полка "Meld"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_meld/shelve1.png",
        "category": "Полки",
        "price": 69,
        "description": "",
        "countInStock": 2,
    },
    {
        "_id": '19',
        "rating": 4.7,
        "numReviews": 14,
        "name": 'Полка "Concentration"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_concentration.png",
        "category": "Полки",
        "price": 29,
        "description": "",
        "countInStock": 19,
    },
    {
        "_id": '20',
        "rating": 4.8,
        "numReviews": 19,
        "name": 'Полка "Aestetic"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_aestetic.png",
        "category": "Полки",
        "price": 49,
        "description": "",
        "countInStock": 9,
    },
    {
        "_id": '21',
        "rating": 4.9,
        "numReviews": 11,
        "name": 'Полка "Tidebringer"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_tidebringer.png",
        "category": "Полки",
        "price": 59,
        "description": "",
        "countInStock": 16,
    },
    {
        "_id": '22',
        "rating": 4.6,
        "numReviews": 10,
        "name": 'Полка "Pragmatic"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_pragmatic.png",
        "category": "Полки",
        "price": 79,
        "description": "",
        "countInStock": 18,
    },
    {
        "_id": '23',
        "rating": 4.4,
        "numReviews": 7,
        "name": 'Полка "Crown"',
        "brand": "LIGNEA",
        "img": "img/images/shelve_crown.png",
        "category": "Полки",
        "price": 69,
        "description": "",
        "countInStock": 8,
    },
]
export default products
