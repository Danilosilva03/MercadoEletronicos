from flask import Flask, request, jsonify
from flask_cors import CORS
from apimercadopago import gerar_link_pagamento

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def homepage():
    return "Servidor Flask está rodando corretamente!"

@app.route("/api/pagamento", methods=["POST"])
def pagamento():
    data = request.get_json()
    produtos = data.get("produtos", [])

    if not produtos:
        return jsonify({"erro": "Nenhum produto recebido"}), 400

    link_pagamento = gerar_link_pagamento(produtos)
    if link_pagamento:
        return jsonify({"link_pagamento": link_pagamento})
    else:
        return jsonify({"erro": "Erro ao gerar link de pagamento"}), 500

@app.route("/compracerta")
def compracerta():
    return "compraCerta.js"

@app.route("/compraerrada")
def compraerrada():
    return "compraErrada.js"

if __name__ == "__main__":
    app.run(debug=True)