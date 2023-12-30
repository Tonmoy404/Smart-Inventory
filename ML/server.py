from flask import Flask, request
from main import build_prediction

app = Flask(__name__)


@app.route("/", methods=["GET"])
def predict():
    predict_by = request.args.get("predictBy")
    return build_prediction(predict_by)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
