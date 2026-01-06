import db from "./db.js";

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS offers");

  db.run(`
    CREATE TABLE offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      imageUrl TEXT,
      platform TEXT,
      region TEXT,
      store TEXT,
      price REAL,
      originalPrice REAL,
      discountPercent INTEGER,
      cashbackAmount REAL,
      likesCount INTEGER
    )
  `);

  db.run(`
  INSERT INTO offers
  (title, imageUrl, platform, region, store, price, originalPrice, discountPercent, cashbackAmount, likesCount)
  VALUES
  -- Split Fiction variants
  ('Split Fiction Xbox Live Key GLOBAL',
   'https://image.api.playstation.com/vulcan/ap/rnd/202411/2918/90ad70c1ef581f93454184750cba9e0ca37bc7e30a4d1f55.png',
   'Xbox Series X|S', 'GLOBAL', 'Xbox Live', 35.15, 49.99, 30, 3.87, 1039),

  ('Split Fiction PC EA App Key EUROPE',
   'https://image.api.playstation.com/vulcan/ap/rnd/202411/2918/90ad70c1ef581f93454184750cba9e0ca37bc7e30a4d1f55.png',
   'PC', 'EUROPE', 'EA App', 33.99, 49.99, 32, 3.50, 812),

  ('Split Fiction PC Steam Key GLOBAL',
   'https://image.api.playstation.com/vulcan/ap/rnd/202411/2918/90ad70c1ef581f93454184750cba9e0ca37bc7e30a4d1f55.png',
   'PC', 'GLOBAL', 'Steam', 36.49, 49.99, 27, 4.10, 654),

  -- FIFA 23 variants
  ('FIFA 23 PS5 Key EUROPE',
   'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png',
   'PS5', 'EUROPE', 'PlayStation Network', 36.25, 69.99, 48, 3.99, 406),

  ('FIFA 23 Xbox Live Key GLOBAL',
   'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png',
   'Xbox One', 'GLOBAL', 'Xbox Live', 34.80, 69.99, 50, 4.20, 589),

  ('FIFA 23 PC Origin Key GLOBAL',
   'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png',
   'PC', 'GLOBAL', 'EA App', 29.99, 69.99, 57, 4.75, 732),

  -- Red Dead Redemption 2 variants
  ('Red Dead Redemption 2 Nintendo Switch Key EUROPE',
   'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
   'Nintendo Switch', 'EUROPE', 'Nintendo eShop', 40.93, 49.99, 18, 4.50, 761),

  ('Red Dead Redemption 2 PC Steam Key GLOBAL',
   'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
   'PC', 'GLOBAL', 'Steam', 29.50, 59.99, 51, 5.10, 1248),

  ('Red Dead Redemption 2 Xbox Live Key EUROPE',
   'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
   'Xbox One', 'EUROPE', 'Xbox Live', 32.99, 59.99, 45, 4.80, 932)
`);
});

db.close();
