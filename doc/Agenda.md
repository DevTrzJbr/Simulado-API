curl -X POST http://localhost:3000/agendas/create \
  -H "Content-Type: application/json" \
  -d '{
    "nomePaciente": "nomeTestePaciente",
    "data": "2022-10-31T08:30:00.000Z"
    }'

curl -X POST http://localhost:3000/agendas/create \
  -H "Content-Type: application/json" \
  -d '{
  "nomePaciente": "nomeTestePaciente2",
  "data": "2022-10-31T08:30:00.000Z"
}'

curl -X GET http://localhost:3000/agendas/1

curl -X PUT http://localhost:3000/agendas/1 \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-11-11T15:30:00.000Z"
  }'
  
curl -X GET http://localhost:3000/agendas/

curl -X DELETE http://localhost:3000/agendas/1