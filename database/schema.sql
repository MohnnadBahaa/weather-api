-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'weather'
-- 
-- ---
DROP TABLE IF EXISTS `weather`;

CREATE TABLE `weather`
(
  `id` INTEGER
(11)  AUTO_INCREMENT NOT NULL,
  `last_updated` DATETIME NOT NULL,
  `weather_status` VARCHAR
(255) NOT NULL,
  `current_temp` FLOAT NOT NULL,
  `wind_speed` FLOAT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY
(`id`)
);

-- ALTER TABLE `weather` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


-- INSERT INTO `weather` (`id`,`last_updated`,`weather_status`,`current_temp`,`wind_speed`,`created_at`) VALUES
-- ('','','','','','');