-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: Hackathones2
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
-- Table structure for table `ranking`
--

DROP TABLE IF EXISTS `ranking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ranking` (
  `user_iduser` varchar(100) NOT NULL,
  `events_idevents` varchar(100) NOT NULL,
  `skills` varchar(45) NOT NULL,
  `puntuation` int(11) NOT NULL,
  PRIMARY KEY (`user_iduser`,`events_idevents`),
  KEY `fk_user_has_events_events3_idx` (`events_idevents`),
  KEY `fk_user_has_events_user2_idx` (`user_iduser`),
  CONSTRAINT `fk_user_has_events_events3` FOREIGN KEY (`events_idevents`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_events_user2` FOREIGN KEY (`user_iduser`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranking`
--

LOCK TABLES `ranking` WRITE;
/*!40000 ALTER TABLE `ranking` DISABLE KEYS */;
INSERT INTO `ranking` VALUES ('1','1','PHP',20),('1','3','JAVASCRIPT',50),('1','4','PHP',80),('1','5','PYTHON',100),('2','2','JAVASCRIPT',80),('2','4','ANGULAR',50),('2','5','PHP',50),('2','6','NODEJS',60),('3','1','NODEJS',100),('3','2','JAVASCRIPT',100),('3','3','PYTHON',40),('3','5','JAVA',70),('4','1','REACT',50),('4','3','PYTHON',90),('4','4','PHP',40),('5','1','REACT',40),('5','3','PYTHON',70),('5','7','JAVASCRIPT',55),('6','1','REACT',80),('6','2','NODEJS',30),('6','4','NODEJS',30),('6','7','JAVASCRIPT',40),('7','10','CSS3',100),('7','2','NODEJS',80),('7','7','JAVASCRIPT',100),('7','9','JAVA',40),('8','10','CSS3',95),('8','2','NODEJS',40),('8','7','JAVASCRIPT',80),('8','9','JAVA',80),('f9412b20-477d-4016-ae40-4867d3253065','10','ANGULAR',10),('f9412b20-477d-4016-ae40-4867d3253065','2','JAVASCRIPT',100),('f9412b20-477d-4016-ae40-4867d3253065','3','CSS3',100),('f9412b20-477d-4016-ae40-4867d3253065','5','HTML5',100),('f9412b20-477d-4016-ae40-4867d3253065','6','NODEJS',50),('f9412b20-477d-4016-ae40-4867d3253065','7','PHP',55),('f9412b20-477d-4016-ae40-4867d3253065','8','PYTHON',40);
/*!40000 ALTER TABLE `ranking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-30 15:12:52
