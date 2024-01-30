CREATE DATABASE IF NOT EXISTS reservo;
USE reservo;

DROP TABLE IF EXISTS `customer`;

CREATE TABLE IF NOT EXISTS `customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(15) NOT NULL UNIQUE,
  `mail` VARCHAR(90) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `birthday` DATE NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `professional` ;

CREATE TABLE IF NOT EXISTS `professional` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `activity` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `website` VARCHAR(100) NULL,
  `phone` VARCHAR(15) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `service` ;

CREATE TABLE IF NOT EXISTS `service` (
  `id` INT NOT NULL,
  `duration` INT NOT NULL DEFAULT,
  `price` INT NOT NULL DEFAULT,
  `name` VARCHAR(100) NOT NULL,
  `id_category` INT NOT NULL,
  `id_professional` INT NOT NULL,
  PRIMARY KEY (`id`),

  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `category`(`id`)

  CONSTRAINT `id_professional`
    FOREIGN KEY (`id_professional`)
    REFERENCES `professional`(`id`));


DROP TABLE IF EXISTS `customer_service` ;

CREATE TABLE IF NOT EXISTS `customer_service` (
  `customer_id` INT NOT NULL,
  `service_id` INT NOT NULL,
  `date_beginning` DATETIME NULL,
  `date_end` DATETIME NULL,
  PRIMARY KEY (`customer_id`, `service_id`),

  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `customer`(`id`)

  CONSTRAINT `service_id`
    FOREIGN KEY (`service_id`)
    REFERENCES `service`(`id`));


DROP TABLE IF EXISTS `image` ;

CREATE TABLE IF NOT EXISTS `image` (
  `id` INT NOT NULL,
  `link` VARCHAR(100) NOT NULL,
  `id_professional` INT NOT NULL,
  PRIMARY KEY (`id`),

  CONSTRAINT `id_professional`
    FOREIGN KEY (`id_professional`)
    REFERENCES `professional`(`id`));
