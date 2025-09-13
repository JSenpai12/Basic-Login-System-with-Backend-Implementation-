from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

users = {
    "admin": "1234",
    "john": "abcd"
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def loginSystem():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if username in users and users[username] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"})
    
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    if not data:
        return jsonify({"message": "No data Received"})
    
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"message": "Email and Password required"}), 400
    
    if username in users:
        return jsonify({"message": "User already exists"}), 400

    users[username] = password
    return jsonify({"message": "Registration Successful"})

if __name__ == '__main__':
    app.run(debug= True)