create table if not exists empresas ( -- cria uma tabela empresas
    id int unsigned not null auto_increment, -- cria a coluna id
    nome varchar(255) not null, -- cria a coluna nome
    cnpj int unsigned, -- cria coluna cnpj
    primary key (id), -- id primario
    unique key (cnpj) -- garante que não haverá duplicação no cnpjs 
);

create table if not exists empresa_unidades ( -- cria uma tabela para fazer a união entre a tabela cidades e empresas
    empresa_id int unsigned not null, -- cria a coluna empresa_id
    cidade_id int unsigned not null, -- cria a coluna cidade_id
    sede tinyint (1) not null -- se a empresa é a sede (0 falso 1 verdadeiro)
)