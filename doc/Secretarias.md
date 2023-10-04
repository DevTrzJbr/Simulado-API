curl -X POST http://localhost:3000/secretarias/create \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NomeSecretaria",
    "RG": 123456789
  }'

curl -X POST http://localhost:3000/secretarias/create \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NomeSecretaria2",
    "RG": 123456782
  }'

curl -X GET http://localhost:3000/secretarias/1

curl -X PUT http://localhost:3000/secretarias/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "NovoNomeSecretaria",
    "RG": 987654321
  }'
  
curl -X GET http://localhost:3000/secretarias/
