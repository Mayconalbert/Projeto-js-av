select e.nome as Empresas, c.nome as Cidades -- exibe e renomeia o nome das colunas usando apelidos
from empresas e, empresa_unidades eu, cidades c -- -- seleciona a empresas, empresa_unidades e cidades
where e.id=eu.empresa_id -- faz a agregação entre id de empresa e empresa_unidades se ela forem verdaderas
and c.id=eu.cidade_id -- id cidade e empresa_unidade forem verdade
and sede -- -- Filtra o resultado para exibir apenas as unidades que são a sede principal (ignora as filiais)