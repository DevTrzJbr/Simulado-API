## ROTAS Consultas

POST http://localhost:3000/consultas/create

GET http://localhost:3000/consultas/

GET http://localhost:3000/consultas/:id

PUT http://localhost:3000/consultas/:id

DELETE http://localhost:3000/consultas/:id

### Exemplos

```
curl -X POST http://localhost:3000/consultas/create \
  -H "Content-Type: application/json" \
  -d '{
  "data": "2022-10-31T08:30:00.000Z",
  "nomePaciente": "nomeTestePaciente",
  "nomeDentista": "nomeTesteDentista",
  "pacienteId": 1,
  "secretariaId": 1
}'

curl -X POST http://localhost:3000/consultas/create \
  -H "Content-Type: application/json" \
  -d '{
  "data": "2022-10-31T08:30:00.000Z",
  "nomePaciente": "nomeTestePaciente",
  "nomeDentista": "nomeTesteDentista",
  "pacienteId": 1,
  "secretariaId": 1
}'

curl -X GET http://localhost:3000/consultas/

curl -X GET http://localhost:3000/consultas/1

curl -X PUT http://localhost:3000/consultas/1 \
  -H "Content-Type: application/json" \
  -d '{
  "data": "2022-10-31T08:30:00.000Z",
  "nomePaciente": "nomeTestePaciente",
  "nomeDentista": "nomeTesteDentista",
  "pacienteId": 1,
  "secretariaId": 1
}'
  
curl -X DELETE http://localhost:3000/consultas/1

```
