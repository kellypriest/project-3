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
    to_predict = np.array(to_predict_list).reshape(1, 52)     
    loaded_model = pickle.load(open("modelonehot.pkl", "rb")) 
    result = loaded_model.predict(to_predict) 
    return result[0]

@app.route('/result', methods = ['POST']) 
def result(): 
    if request.method == 'POST': 
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values()) 
        new_list=list(map(lambda x: int(x.replace(",", "")), to_predict_list))

        zero_list = []
        for x in range(52):
            zero_list.append(0)
        for x in new_list:
            zero_list[x] = 1

        result = ValuePredictor(zero_list)       
        if result == 1: 
            outcome ='Take'
        else: 
            outcome ='Deny'            
        return render_template("result2.html", outcome = outcome) 

if __name__ == '__main__':
   app.run(debug = True)

# zero_list = []
# for x in range(52):
#     zero_list.append(0)
# print(zero_list)
# user_inputs = [1, 24, 37, 39, 44, 51]
# for x in user_inputs:
#     zero_list[x] = 1
# print(zero_list)