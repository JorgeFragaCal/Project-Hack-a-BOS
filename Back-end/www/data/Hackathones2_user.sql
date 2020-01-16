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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` mediumtext,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `userType` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) NOT NULL,
  `verification_code` varchar(100) DEFAULT NULL,
  `anonymous` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0ca1bc0b-ebdb-473b-8f23-2f8c43591701','THE ORGANIZATOR','Organizador',NULL,'organizador@gmail.com',600000000,'$2b$10$/YlOnlT1f6/Lj1ErTv96s.ipT4bLigCrTa42bUhVubyNfjRPZSFCe',NULL,NULL,NULL,NULL,'Organizating','2020-01-15 20:39:49','869d8d2142915b4ae25f0eefc6904752a2a3a6e2ce35f7706c55544653266126',NULL),('1','rayoaki','Raul','Sanchez Cruz','ratoyaki@hotmail.com',600000000,'1234','https://i.pinimg.com/originals/78/07/03/78070395106fcd1c3e66e3b3810568bb.jpg','Rua Paramo 46 3º','Coruña','España','Developer','2020-01-01 00:00:00',NULL,'false'),('2','legolas','sara','lopez amido','s@gmail.com',600000000,'1234','https://i.pinimg.com/originals/5b/0d/00/5b0d009860955095e18ea6dcdd214287.jpg','su casa','coruña','españa','Developer','',NULL,'false'),('3','furby','ruben','fraga cal','r@hotmail.com',600000000,'1234','https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg','nuetsra casa','lugo','españa','Developer','',NULL,'false'),('f9412b20-477d-4016-ae40-4867d3253065','Drelos','Jorge','Fraga Cal','jorge.fraga1997@gmail.com',666666666,'$2b$10$/bXV/skKRn/j6c0WrQt7buOrDk3H5ieIncRsMbggr1MghoPTVMsTW','https://media-exp2.licdn.com/dms/image/C4D03AQEfTFxvopA2aw/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=0XYGdV3TbicrpiMysXSAQJM5QlXkDWwTh_oNPQJqgRA','Nevado Bouza 8 5º','Vilalba','España','Developer','2020-01-15 20:50:54','0f9248cdad8fa0025c741c46da81dc84874442bc28d4cf60ee2cb3fa13c91077','true');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
