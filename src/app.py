# backend/app.py
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# Load datasets
rainfall_data = pd.read_csv('./dataset/rainfall.csv')  # Replace with actual path
housing_data = pd.read_csv('./dataset/AmesHousing.csv')   # Replace with actual path

# Generate synthetic water table levels based on rainfall
rainfall_data['water_table_level'] = rainfall_data['rainfall'] * np.random.uniform(0.5, 1.5, len(rainfall_data))

# Generate synthetic market trends based on housing data
housing_data['market_trend'] = housing_data['SalePrice'] * np.random.uniform(0.9, 1.1, len(housing_data))

# Combine all synthetic features into a single dataset
combined_data = pd.DataFrame({
    'rainfall': rainfall_data['rainfall'],
    'water_table_level': rainfall_data['water_table_level'],
    'market_trend': housing_data['market_trend'],
})

# Add a final score as a weighted sum of other features
combined_data['final_score'] = (
    0.4 * combined_data['water_table_level'] +
    0.3 * combined_data['market_trend']
)

# Handle NaN values
combined_data = combined_data.dropna()  # Remove rows with NaN values

# Separate features and target
X = combined_data.drop('final_score', axis=1)
y = combined_data['final_score']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestRegressor(random_state=42)
model.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        rainfall = data['rainfall']
        market_trend = data['market_trend']
        water_table_level = rainfall * np.random.uniform(0.5, 1.5)
        
        # Prepare the input for prediction
        input_data = pd.DataFrame([[rainfall, water_table_level, market_trend]], columns=['rainfall', 'water_table_level', 'market_trend'])

        # Make prediction
        prediction = model.predict(input_data)[0]
        return jsonify({'final_score': prediction})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)