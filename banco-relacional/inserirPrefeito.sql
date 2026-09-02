insert into prefeitos -- inserindo prefeitos ao id cidade 
    (nome, cidade_id)
values ('Rafael Neves', 2)
       
select * from prefeitos

insert into prefeitos -- inserindo prefeitos em dois id e um id null
    (nome, cidade_id)
values ('Barbara Souza', 3),
       ('Maicon Albert', 4),
       ('Elena Albert', null) 

insert indo prefeito -- inserindo um id duplicado, nao aceita duplicação 
    (nome, cidade_id)
values ('Marcio Albert', 2)

select * from prefeitos
