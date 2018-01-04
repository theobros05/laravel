/*
Navicat MySQL Data Transfer

Source Server         : theo
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : appleproject

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2017-12-01 11:21:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `customers`
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(20) NOT NULL,
  `AGE` int(11) NOT NULL,
  `ADDRESS` char(25) DEFAULT NULL,
  `SALARY` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('1', 'Tiger', '32', 'US', '2000.00');
INSERT INTO `customers` VALUES ('2', 'Lion', '32', 'AUS', '3000.00');
INSERT INTO `customers` VALUES ('3', 'Leopard', '35', 'NY', '4000.00');
INSERT INTO `customers` VALUES ('4', 'Chicken', '24', 'UAE', '5000.00');
INSERT INTO `customers` VALUES ('5', 'ken', '27', 'UAE', '7000.00');
