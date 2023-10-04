## ROTAS Pacientes

POST http://localhost:3000/pacientes/create

GET http://localhost:3000/pacientes/   (retorna todas os pacientes)

GET http://localhost:3000/pacientes/:id

DELETE http://localhost:3000/pacientes/:id


### Exemplos:

```
curl -X POST http://localhost:3000/pacientes/create \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NomePaciente",
    "user": "nomeusuario",
    "senha": "senhadopaciente"
  }' 

curl -X POST http://localhost:3000/pacientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NomePaciente2",
    "user": "nomeusuario2",
    "senha": "senhadopaciente2"
  }'

curl -X GET http://localhost:3000/pacientes

curl -X GET http://localhost:3000/pacientes/1

curl -X PUT http://localhost:3000/pacientes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Novo Nome do Paciente",
    "user": "novonomeusuario",
    "senha": "novasenhadopaciente"
  }'

'curl -X DELETE http://localhost:3000/pacientes/2'
```
