import mercadopago
import json

def gerar_link_pagamento(produtos_escolhidos):
    sdk = mercadopago.SDK("TEST-8499540332181782-060508-528c5466463cd9cc0f78b9f570cb68ed-2371277557")

    # Criar descrição com todos os produtos
    descricao = " | ".join([f"{p['name']} (x{p['quantity']})" for p in produtos_escolhidos])
    
    # Calcular total
    valor_total = sum(float(p["price"]) * int(p["quantity"]) for p in produtos_escolhidos)

    items = [{
        "title": descricao,
        "quantity": 1,
        "currency_id": "BRL",
        "unit_price": round(valor_total, 2)
    }]

    payment_data = {
        "items": items,
        "back_urls": {
            "success": "http://localhost:3000/MercadoEletronicos/compracerta",
            "pending": "http://localhost:3000/MercadoEletronicos/compraerrada",
            "failure": "http://localhost:3000/MercadoEletronicos/compraerrada"
        },
    }
    result = sdk.preference().create(payment_data)
    if result.get("status") == 201 and "init_point" in result["response"]:
        return result["response"]["init_point"]
    else:
        print("Erro na criação da preferência:", json.dumps(result, indent=2, ensure_ascii=False))
        return None