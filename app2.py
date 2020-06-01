from flask import Flask, render_template, request
from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np
from sklearn.preprocessing import OneHotEncoder
import pandas as pd
import re
# from numpy import loadtxt
# from keras.models import load_model
# import keras
# import h5py
# import tensorflow as tf 
 
app = Flask(__name__)

@app.route("/")
def home():
    return render_template ("index2.html")

def ValuePredictor(to_predict_list): 
    to_predict = np.array(to_predict_list).reshape(1, 52)     
    # Code NN model (NOT WORKING!)
    # model = tf.keras.models.load_model("NNmodelonehot.h5")
    
    # Random Forest pickled model (working)
    model = pickle.load(open("rf_modelOneHot2.pkl", "rb"))
    # model = pickle.load(open("RFmodelonehot.pkl", "rb"))  
    
    # SVM pickled model (working)
    # model = pickle.load(open("SVMmodelonehot.pkl", "rb"))
    result = model.predict(to_predict) 
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

