
# Meadow
<div align="center">

<h3 align="center">Green Scope Predictor</h3>
 <a>
    <img src="https://img.freepik.com/free-vector/blank-landscape-nature-park-scene-with-many-pines_1308-47926.jpg" width="200" height="100"/> 
  </a>

  <p align="center">
    Machine Learning Project
    <br />
    <a href="https://github.com/bhavisan/green_scope_detection"><strong>Explore the Repo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bhavisan/green_scope_detection/blob/main/src/app.py">View Flask app code</a>
    ·
    <a href="https://github.com/bhavisan/green_scope_detection/blob/main/src/newNotebook.ipynb"> CNN Model Building</a>
    ·
    <a href="https://github.com/bhavisan/green_scope_detection/tree/main/src/dataset">Databases used</a>
  </p>
</div>


## Problem Statement
* There are several reasons for purchasing a plot of land, whether it's for a large company or a small farmer. However, due to rapid urbanization and various environmental uncertainties, it is crucial to ensure that the right plot of land is selected.
What determines a good plot of land, and how can people decide which one is the best? This is the issue we aim to address.

* We developed a website where users can search or select a location of interest, and the site provides detailed insights about the selected area.
## About The Project
* Using Data Science and Machine learning, we built a website that can calculate the green score of a plot of land. The Green Score of a land, for now, only takes two parameters: the water table and the market trend values, to calculate how feasible the land is on a score of 1 - 10.
* Pandas, Numpy, Matplotlib for csv reading, Data Processing, Data Cleaning, Visualization etc.

## Deployed Website

![WhatsApp Image 2024-12-01 at 18 24 57_66a41691](https://github.com/user-attachments/assets/96ba2aac-bd71-456e-83e7-fd8539057502)
![WhatsApp Image 2024-12-01 at 18 30 20_aabcdc72](https://github.com/user-attachments/assets/8cd204eb-8a52-4914-8672-7ea753bad9a5)
![WhatsApp Image 2024-12-01 at 17 59 40_3c9020fb](https://github.com/user-attachments/assets/4e45acbd-5492-4516-9f0d-ae541537a019)




*  There are two datasets used in this project: Ames Housing Dataset and Rainfall dataset; for calculating the market trend value and the rainfall of a particular place.
*  We predict future market trends and estimate the current market value of the land using a trained Convolutional Neural Network (CNN) model. This model will analyze factors such as land area, quality, and previous sale prices to determine the market value.
*  We predict the water table level based on rainfall data and historical environmental patterns using a CNN model. The model will provide insights into water availability, which is crucial for agricultural or residential planning.
*  The data from above two is fed into a final CNN model that calculates the final green score of a place on a scale of 1-10.
*  The R2 score is 0.9834

## Future Scope:
* Currently due to time constraints, we were able to implement only 3 factors to determine the feasibility of the plot. 

* However, we do not stop here. The accuracy of the website can be increased by including more factors such as: checking natural disaster probability, pollution levels, soil fertility,  population density, checking scope for development, find climate and weather trends, zoning regulations, biodiversity impact and accessibility. We can also include comparison tool to compare two plots of land 


<p align="right">(<a href="#top">back to top</a>)</p>

### **Technologies used**
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)

### Installation Guide:
Install the following dependencies:
* npm i react-leaflet
* npm i chart.js
* npm i flask
* npm i flask cors
* npm i pandas
* npm i scikit-learn
* npm i tensorflow
* npm i notebook
* npm i keras


