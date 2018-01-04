/*
Navicat MySQL Data Transfer

Source Server         : theo
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : cart

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2017-11-30 17:36:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `ordertable`
-- ----------------------------
DROP TABLE IF EXISTS `ordertable`;
CREATE TABLE `ordertable` (
  `id` int(5) NOT NULL,
  `orderId` varchar(8) NOT NULL,
  `sellerName` varchar(20) NOT NULL,
  `productId` varchar(8) NOT NULL,
  `productName` varchar(20) NOT NULL,
  `price` int(5) NOT NULL,
  `quantity` int(5) NOT NULL,
  `userId` varchar(8) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `contactNo` bigint(10) NOT NULL,
  `eMail` varchar(30) NOT NULL,
  `add1` text,
  `pincode` int(6) NOT NULL,
  `createdBy` varchar(30) NOT NULL,
  `createdDate` varchar(20) NOT NULL,
  `updatedBy` varchar(20) NOT NULL,
  `updatedDate` varchar(20) NOT NULL,
  `delFlag` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ordertable
-- ----------------------------
INSERT INTO `ordertable` VALUES ('1', '1', 'Samsung', 'PROD001', 'Oppo Mobile', '20000', '1', 'USR001', 'Madasamy', '8098609298', 'samym.mca@gmail.com', 'ponnakudi', '627151', 'Madasamy', '2017-11-27 01:02:20', '', '', null);
INSERT INTO `ordertable` VALUES ('2', '2', 'phone', 'PROD002', 'tv', '5006', '1', 'USR002', 'Tiger', '0', '', null, '0', '', '2017-11-27 01:02:20', '', '', null);
INSERT INTO `ordertable` VALUES ('3', '4', 'Samsung', '', '', '1000', '0', '', 'Ben', '0', '', null, '0', '', '2017-11-27 01:02:20', '', '', null);
INSERT INTO `ordertable` VALUES ('4', '5', '', '', '', '8900', '0', '', 'leopard', '0', '', null, '0', '', '2017-11-27 01:02:20', '', '', null);
INSERT INTO `ordertable` VALUES ('5', '3', 'Samsung', '', '', '5000', '0', '', 'Lion', '0', '', null, '0', '', '2017-11-27 01:02:20', '', '', null);

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `sr` int(11) NOT NULL AUTO_INCREMENT,
  `productID` int(11) NOT NULL,
  `productName` text NOT NULL,
  `price` varchar(100) NOT NULL,
  PRIMARY KEY (`sr`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', 'LG P880 4X HD', '1000');
INSERT INTO `product` VALUES ('2', '2', 'Google Nexus 4', '2000');
INSERT INTO `product` VALUES ('3', '3', 'Samsung Galaxy S4', '4000');
INSERT INTO `product` VALUES ('4', '4', 'Sony XPERIA', '6000');

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `sku` varchar(14) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `image` varchar(50) NOT NULL,
  `details` varchar(255) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Phone', 'IPHO001', '400.00', 'phone.jpg', 'Display. 4.00-inch.\r\nProcessor. 1.3GHz dual-core.\r\nFront Camera. 1.2-megapixel.\r\nResolution. 640x1136 pixels.\r\nRAM. 1GB.\r\nOS. iOS 7.\r\nStorage. 16GB.\r\nRear Camera. 8-megapixel.');
INSERT INTO `products` VALUES ('2', 'Hard Disk', 'CAME001', '700.00', 'disk.jpg', 'Portable Hard Drive\r\nCapacity: 1 TB\r\nConnectivity: USB 3.0');
INSERT INTO `products` VALUES ('3', 'Watch', 'WATC001', '100.00', 'watch.jpg', 'Stainless steel or space black stainless steel case\r\nSapphire crystal\r\nRetina display with Force Touch\r\nCeramic back\r\nDigital Crown\r\nHeart rate sensor, accelerometer, and gyroscope\r\nAmbient light sensor\r\nSpeaker and microphone\r\nWi-Fi (802.11b/g/n 2.4GHz)\r');
INSERT INTO `products` VALUES ('4', 'Television', 'TELE001', '300.00', 'tv.jpg', '20 W Speaker Output : Rich, powerful sound\r\n1366 x 768 HD Ready - Great picture quality\r\n60 Hz : Standard refresh rate for blur-free picture quality\r\n2 x HDMI : For set top box and consoles\r\n1 x USB : Get content from USB drives');

-- ----------------------------
-- Table structure for `producttable`
-- ----------------------------
DROP TABLE IF EXISTS `producttable`;
CREATE TABLE `producttable` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `sellerName` varchar(30) NOT NULL,
  `productId` varchar(8) NOT NULL,
  `productName` varchar(30) NOT NULL,
  `price` varchar(10) NOT NULL,
  `quantity` int(5) NOT NULL,
  `image` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `addedDate` varchar(30) NOT NULL,
  `updatedDate` varchar(30) NOT NULL,
  `delFlag` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of producttable
-- ----------------------------

-- ----------------------------
-- Table structure for `tblproduct`
-- ----------------------------
DROP TABLE IF EXISTS `tblproduct`;
CREATE TABLE `tblproduct` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `price` double(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tblproduct
-- ----------------------------
INSERT INTO `tblproduct` VALUES ('1', '3D Camera', '3DcAM01', 'product-images/camera.jpg', '1500.00');
INSERT INTO `tblproduct` VALUES ('2', 'External Hard Drive', 'USB02', 'product-images/external-hard-drive.jpg', '800.00');
INSERT INTO `tblproduct` VALUES ('3', 'Wrist Watch', 'wristWear03', 'product-images/watch.jpg', '300.00');

-- ----------------------------
-- Table structure for `tbl_product`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_product`;
CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` double(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tbl_product
-- ----------------------------
INSERT INTO `tbl_product` VALUES ('1', 'Samsung J2 Pro', '1.jpg', '100.00');
INSERT INTO `tbl_product` VALUES ('2', 'HP Notebook', '2.jpg', '299.00');
INSERT INTO `tbl_product` VALUES ('3', 'Panasonic T44 Lite', '3.jpg', '125.00');

-- ----------------------------
-- Table structure for `usertable`
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `userId` varchar(8) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(250) NOT NULL,
  `gender` int(1) NOT NULL,
  `contact` bigint(10) NOT NULL,
  `eMail` varchar(30) NOT NULL,
  `pAddress` text NOT NULL,
  `sAddress` text,
  `pincode` int(6) NOT NULL,
  `createdDate` varchar(30) NOT NULL,
  `createdBy` varchar(20) NOT NULL,
  `updatedDate` varchar(30) NOT NULL,
  `updatedBy` varchar(30) NOT NULL,
  `delFlag` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('1', 'USR001', 'Maddy', '37634c3954415d72efc78532695ea577', '1', '8098609298', 'samym.mca@gmail.com', 'jkdskdbnwd', null, '627151', '2017-11-27 01:02:20', 'Madasamy', '', '', '0');
INSERT INTO `usertable` VALUES ('2', 'USR002', 'Raja', '737d3db4f84432911ca750977565f0ed', '1', '8098609298', 'looser.mca@gmail.com', 'sqwdwdwdwdw', null, '627123', '2017-11-27 01:08:33', 'Raja', '', '', '0');
INSERT INTO `usertable` VALUES ('14', 'USR003', 'Ashok', '737d3db4f84432911ca750977565f0ed', '1', '7689262829', 'looser.mca@gmail.com', 'sdgrwbheth', null, '627151', '2017-11-28 12:11:10', 'Ashok', '', '', '0');
INSERT INTO `usertable` VALUES ('15', 'USR004', 'Ashok', '737d3db4f84432911ca750977565f0ed', '1', '7689262829', 'looser.mca@gmail.com', 'sdgrwbheth', null, '627151', '2017-11-28 12:11:43', 'Ashok', '', '', '0');
INSERT INTO `usertable` VALUES ('16', 'USR005', 'tiger', '7c7386e51ffc50060fbfea1807fc0ec8', '1', '9876543256', 'theobros05@gmail.com', 'TN', null, '6543215', '2017-11-30 11:30:11', 'Tiger', '', '', '0');
