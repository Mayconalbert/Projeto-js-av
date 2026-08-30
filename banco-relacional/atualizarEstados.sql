update `estado`
set nome = 'Paraná'
where sigla = 'PaR';

select nome from `estado` where sigla = 'PaR';

update `estado`
set nome = 'Paraná', populacao = 11.32
where sigla = 'PaR';

select est.nome, sigla, populacao from `estado` est where sigla = 'PaR';