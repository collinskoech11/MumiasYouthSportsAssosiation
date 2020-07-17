CREATE TABLE `user` (
    id int(100) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);