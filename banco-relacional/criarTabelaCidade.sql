CREATE TABLE IF NOT EXISTS Cidades ( // cria a tabela cidades caso ela nao exista
    id INT unsigned not null AUTO_INCREMENT, // cria uma coluna id do tipo inteiro
    nome VARCHAR(100) NOT NULL, // cria uma coluna nome
    estado_id INT unsigned NOT NULL, // cria um id de estado do tipo inteiro
    area DECIMAL(10,2) NOT NULL, // aria quadrada dda cidade do tipo decima
    PRIMARY KEY (id), // chave primaria da tabela 
    FOREIGN KEY (estado_id) REFERENCES estado (id) // chave estrageira da cidade que e criada a partir do id da tabela estado
);

-- create table if not exists teste ( // cria uma tabela teste caso nao exista 
--     id int unsigned not null auto_increment primary key // cria uma coluna id e chave primaria
-- );

-- drop table if exists teste // deleta a tabela se ela existir
