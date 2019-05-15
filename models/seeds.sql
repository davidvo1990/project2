USE Floe_db;

-- INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Matt", "8542556363", "matt@email.com", "Country Pop", "@mattymatt", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
-- INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Laura", "1234567899", "laura@email.com", "Pop", "@laurapop", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
-- INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Harun", "2222222222", "harun@email.com", "Hip Hop", "@harunkalifa", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
-- INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("David", "3333333333", "david@email.com", "Pop", "@davidd", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
-- INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Liana", "4444444444", "liana@email.com", "Oldies", "@lianayogi", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

-- INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Palace Theatre", "St. Paul", "Cheryl", "8575445562", "http://palacestpaul.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
-- INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Armory", "Minneapolis", "Jerome", "6511234567", "https://armorymn.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

-- INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Party City", "06/29/2019", "8:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 1, 2);
-- INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Twins Game", "07/09/2019", "6:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 1, 2);
-- INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Halloween: Boo City", "10/30/2019", "9:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 4, 1);

-- Input data--
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Bon Jovi", "555-678-2345", "jon@bonjovi.com", "Rock", "www.bonjovi.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("GB Leighton", "651-647-4464", "eric@hellobooking.com", "Rock", "www.gbleighton.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("PopRocks", "952-448-4202", "chad@timemusic.com", "Pop, Rock, Country", "www.poprocksrocks.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Kacey Musgraves", "555-651-9658", "kacey@kaceymusgraves.com", "Country", "http://www.kaceymusgraves.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Lady Gaga", "555-919-1235", "lgaga@gmail.com", "Pop", "www.ladygaga.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Imagine Dragons", "555-858-4567", "wally@imaginedragons.com", "Pop", "www.imaginedragons.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Garth Brooks", "555-789-6541", "garth@garthbrooks.com", "Country", "www.garthbrooks.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Taylor Swift", "555-879-2589", "taylor@taylorswift.com", "Pop", "www.taylorswift.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Ariana Grande", "555-654-1258", "ariana@arianagrande.com", "Pop", "www.arianagrande.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Jonah and the Whales", "651-464-7757", "jonas@jonahandthewhales.com", "Variety", "www.jonahandthewhales.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("5 Minute Major", "763-767-9646", "Kris@247events.net", "Rock Variety", "https://www.fiveminutemajorrocks.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Boogie Wonderland", "612-578-3905", "goboogiewonderland@hotmail.com", "Disco and 80's", "www.boogiewonderland.us", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO artists (name, phone, email, genre, socialMedia, createdAt, updatedAt) VALUES ("Brat Pack Radio", "651-464-7757", "info@themusicworks.com", "Dance Variety", "bratpackradio.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Target Center","600 N 1st Avenue, Minneapolis, MN 55403","info@targetcenter.com","612-673-1300", "www.targetcenter.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("The Friendly Buffalo","16722 198th Ave, Big Lake, MN 55309","Dan White","763-207-8888","freindlybuffalo.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("The Lookout Bar and Grill","8672 Pineview Ln N, Maple Grove, MN 55369","Paul","763-424-4365","lookoutbarandgrill.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Varsity Theatre","13085 SE 4th Street, Minneapolis, MN 55414","Ask for booking manager","612-217-7701","www.varsitytheatre.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Diamond Jo Casino","777 Diamond Jo Lane, Northwood, IA 50459","Boyd Gaming","877-323-5566","www.diamondjoworth.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Palace Theatre","17 W 7th Pl, St. Paul, MN 55102","Cheryl","612-338-8388","http://palacestpaul.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Armory","500 South 6th St, Minneapolis, MN 55415","Jerome","612-315-3965","https://armorymn.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Xcel Energy Center","199 W Kellogg Blvd, St. Paul, MN 55102","customersupport@mytickettracker.com","833-215-5121","www.centerstpaul.org", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Target Field","1 Twins Way, Minneapolis, MN 55403","customerservice@website.mlb.com","612-659-3400","https://www.mlb.com/twins", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Route 65 Pub & Grub","18407 Hwy 65 NE, East Bethel, MN 55011","Jill","763-414-3550","http://route65pubngrub.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Mainstreet Bar & Grill","814 Mainstreet, Hopkins, MN 55343","Billy","952-938-2400","www.mainstreetbar.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Route 47 Pub & Grub","7820 University Ave NE, Fridley, MN 55432","Sandy Wyatt","763-444-1347","route47pubngrub.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("The Boondox Bar & Grill","9100 Park Ave NE, Otsego, MN 55330","Ricky Rhodes","763-367-6790","www.boondoxbarandgrille.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Rollies Rednecks & Longnecks","940 35th Ave, Sauk Rapids, MN 56370","Rollie","320-255-0912","rolliesrednecksandlongnecks.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Wild Greg's Saloon","315 N 1st Ave, Minneapolis, MN 55401","Greg","612-354-7308","http://wildgregssaloon.com/", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Captains Lakeside Grille","27821 Bay Shore Dr NW, Isanti, MN 55040","Keith","763-444-5897","www.captainslonglake.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Northern Lights Casino","6800 Y Frontage Rd NW, Walker, MN 56484","Promotions","844-554-2646","www.northernlightscasino.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("The Wild Badger","240 S Knowles Ave, New Richmond, WI 54017","Brad Little","715-246-4867","www.wildbadgernr.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("LaPlayette Bar","16 N College Ave, Saint Joseph, MN 56367","Amanda","320-363-7747","laplayettebar.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("The Pointe","16691 South Hwy 13 West, Prior Lake, MN 55372","Trent Shaw","952-855-9856","thepointegrillandbar.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Doc's Bar and Grille","34427 Majestic Pine Drive, Sturgeon Lake, MN 55783","Doc","218-372-3040","docssportsbarandgrill.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Serum's Good Time Emporium","213 Jackson Street, Anoka, MN 55303","Greg","763-421-7522","serumsanoka.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Reggies Brewhouse","220 N Cedar Ave, Owatonna, MN 55060","Reggie","507-413-6000","https://www.facebook.com/reggies.brewhouse/?rf=194447683953507", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Shooting Star Casino","777 SE Casino Rd, Mahnomen, MN 56557","Tris Harris","800-453-7827","www.starcasino.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Captains Trackside Grille","1067 Hwy 107, Braham, MN 55006","Eddie","320-396-3965","www.captainstracksidegrille.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Gluek's","16 N 6th St, Minneapolis, MN 55403","Carol","612-338-6621","www.glueks.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");
INSERT INTO venues (name, address, contact, phone, website, createdAt, updatedAt) VALUES ("Minnesota Music Cafe","501 Payne Ave, St. Paul, MN 55130","Billy","651-776-4699","minnesotamusiccafe.com", "2019-05-07T19:40:00", "2019-05-07T19:40:00");

INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Concert", "08/15/2019", "7:30 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 1, 1);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Birthday Party", "08/25/2019", "4:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 2, 2);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Halloween Party", "10/31/2019", "9:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 3, 3);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Corporate Christmas Party", "12/22/2019", "6:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 4, 4);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Summer Jam", "7/23/2019", "5:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 5, 5);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Party City", "06/29/2019", "8:00 PM", "2019-05-07T19:40:00", "2019-05-07T19:40:00", 6, 6);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Twins Game", "07/09/2019", "6:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 7, 7);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Halloween: Boo City", "10/30/2019", "9:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 8, 8);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Concert: Shooting Star", "10/30/2020", "4:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 9, 9);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Emporium", "10/30/2021", "5:30 AM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 10, 10);
INSERT INTO gigs (name, date, time, createdAt, updatedAt, ArtistId, VenueId) VALUES ("Minnesota Jam", "10/30/2019", "3:30 PM","2019-05-07T19:40:00", "2019-05-07T19:40:00", 11, 11);





