select * from `estado`;

select sigla, nome as 'Nome de Estados' from `estado`
where região = 'sul';

select sigla, nome, região, populacao  as 'Nom de Estados' from `estado`
where populacao >= 10000
order by populacao desc;

