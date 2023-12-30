import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import numpy as np
import json


def build_prediction(param):
    predict_by = None

    if param == "week":
        predict_by = "Week"
    else:
        predict_by = "Month"
    df = pd.read_csv("sales_dataset.csv")

    X = df[["Product_ID", predict_by]]
    y = df["Sold"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Initialize the Random Forest model
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42)

    # Train the model
    rf_model.fit(X_train, y_train)

    # Make predictions on the test set
    y_pred = rf_model.predict(X_test)

    # Evaluate the model (you can use different metrics depending on your specific problem)
    mse = mean_squared_error(y_test, y_pred)

    products = df["Product_ID"].unique()
    next_week_number = df["Week"].max() + 1
    weeks = [next_week_number] * len(products)

    if predict_by == "Week":
        next_week_data = pd.DataFrame({"Product_ID": products, "Week": weeks})
    else:
        next_week_data = pd.DataFrame({"Product_ID": products, "Month": weeks})

    next_week_predictions = rf_model.predict(next_week_data)

    result_df = pd.DataFrame(
        {"Product_ID": products, "Predicted_Sold": next_week_predictions}
    )

    top_5_products = result_df.sort_values(by="Predicted_Sold", ascending=False).head(5)

    print("Top 5 products likely to be sold for the next week:")
    print(top_5_products)

    top_5_products_array = top_5_products.to_numpy()
    all_products_array = df.to_numpy()

    outputs_dict = {}
    for i in range(len(top_5_products_array)):
        for j in range(len(all_products_array)):
            if all_products_array[j][0] == top_5_products_array[i][0]:
                arr = all_products_array[j].tolist()
                arr.append(top_5_products_array[i][1])
                outputs_dict[all_products_array[j][0]] = arr

    outputs = []
    for key in outputs_dict:
        outputs.append(outputs_dict[key])
    # Show the result
    # print("Matching rows:")
    # for row in outputs:
    #     print(row)
    array_as_list = np.array(outputs).tolist()

    # Serialize the list to JSON
    json_data = json.dumps(array_as_list)

    return json_data
