import mercadopago

# Inicializa o SDK com o token de acesso
def gerar_link_pagamento():
    sdk = mercadopago.SDK("TEST-6825604791809077-040517-c8675a57947a792c46d04799db8ac965-2371277557")

    # Cria os dados da preferência
    payment_data = {
        "items": [
            {
                "id": "1",
                "title": "Camisa",
                "quantity": 1,
                "currency_id": "BRL",
                "unit_price": 959.99
            }
        ],

        "back_urls": {
    "success": "https://danilosilva03.github.io/LojaBurguers/compracerta",
    "failure": "https://danilosilva03.github.io/LojaBurguers/compraerrada",
    "pending": "https://danilosilva03.github.io/LojaBurguers/compraerrada"
},

        "auto_return": "all"
    }

    # Cria a preferência
    result = sdk.preference().create(payment_data)

    # A resposta da API com os dados da preferência
    payment = result["response"]
    link_iniciar_pagamento = payment["init_point"]

    # Retorna o link para redirecionamento
    return link_iniciar_pagamento
