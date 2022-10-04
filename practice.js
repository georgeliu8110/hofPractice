// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var result = 0;
  _.each(numbers, function(number, index, numbers) {
    if (number % 5 === 0) {
      result++;
    }
  });
  return result;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var result = [];
  _.each(tweets, function(tweet, index, tweets) {
    if (tweet['user'] === user) {
      result.push(tweet);
    }
  });
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var found = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return found;
};



// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var result = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return result;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var result = _.filter(tweets, function(tweet) {
    return tweet['user'] === user;
  });
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var result = _.map(desserts, function(dessert) {
    if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = true;
    } else {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });
  return result;
};


// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var result = _.map(tweets, function(tweet) {
    return tweet.message;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var result = _.map(groceries, function(item) {
    item.salePrice = item.price - coupon;
    return item;
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (groceries) {
  // _.each(groceries, function(item) {
  //   item.price = Number(item['price'].slice(1));
  // });
  // console.log(groceries)
  var sum = _.reduce(groceries, function(memo, item) {
    return memo + Number(item['price'].slice(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var result = _.reduce(desserts, function(memo, dessert) {
    if (memo[dessert.type] === undefined) {
      memo['dessertType'] = 1;
      memo[dessert.type] = 1;
    } else {
      memo['dessertType'] ++;
      memo[dessert.type] ++;
    }
    return memo;
  }, {});
  return result;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var result = _.reduce(tweets, function(memo, tweet) {
    if (memo[tweet.user] === undefined) {
      memo[tweet.user] = 1;
    } else {
      memo[tweet.user] ++;
    }
    return memo;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var result = _.reduce(movies, function(memo, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      memo.push(movie.title);
    }
    return memo;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var result = _.reduce(movies, function(memo, movie) {
    var currentMovie = false;
    if (movie.runtime <= timeLimit) {
      currentMovie = true;
      memo = memo || currentMovie;
    }
    return memo;
  }, false);

  return result;
};
