alter table empresas modify cnpj varchar(14); -- faz com que o cnpj aceita no maximo 14 caracteris

insert into empresas -- inserir dados na colunas espesifica
    (nome, cnpj)
values ('Bradesco', 12345667890123),
       ('Santander', 09876543211234),
       ('Credisis', 90876543211234);

desc empresas -- mostra as colunas, tipo de dados e chaves
desc cidades -- mostra as colunas, tipo de dados e chaves

select * from empresas; --seleciona tudo que tem em empresas

select * from cidades; -- seleciona tudo que tem em cidades

insert into empresa_unidades -- insere relacionamento vinculado qual empresa e em qual cidade e se é sede 
    (empresa_id, cidade_id, sede)

values(1, 1, 1),
      (1, 2, 0),
      (2, 3, 1),
      (3, 3, 1);  