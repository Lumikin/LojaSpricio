Create database if not exists lojadb;
use lojadb;
create table if not exists produtos(
id_produto int primary key auto_increment,
descricao varchar(50) not null,
valor decimal(10,2)
);