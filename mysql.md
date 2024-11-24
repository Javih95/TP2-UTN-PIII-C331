CREATE SCHEMA `stockdb` DEFAULT CHARACTER SET utf8 ;
USE stockdb;
CREATE TABLE `colores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(65) NOT NULL,
<<<<<<< HEAD
  `createdAt` DATE NULL, 
  `updatedAt` DATE NULL,
=======
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
  PRIMARY KEY (`id`)
);
CREATE TABLE `articulos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(100) NOT NULL,
  `color_id` INT NOT NULL,
  `categorie` VARCHAR(50) NULL,
  `status` ENUM('active', 'inactive') NULL,
  `createdAt` DATE NULL, 
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`color_id`) REFERENCES `colores` (`id`)
);
CREATE TABLE `autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `surname` VARCHAR(100) NULL,
  `createdAt` DATE NULL, 
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`)
<<<<<<< HEAD
);
=======
);
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;
>>>>>>> caa01059beb3b097142d33b16ff5b0e957277f9c
