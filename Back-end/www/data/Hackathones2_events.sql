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
  `description` longtext,
  `image` mediumtext,
  `email` varchar(45) NOT NULL,
  `prize` varchar(45) DEFAULT NULL,
  `web` varchar(45) DEFAULT NULL,
  `banner` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('1','DeCode Congestion','2020/09/03','Calle inventada','Lugo','España','','https://www.hackworks.com/uploads/hackathon/decode-congestion/decode-congestion-photo-en.jpg?1568216995?v1.18b','hackathon@vancouver.ca','1500',NULL,'https://www.hackworks.com/uploads/hackathon/decode-congestion/decode-congestion-banner-en.jpg?1568216995?v1.18b'),('2','Oxford Global Hackathon - Boston','2019/09/15','Calle inventada','coruña','España','','https://www.hackworks.com/uploads/hackathon/OxfordHackathonBoston/OxfordHackathonBoston-photo-en.jpg?1563486013?1563820890?v1.18b','oxfordhackathon@hackworks.com','5000','oxfordhackathon.com','https://www.hackworks.com/uploads/hackathon/OxfordHackathonBoston/OxfordHackathonBoston-banner-en.jpg?1563820890?v1.18b'),('3','Oxford Global Hackathon - Toronto','2019/01/10','Calle inventada','A Coruña','España','','https://www.hackworks.com/uploads/hackathon/OxfordHackathonToronto/OxfordHackathonToronto-photo-en.jpg?1563485537?1563485604?1563820791?v1.18b','oxfordhackathon@hackworks.com','1000','oxfordhackathon.com','https://www.hackworks.com/uploads/hackathon/OxfordHackathonToronto/OxfordHackathonToronto-banner-en.jpg?1563820791?v1.18b'),('4','AquaHacking Challenge 2019','2019/03/10','Calle inventada','A Coruña','España',NULL,'https://www.hackworks.com/uploads/hackathon/aquahackingchallenge2019/aquahackingchallenge2019-photo-en.jpg?1549404222?1549404263?1550004706?v1.18b','Carolina.restrepo@obwb.ca','500','aquahacking.com','https://www.hackworks.com/uploads/hackathon/AquaHacking-2020-BC-challenge/AquaHacking-2020-BC-challenge-banner-en.jpg?1573230806?1573231127?v1.18b'),('5','AquaHacking Lake Winnipeg','2020/01/16','Calle inventada','Pontevedra','España','','https://www.hackworks.com/uploads/hackathon/AquaHacking-LakeWPG-2020/AquaHacking-LakeWPG-2020-photo-en.jpg?1575905103?1575905105?v1.18b','cvanreenen@iisd.ca','2000','aquahacking.com','https://www.hackworks.com/uploads/hackathon/AquaHacking-LakeWPG-2020/AquaHacking-LakeWPG-2020-banner-en.jpg?1575905103?1575905105?v1.18b'),('6','METEOHACK','2020/07/10','Calle inventada','Orense','España','','https://www.hackworks.com/uploads/hackathon/meteohack/meteohack-photo-en.jpg?1560267088?v1.18b','meteohack@hackworks.com','Free',NULL,'https://www.hackworks.com/uploads/hackathon/meteohack/meteohack-banner-en.jpg?1560267088?v1.18b'),('7','Prueba2','2020-02-02','null','null','null','null','https://via.placeholder.com/300','evento2@htomail.com','free','null',NULL);
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

-- Dump completed on 2020-01-16 21:02:27
