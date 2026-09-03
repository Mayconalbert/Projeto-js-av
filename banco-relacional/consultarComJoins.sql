select * from prefeitos; -- consulta tabela prefeitos
select * from cidades; --consulta tabela cidades

select * from cidades c inner join prefeitos p on c.id=p.cidade_id; -- consulta a uniao entra as duas tabela cidades e prefeito.
select * from cidades c left outer join prefeitos p on c.id=cidade_id; -- consulta so a lado esquerdo que é a cidades.
select * from cidades c right join prefeitos p on c.id=cidade_id; -- consulta o lado direto prefeitos.

select * from cidades c left join prefeitos p on c.id=cidade_id
union
select * from cidades c right join prefeitos p on c.id=cidade_id; -- consulta full pegar todos os dados das tabelas cidades e prefeitos.