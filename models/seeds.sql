INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Matt", "8542556363", "matt@email.com", "Country Pop", "@mattymatt", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Laura", "1234567899", "laura@email.com", "Pop", "@laurapop", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Harun", "2222222222", "harun@email.com", "Hip Hop", "@harunkalifa", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("David", "3333333333", "david@email.com", "Pop", "@davidd", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Liana", "4444444444", "liana@email.com", "Oldies", "@lianayogi", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Palace Theatre", "St. Paul", "Cheryl", "8575445562", "http://palacestpaul.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Armory", "Minneapolis", "Jerome", "6511234567", "https://armorymn.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Party City", "06/29/2019", "8:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 1, 2);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Twins Game", "07/09/2019", "6:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 1, 2);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Halloween: Boo City", "10/30/2019", "9:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 4, 1);
