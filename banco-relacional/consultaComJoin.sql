select 
    e.nome as Estado, -- cria uma coluna com nome Estado
    c.nome as Cidade, -- cria nome de coluna Cidade
    região as Região -- cria coluna Região
 from estado e, cidades c -- pega os dados da tabela estado e cidades
where e.id = c.estado_id; -- concatena os dados da tabela estado e cidade, onde o id do estado é igual ao id do estado na tabela cidades

select 
    e.nome as estado,
    c.nome as Cidade,
    região as  região
from estado e
inner join cidades c on e.id = c.estado_id -- Forma de fazer o join entre as tabelas estado e cidades, onde o id do estado é igual ao id do estado na tabela cidade