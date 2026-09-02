create table if not exists prefeitos (-- Criado tabela prefeitos
    id int unsigned not null auto_increment,-- criado coluna id do tipo inteiro, sem sinal, nao nulo e auto incremento
    nome varchar(200) not null,-- nome do prefeito 
    cidade_id int unsigned,-- chave estrageira para a tabela prefeito
    primary key (id),-- em premissa que a coluna id é a chave primaria da tabela prefeitos
    unique key (cidade_id),-- uma chave unica, um prefeito para cada cidade 1 para 1
    foreign key (cidade_id) references cidades (id) -- chaves estrageira que referencia a tabela prefito a tabela cidades
);