-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Hackathones2
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` varchar(100) NOT NULL,
  `title` varchar(45) NOT NULL,
  `start_date` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `image` mediumtext,
  `email` varchar(45) NOT NULL,
  `prize` varchar(45) DEFAULT NULL,
  `web` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('1','METEOHACK','01/05/2020',NULL,'Lugo','España','<blockquote><p>kjrlkyjlkyerye</p></blockquote><ol><li>elrtkeñrtkertert</li><li>erte</li><li>rter</li><li>te</li></ol><p>rt</p><p>er</p><blockquote><figure class=\"table\"><table><tbody><tr><td>hg</td><td>jhg</td><td>jhg</td><td>hj</td></tr><tr><td>gjh</td><td>gj</td><td>hg</td><td>j</td></tr><tr><td colspan=\"4\">hgjjdkfshdfkjsdhkfsfd</td></tr></tbody></table></figure><h4>te</h4></blockquote><h4>rt</h4><h4><a href=\"jjkldfjgkdfg.com\">jjkldfjgkdfg.com</a>ert</h4><ul><li>This is some sample content.</li></ul>','https://www.hackworks.com/uploads/hackathon/meteohack/meteohack-photo-en.jpg?1560267088?v1.18b','meteohack@hackworks.com','2000','meteohack.com'),('2','AquaHacking BC','02/09/2020','Kick-Off - October 29 ','Lugo','España','null','https://www.hackworks.com/uploads/hackathon/AquaHacking-2020-BC-challenge/AquaHacking-2020-BC-challenge-photo-en.jpg?1573231127?v1.18b','Carolina.restrepo@obwb.ca','5000','aquahacking.com'),('3','Oxford Global Hackathon - Toronto','15/07/2020',NULL,'A Coruña','España','<div class=\"hackathon-description\">\n				<p>Oxford Properties is a global real estate owner, investor, developer and property management company. As a group passionate about innovation in construction, architecture and building design, we are inviting 400 of the best minds to gather in 4 cities around the world to develop solutions for some of the most pressing challenges in the sector today.</p>\n<p>Join us in London, UK for an unforgettable innovation experience!</p>\n<p><strong>Agenda</strong></p>\n<p><strong>Day 1<br>8:00AM</strong>&nbsp; &nbsp; &nbsp;Registration &amp; Breakfast<br><strong>9:00AM</strong>&nbsp; &nbsp; &nbsp;Kickoff &amp; Opening Remarks<br><strong>10:00AM</strong>&nbsp; &nbsp;Hacking Begins<br><strong>12:00PM</strong>&nbsp; &nbsp;Lunch<br><strong>1:00PM</strong>&nbsp; &nbsp; &nbsp;Hacking Continues<br><strong>6:00PM&nbsp; &nbsp; &nbsp;</strong>Dinner<br><strong>7:00PM</strong>&nbsp; &nbsp; &nbsp;Hacking Continues<br><strong>12:00AM</strong>&nbsp; &nbsp;Venue Closes</p>\n<p><strong>Day 2</strong><br><strong>7:00AM</strong>&nbsp; &nbsp; &nbsp;Venue Opens &amp; Breakfast<br><strong>8:00AM</strong>&nbsp; &nbsp; &nbsp;Hacking<br><strong>12:00PM</strong>&nbsp; &nbsp; Lunch<br><strong>1:00PM</strong>&nbsp; &nbsp; &nbsp; Expo<br><strong>3:00PM&nbsp; &nbsp; &nbsp;&nbsp;</strong>Top 5 Pitches<br><strong>4:30PM</strong>&nbsp; &nbsp; &nbsp;Awards &amp; Celebrations<br><strong>5:00PM</strong>&nbsp; &nbsp; &nbsp;Event End</p>\n			</div>','https://www.hackworks.com/uploads/hackathon/OxfordHackathonToronto/OxfordHackathonToronto-photo-en.jpg?1563485537?1563485604?1563820791?v1.18b','oxfordhackathon@hackworks.com','1000','oxfordhackathon.com'),('4','AquaHacking Challenge 2019','18/09/2020',NULL,'A Coruña','España',NULL,'https://www.hackworks.com/uploads/hackathon/aquahackingchallenge2019/aquahackingchallenge2019-photo-en.jpg?1549404222?1549404263?1550004706?v1.18b','Carolina.restrepo@obwb.ca','500','aquahacking.com'),('5','Prueba','20/10/2020','','','','','https://via.placeholder.com/300','prueba@gmail.com','3000','preuba.com');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-07 18:52:56
