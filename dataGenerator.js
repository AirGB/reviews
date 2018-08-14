const fs = require('fs');
const faker = require('faker');

// 400 cities
let cities = ["Ad lanto", "Agoura Hills", "Alameda", "Albany", "Alhambra", "Aliso Viejo", "Alturas", "Amador City", "American Canyon", "Anaheim", "Anderson", "Angels Camp", "Antioch", "Apple Valley", "Arcadia", "Arcata", "Arroyo Grande", "Artesia", "Arvin", "Atascadero", "Atherton", "Atwater", "Auburn", "Avalon", "Avenal", "Azusa", "Bakersfield", "Baldwin Park", "Banning", "Barstow", "Beaumont", "Bell", "Bell Gardens", "Bellflower", "Belmont", "Belvedere", "Benicia", "Berkeley", "Beverly Hills", "Big Bear Lake", "Biggs", "Bishop", "Blue Lake", "Blythe", "Bradbury", "Brawley", "Brea", "Brentwood", "Brisbane", "Buellton", "Buena Park", "Burbank", "Burlingame", "Calabasas", "Calexico", "California City", "Calimesa", "Calipatria", "Calistoga", "Camarillo", "Campbell", "Canyon Lake", "Capitola", "Carlsbad", "Carmel-by-the-Sea", "Carpinteria", "Carson", "Cathedral City", "Ceres", "Cerritos", "Chico", "Chino", "Chino Hills", "Chowchilla", "Chula Vista", "Citrus Heights", "Claremont", "Clayton", "Clearlake", "Cloverdale", "Clovis", "Coachella", "Coalinga", "Colfax", "Colma", "Colton", "Colusa", "Commerce", "Compton", "Concord", "Corcoran", "Corning", "Corona", "Coronado", "Corte Madera", "Costa Mesa", "Cotati", "Covina", "Crescent City", "Cudahy", "Culver City", "Cupertino", "Cypress", "Daly City", "Dana Point", "Danville", "Davis", "Del Mar", "Del Rey Oaks", "Delano", "Desert Hot Springs", "Diamond Bar", "Dinuba", "Dixon", "Dorris", "Dos Palos", "Downey", "Duarte", "Dublin", "Dunsmuir", "East Palo Alto", "Eastvale", "El Cajon", "El Centro", "El Cerrito", "El Monte", "El Segundo", "Elk Grove", "Emeryville", "Encinitas", "Escalon", "Escondido", "Etna", "Eureka", "Exeter", "Fairfax", "Fairfield", "Farmersville", "Ferndale", "Fillmore", "Firebaugh", "Folsom", "Fontana", "Fort Bragg", "Fort Jones", "Fortuna", "Foster City", "Fountain Valley", "Fowler", "Fremont", "Fresno", "Fullerton", "Galt", "Garden Grove", "Gardena", "Gilroy", "Glendale", "Glendora", "Goleta", "Gonzales", "Grand Terrace", "Grass Valley", "Greenfield", "Gridley", "Grover Beach", "Guadalupe", "Gustine", "Half Moon Bay", "Hanford", "Hawaiian Gardens", "Hawthorne", "Hayward", "Healdsburg", "Hemet", "Hercules", "Hermosa Beach", "Hesperia", "Hidden Hills", "Highland", "Hillsborough", "Hollister", "Holtville", "Hughson", "Huntington Beach", "Huntington Park", "Huron", "Imperial", "Imperial Beach", "Indian Wells", "Indio", "Industry", "Inglewood", "Ione", "Irvine", "Irwindale", "Isleton", "Jackson", "Jurupa Valley", "Kerman", "King City", "Kingsburg", "La Cañada Flintridge", "La Habra", "La Habra Heights", "La Mesa", "La Mirada", "La Palma", "La Puente", "La Quinta", "La Verne", "Lafayette", "Laguna Beach", "Laguna Hills", "Laguna Niguel", "Laguna Woods", "Lake Elsinore", "Lake Forest", "Lakeport", "Lakewood", "Lancaster", "Larkspur", "Lathrop", "Lawndale", "Lemon Grove", "Lemoore", "Lincoln", "Lindsay", "Live Oak", "Livermore", "Livingston", "Lodi", "Loma Linda", "Lomita", "Lompoc", "Long Beach", "Loomis", "Los Alamitos", "Los Altos", "Los Altos Hills", "Los Angeles", "Los Banos", "Los Gatos", "Loyalton", "Lynwood", "Madera", "Malibu", "Mammoth Lakes", "Manhattan Beach", "Manteca", "Maricopa", "Marina", "Martinez", "Marysville", "Maywood", "McFarland", "Mendota", "Menifee", "Menlo Park", "Merced", "Mill Valley", "Millbrae", "Milpitas", "Mission Viejo", "Modesto", "Monrovia", "Montague", "Montclair", "Monte Sereno", "Montebello", "Monterey", "Monterey Park", "Moorpark", "Moraga", "Moreno Valley", "Morgan Hill", "Morro Bay", "Mount Shasta", "Mountain View", "Murrieta", "Napa", "National City", "Needles", "Nevada City", "Newark", "Newman", "Newport Beach", "Norco", "Norwalk", "Novato", "Oakdale", "Oakland", "Oakley", "Oceanside", "Ojai", "Ontario", "Orange", "Orange Cove", "Orinda", "Orland", "Oroville", "Oxnard", "Pacific Grove", "Pacifica", "Palm Desert", "Palm Springs", "Palmdale", "Palo Alto", "Palos Verdes Estates", "Paradise", "Paramount", "Parlier", "Pasadena", "Paso Robles", "Patterson", "Perris", "Petaluma", "Pico Rivera", "Piedmont", "Pinole", "Pismo Beach", "Pittsburg", "Placentia", "Placerville", "Pleasant Hill", "Pleasanton", "Plymouth", "Point Arena", "Pomona", "Port Hueneme", "Porterville", "Portola", "Portola Valley", "Poway", "Rancho Cordova", "Rancho Cucamonga", "Rancho Mirage", "Rancho Palos Verdes", "Rancho Santa Margarita", "Red Bluff", "Redding", "Redlands", "Redondo Beach", "Redwood City", "Reedley", "Rialto", "Richmond", "Ridgecrest", "Rio Dell", "Rio Vista", "Ripon", "Riverbank", "Riverside", "Rocklin", "Rohnert Park", "Rolling Hills", "Rolling Hills Estates", "Rosemead", "Roseville", "Ross", "Sacramento", "St. Helena", "Salinas", "San Anselmo", "San Bernardino", "San Bruno", "San Carlos", "San Clemente", "San Diego", "San Dimas", "San Fernando", "San Francisco", "San Gabriel", "San Jacinto", "San Joaquin", "San Jose", "San Juan Bautista", "San Juan Capistrano", "San Leandro", "San Luis Obispo", "San Marcos", "San Marino", "San Mateo", "San Pablo", "San Rafael", "San Ramon", "Sand City", "Sanger", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Fe Springs", "Santa Maria", "Santa Monica", "Santa Paula", "Santa Rosa", "Santee", "Saratoga", "Sausalito"];

// 20 adjectives
const adjectives = ["cosy", "rustic", "vintage", "traditional", "contemporary", "breath-taking", "charming", "elegant", "luxurious", "picturesque", "minimalistic", "modern", "brand-new", "classic", "cute", "magnificent", "huge", "downtown", "single family", "residential"];

// 10 nouns
const nouns =  ["historic landmark", "home", "home warranty", "homeowners insurance", "homestead", "house", "house boat", "property", "ranch", 'house'];

// 125 emotions
var emotions =  ["a blessing", "a daily joy", "a dream boat", "a dream come true", "a goddess", "a heart throb", "a loving friend", "a real-life fantasy", "accepting", "adorable", "adventurous", "affectionate", "agreeable", "alluring", "always there for me", "amazing", "an angel", "angelic", "artistic", "attentive", "attractive", "awe-inspiring", "beautiful", "beloved", "bewitching", "blessed", "brave", "breathtaking", "bright", "brilliant", "candid", "captivating", "careful", "caring", "charming", "cheeky", "cheerful", "classy", "clever", "committed", "compassionate", "complex", "confident", "considerate", "courageous", "crafty", "creative", "cuddly", "cultured", "curious", "curvy", "cute", "daring", "darling", "dazzling", "dedicated", "delicate", "delightful", "dependable", "disciplined", "down-to-earth", "dreamy", "dynamic", "easy-going", "easy-to-love", "lovable", "loved", "lovely", "loving", "loyal", "luminous", "luscious", "magical", "magnetic", "mature", "mesmerizing", "mischievous", "motivated", "musical", "my baby doll", "my beloved", "my best friend", "my confidante", "my dearest", "my dream girl", "my dream guy", "my everything", "my fantasy", "my favorite person", "my happiness", "my honey", "my joy in life", "my life partner", "my longtime crush", "my main man", "my main squeeze", "my other half", "my partner in crime", "my playmate", "my pride and joy", "my sanity", "my soul mate", "my strength", "my sunshine", "mysterious", "narcotic", "naughty", "no drama", "nurturing", "one-of-a-kind", "open-minded", "opinionated", "passionate", "patient", "perceptive", "perfect", "personable", "petite", "playful", "poetic", "positive", "precious", "pretty", "principled", "provocative"];

// console.log(cities.length)
// console.log(adjectives.length)
// console.log(nouns.length)
// console.log(emotions.length)

// range 0 to max
const randomNumGen = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// ranage from min to max
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random date range from 2000 to 2018
// Postgres date format: yyyy-mm-dd
const randomDateGen = () => {
  let year = getRandomInt(2000, 2018);
  let month = getRandomInt(1, 12);
  let day = getRandomInt(1, 28);

  return `${year}-${month}-${day}`;
}

// writing file for listings table
const listings = () => {
  console.log('running listings');
  // create stream appending file
  let out = fs.createWriteStream('./listings.csv', {flag: 'a'})
  var count = 1;

  for (var i = 0; i < emotions.length; i++) {
    for (var j = 0; j < adjectives.length; j++) {
      for (var k = 0; k < nouns.length; k++) {
        for (var l = 0; l < cities.length; l++) {
          const sequence = count + ',' + emotions[i] + " " + adjectives[j] + " " + nouns[k] + " in " + cities[l] + "\n";
          out.write(sequence, 'utf-8');
          count++;
          if (count === 1000000) {
            console.log('1m');
          }
          if (count === 2000000) {
            console.log('2m');
          }
          if (count === 3000000) {
            console.log('3m')
          }
          if (count === 5000000) {
            console.log('5m')
          }
          if (count === 7000000) {
            console.log('7m')
          }
          if (count === 8000000) {
            console.log('8m')
          }
          if (count === 9000000) {
            console.log('9m')
          }
          if (count > 7000000) {
            console.log(count)
          }
        }
      }
    }
  }
};

// listings();

// fs.writeFile('listingNames.csv',"listing name \n", (err)=> {
//   if (err) {
//     console.log(err);
//   }
// });
//
// for (var i = 0; i < emotions.length; i++) {
//   for (var j = 0; j < adjectives.length; j++) {
//     for (var k = 0; k < nouns.length; k++) {
//       for (var l = 0; l < cities.length; l++) {
//         const sequence = emotions[i] + " " + adjectives[j] + " " + nouns[k] + " in " + cities[l] + "\n";
//         fs.appendFileSync('listingNames.csv', sequence, (err)=> {
//           if (err) {
//             console.log(err);
//           }
//         });
//       }
//     }
//   }
// }

const reviews = () => {
  console.log('generating reviews');
  const out = fs.createWriteStream('./reviews.csv', { flag: 'a' }); // flag: 'a' = append

  for (let i = 1; i <= 10000000; i += 1) {
    const listingId = randomNumGen(10000000) + 1;
    const userId = randomNumGen(10000000) + 1;
    const accuracy = randomNumGen(5);
    const communication = randomNumGen(5);
    const cleanliness = randomNumGen(5);
    const location = randomNumGen(5);
    const checkin = randomNumGen(5);
    const value = randomNumGen(5);
    const date = randomDateGen();
    const content = faker.lorem.sentence();
    const isReported = getRandomInt(0, 1);
    const sequence = `${i},${listingId},${userId},${accuracy},${communication},${cleanliness},${location},${checkin},${value},${date},${content},${isReported}\n`;

    out.write(sequence, 'utf-8');

    if (i === 1000000) {
      console.log('1m');
    }

    if (i === 2000000) {
      console.log('2m');
    }

    if (i === 3000000) {
      console.log('3m');
    }

    if (i === 4000000) {
      console.log('4m');
    }

    if (i === 5000000) {
      console.log('5m');
    }

    if (i === 6000000) {
      console.log('6m');
    }

    if (i === 7000000) {
      console.log('7m');
    }

    if (i === 8000000) {
      console.log('8m');
    }

    if (i === 9000000) {
      console.log('9m');
    }
  }
};

// reviews();


const users = () => {
  const out = fs.createWriteStream('./users.csv', { flag: 'a' });

  console.log('generating users');

  for (let i = 1; i <= 10000000; i += 1) {
    const name = faker.name.firstName();
    const photo = faker.image.avatar();
    const sequence = `${i},${name},${photo}\n`
    out.write(sequence, 'utf-8');
  }
};

users();
