
import requests
import pandas as pd

def get_current_user(): 
    logbdd =  requests.get(url='http://localhost:3000/bdd').json()
    df = pd.DataFrame(logbdd)
    return df


if __name__ == "__main__":
    df = get_current_user()
    df.to_csv("Liste_Mariage.csv",index=False)
