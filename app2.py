from flask import Flask, render_template, request
from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
from sklearn.preprocessing import OneHotEncoder
import pandas as pd
import re

app = Flask(__name__)
clf = pickle.load(open('model.pkl', 'rb'))

@app.route("/")
def home():
    return render_template ("index2.html")

def ValuePredictor(to_predict_list): 
    to_predict = np.array(to_predict_list)   
    loaded_model = pickle.load(open("rf_modelTESTMarc.pkl", "rb")) 
    result = loaded_model.predict(to_predict) 
    return result[0]

@app.route('/result', methods = ['POST']) 
def result(): 
    if request.method == 'POST': 
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values()) 
        # new_list=list(map(lambda x: float(x.replace(",", "")), to_predict_list))
        # to_predict_list = [(re.sub("\'", '', str(to_predict_list)))]
        # to_predict_list = (re.sub("\'", '', str(to_predict_list)))
        # to_predict_list = [[0, 0, 0, 1, 1, 0]]
                            
        # loaded_model = pickle.load(open("rf_modelTESTMarc.pkl", "rb")) 
        # result = loaded_model.predict(to_predict_list)
               
        # if result == "TAKE": 
        #     outcome ='Take'
        # else: 
        #     outcome ='Deny'            
        return render_template("result2.html", outcome = to_predict_list) 

if __name__ == '__main__':
   app.run(debug = True)