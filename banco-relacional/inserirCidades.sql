INSERT INTO cidades (nome, area, estado_id) // insere dados na tabela cidades
values ('Curitiba', 100, 31); // insere o nome da cidade que sera inserido no estado da capital 

insert into cidades (nome, area, estado_id)
values ('Niteroi', 150, 25); 

insert into cidades (nome, area, estado_id)
values ('Caruaru', 200, (select id from estado where sigla = 'PE')); // seleciona o id da capital com id sigla 

insert into cidades (nome, area, estado_id)
values ('Juaceiro do norte', 300, (select id from estado where sigla = 'CE'));


select * from estado; // mostra todos os dados da tabela da cidade

