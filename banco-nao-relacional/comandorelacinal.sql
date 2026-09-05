mongo --entrar na linha de comando shell
show dbs -- mostra o banco de dados
use wm -- criar ou mudar de banco de dados
db.createCollection('estado') --criar tabela
db.estado.drop() -- excluir tabela
db.estado.insert() -- inserir documentos na coleção
db.estado.insertOne() -- inserir um docuemento na coleção
db.estado.insertMany() -- inserir varios documentos dentro de colchetes []
db.estado.save() -- salvar um documento por cima; se você passar um _id já existente, ele substitui o documento antigo pelo novo.
db.estado.updateOne() -- atualizar apenas alguns campos de um documento específico
db.estado.replaceOne() -- substitui o documento interio por um novo, mantendo apenas o mesmo id original
db.estado.find() -- ele buscada e mostras todos os documentos da coleção
db.estado.find().pretty() -- mostra documentos formatados e identados