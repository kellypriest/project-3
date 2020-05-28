import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle


app = Flask(__name__)

# prediction function 
def ValuePredictor(to_predict_list): 
    to_predict = np.array(to_predict_list).reshape(1, 12) 
    loaded_model = pickle.load(open("model.pkl", "rb")) 
    result = loaded_model.predict(to_predict) 
    return result[0] 
  
@app.route('/predict', methods = ['POST']) 
def predict(): 
    if request.method == 'POST': 
        to_predict_list = request.form.to_dict() 
        to_predict_list = list(to_predict_list.values()) 
        to_predict_list = list(map(int, to_predict_list)) 
        result = ValuePredictor(to_predict_list)         
        if int(result)== 1: 
            prediction ='Take'
        else: 
            prediction ='Deny'            
        return render_template("templates/index.html", prediction = prediction)

if __name__ == "__main__":
    app.run(debug=True)