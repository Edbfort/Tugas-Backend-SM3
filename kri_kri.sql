-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 31, 2023 at 12:29 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kri_kri`
--

-- --------------------------------------------------------

--
-- Table structure for table `krithre`
--

CREATE TABLE `krithre` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `thread` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `krithre`
--

INSERT INTO `krithre` (`id`, `name`, `code`, `title`, `kategori`, `thread`, `createdAt`, `updatedAt`) VALUES
(1, 'Birb', '1', 'Desu', 'SFW', 'Never Gonna Gonna Say Good Bye', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(2, 'Birb', '1', 'Desu', 'SFW', 'Let\'s share our favorite healthy breakfast recipes for a productive day!', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(3, 'Birb', '1', 'Desu', 'NSFW', 'What\'s your favorite way to stay active during the winter months?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(4, 'Birb', '1', 'Desu', 'SFW', 'Which books are you currently reading? Share your thoughts and opinions!', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(5, 'Birb', '1', 'Desu', 'NSFW', 'What\'s your favorite hobby and how do you make time for it in your busy schedule?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(6, 'Birb', '1', 'Desu', 'SFW', 'What\'s your go-to stress relief technique? Share your self-care routine!', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(7, 'Birb', '1', 'Desu', 'SFW', 'What are some of the best online courses and resources for personal growth and development?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(8, 'Birb', '1', 'Desu', 'SFW', 'How do you stay organized and manage your daily tasks? Tips and tricks welcome!', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(9, 'Birb', '1', 'Desu', 'SFW', 'What are some of the best apps you use to boost productivity and stay on top of things?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(10, 'Birb', '1', 'Desu', 'SFW', 'What are some of your favorite healthy and eco-friendly products that you use daily?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(11, 'Birb', '1', 'Desu', 'NSFW', 'What are some of your favorite healthy and easy meals to cook at home?', '2023-01-31 11:29:15', '2023-01-31 11:29:15'),
(12, 'Birb', '1', 'Desu', 'NSFW', 'What are some of the best travel destinations you\'ve been to and why did you love them?', '2023-01-31 11:29:15', '2023-01-31 11:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `kriuser`
--

CREATE TABLE `kriuser` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(4) NOT NULL,
  `active` tinyint(4) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kriuser`
--

INSERT INTO `kriuser` (`id`, `name`, `password`, `admin`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Birb', 'aa2d6e4f578eb0cfaba23beef76c2194', 0, 1, '2023-01-31 11:29:07', '2023-01-31 11:29:07'),
(2, 'houlieniao', '2550d3a36dd24afacde53e09b357647f', 1, 1, '2023-01-31 11:29:07', '2023-01-31 11:29:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `krithre`
--
ALTER TABLE `krithre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kriuser`
--
ALTER TABLE `kriuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `krithre`
--
ALTER TABLE `krithre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `kriuser`
--
ALTER TABLE `kriuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
