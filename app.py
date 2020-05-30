from flask import Flask, render_template, request
from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

# prediction function 
@app.route("/")
def home():
    return render_template ("index.html")

def ValuePredictor(to_predict_list): 
    to_predict = np.array(to_predict_list).reshape(1, 6)     
    loaded_model = pickle.load(open("model.pkl", "rb")) 
    result = loaded_model.predict(to_predict) 
    return result[0] 
  
@app.route('/result', methods = ['POST']) 
def result(): 
    if request.method == 'POST': 
        to_predict_list = request.form.to_dict() 
        to_predict_list = list(to_predict_list.values()) 
        to_predict_list = list(map(int, to_predict_list)) 
        result = ValuePredictor(to_predict_list)         
        if int(result)== 1: 
            outcome ='Take'
        else: 
            outcome ='No'            
        return render_template("result.html", prediction = outcome) 

if __name__ == '__main__':
   app.run(debug = True)