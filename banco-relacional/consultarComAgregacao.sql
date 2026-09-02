select 
    região as 'Região', -- pega os dados da coluna região e renomeia para Região
    sum(populacao) as 'Total' -- sum e uma função de agregação que soma os valores da coluna
from estado -- pega os dados da tabela estado
group by região -- agrupa ps dados da coluna região e vai somar os valor de cada região
order by Total desc; -- ordena os valores da coluna Total de forma decrescente


select 
    avg(populacao) as 'Populacao Média' -- avg e uma função de agregação que calcula a média 
from estado 
