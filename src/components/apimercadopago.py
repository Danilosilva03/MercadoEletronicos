import mercadopago
import webbrowser

def gerar_link_pagamento():
    # Inicializa o SDK com sua Access Token de TESTE
    sdk = mercadopago.SDK("TEST-6825604791809077-040517-c8675a57947a792c46d04799db8ac965-2371277557")

    # Cria os dados da preferência
    payment_data = {
        "items": [
            {
                "id": "1",
                "title": "Camisa",
                "quantity": 1,
                "currency_id": "BRL",
                "unit_price": 200.00
            }
        ],
        "back_urls": {
            "success": "http://localhost:3000/compracerta",
            "failure": "http://localhost:3000/compraerrada",
            "pending": "http://localhost:3000/compraerrada"
        },
        "auto_return": "approved"
    }

    # Cria a preferência
    result = sdk.preference().create(payment_data)
    payment = result["response"]

    # Pega o link de pagamento correto
    link_iniciar_pagamento = payment["init_point"]

    # Abre o link no navegador
    webbrowser.open(link_iniciar_pagamento)

    return link_iniciar_pagamento

# Executa a função se rodar diretamente
if __name__ == "__main__":
    link = gerar_link_pagamento()
    print(f"Link de pagamento: {link}")
