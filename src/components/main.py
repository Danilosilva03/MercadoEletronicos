from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='build/static', template_folder='build')

@app.route('/')
def homepage():
    return render_template('index.html')  # index do React

@app.route('/compracerta')
def compra_certa():
    return render_template('compracerta.html')  # página de sucesso

@app.route('/compraerrada')
def compra_errada():
    return render_template('compraerrada.html')  # página de erro ou pendente

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(app.static_folder, filename)

# Suporte ao React Router
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=5000)
