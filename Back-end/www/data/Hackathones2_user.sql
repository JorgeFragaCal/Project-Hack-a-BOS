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
INSERT INTO `user` VALUES ('07b64d78-dc9d-4a25-b2be-8e41fd9e0b5b','pruebacat','prueba','usuario','accountData@email.com',633482626,'$2b$10$51o7kUNoEF4royFnQcPO/OhLzoJnt9RtiaQxZXjHuQyIVAJPxUK5K','../img/prueba','accountData.address','accountData.city','accountData.country','Developer','2020-01-03 15:00:25',NULL),('1','drelos','Jorge','Fraga Cal','jorge.fraga1997@gmail.com',633482626,'1234','https://media.licdn.com/dms/image/C4D03AQEfTFxvopA2aw/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=uMZOfTzbh6HtQ5H5g0G9hZPrwuqB_WCtvJECCC-DNYY','Rua Paramo 46 3º','Coruña','España','Organizating','2020-01-01 00:00:00',NULL),('2','legolas','lara','oreiro romar','l@gmail.com',600000000,'1234','https://i.pinimg.com/originals/5b/0d/00/5b0d009860955095e18ea6dcdd214287.jpg','su casa','coruña','españa','Organizating','',NULL),('3','furby','ruben','fraga cal','r@hotmail.com',600000000,'1234','https://i.pinimg.com/originals/a2/de/39/a2de3954697c636276192afea0a6f661.jpg','nuetsra casa','lugo','españa','Recruiting','',NULL),('3f6b7d63-f564-4b5e-8ebb-bda9d9005c99','Jorge','null','null','thekingjfc@hotmail.com',633482626,'$2b$10$KOpEKexZA8.ZEqyfRxV4v.zNN25iRvwAJsjongrgGu.jOXN10IYdy','null','null','null','null','Organizating','2020-01-06 21:15:49','7d244aae96560f75d75c789de763e2a550af1871c3cc57692eea9100a05c5276'),('97e55b52-29a7-4ac2-9286-c2c848cdaf10','pruebaman','prueba','usuario','accountData@email.com',633482626,'$2b$10$v7H4wrIIHUHzuICm6bJzreiugIo7pHXQqBu5OP1Y41yD6U8dcBBmy','../img/prueba','accountData.address','accountData.city','accountData.country','Developer','2020-01-03 16:37:59','e8a1a448989cb0ff44a6d4b8e884ef62bcbd09dbaacd495c0eb425146dd0ed53'),('9a58da10-e112-499a-bad2-ad6b51787a2f','pruebadog','prueba','usuario','accountData@email.com',633482626,'$2b$10$Tma8aXgdOFPTdCLzY3yNdOOG80mS819AmdRfhfGfcn09hhyh78mN2','../img/prueba','accountData.address','accountData.city','accountData.country','Organizating','2020-01-03 15:01:08',NULL),('9dbf7344-de45-4aab-b647-84055e49ca0a','pruebaputo','prueba','usuario','rfragcal@gmail.com',633482626,'$2b$10$VuP4v/49z7.G1M6CzzGQRuH49ZUtooNAY7iD9nZPpOyHPiFqYMbwS','../img/prueba','accountData.address','accountData.city','accountData.country','Developer','2020-01-03 16:39:20','6cbfc9f8e09df3341a27d91ae1b81efbfb27cf1cda66695db065460a8de1c5f1'),('bdd89b87-fef5-421e-84fb-3addf73dd7f6','usuarioputo','prueba','usuario','rfragcal@gmail.com',633482626,'$2b$10$yWE2tRl0TL5N6Pa9n2AQyel5R9G0/PupzDPC.W1htk0R3Y1fBCBl6','../img/prueba','accountData.address','accountData.city','accountData.country','1','2020-01-06 21:17:54','00b4c63a5bc2d4395a9bb308b5ab95e727a1be1ea6147952f8b5294e609a4593'),('f56b5e10-0c7c-4ad6-8492-a490b0f99cc5','jorge.fraga1997@gmail.com',NULL,NULL,'thekingjfc@hotmail.com',NULL,'$2b$10$fYbuX72yAsv5vkTGzoLaHuJ45na.v5nsFWZMJcphRomvatOZ2ugy6',NULL,NULL,NULL,NULL,'Organizating','2020-01-06 21:24:44','ae162988a4a1788a9d60226dc160a236d7c45feb35f4727778c134e5d3739d08');
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

-- Dump completed on 2020-01-07 18:52:56
