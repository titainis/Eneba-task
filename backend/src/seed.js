import db from "./db.js";

db.run(`
  INSERT INTO offers
  (title, imageUrl, platform, region, store, price, originalPrice, discountPercent, cashbackAmount, likesCount)
  VALUES
  ('Split Fiction', 'https://image.api.playstation.com/vulcan/ap/rnd/202411/2918/90ad70c1ef581f93454184750cba9e0ca37bc7e30a4d1f55.png', 'Xbox Series X|S', 'GLOBAL', 'Xbox Live', 35.15, 49.99, 30, 3.87, 1039),
  ('Fifa 23', 'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png', 'PS5', 'EUROPE', 'Steam', 36.25, 0, 0, 3.99, 406),
  ('Red Dead Redemption 2', 'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png', 'Nintendo Switch 2', 'EUROPE', 'Nintendo', 40.93, 49.99, 18, 4.50, 761)
`);
