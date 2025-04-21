from apimercadopago import gerar_link_pagamento
from flask import Flask, render_template  # Corrigido: era "flash"

app = Flask(__name__)

@app.route('/')
def homepage():
    link_iniciar_pagamento = gerar_link_pagamento()
    return render_template("homepage.html", link_pagamento=link_iniciar_pagamento)

@app.route("/compracerta")
def compra_certa():
    return render_template("compracerta.js")  # Página de sucesso

@app.route("/compraerrada")
def compra_errada():
    return render_template("compraerrada.js")  # Página de erro

if __name__ == "__main__":
    app.run()  # Ativa o modo debug para facilitar o desenvolvimento