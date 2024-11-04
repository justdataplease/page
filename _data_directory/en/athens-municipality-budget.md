---
title: Budget of the Municipality of Athens
slug: athens-municipality-budget
description: Budget of the Municipality of Athens
category: Economy
date: 2024-10-20
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/athens-municipality-budget/athens-municipality-budget-greece_2024.csv.zip

published_by: "Municipality of Athens"
last_update: "2024-10-20"
date_added: "2024-10-20"
data_dates: "2005/01 - 2024/10"
source_name: "Municipality of Athens Budget and Expenditure Dataset"
source_url: "https://old.cityofathens.gr/khe/proypologismos"
---

### Data Description
This dataset provides detailed information on the budget and expenditure for the Municipality of Athens from 2005 to 2024. It includes the initial budget allocations, adjustments, committed funds, authorized payments, and actual payments made across various departments. The data includes expenses such as legal fees, office supplies, public relations costs, and maintenance of equipment.

### Data Preprocessing
The data was downloaded and combined into a single file. 

### Data Accessibility
1. You can download the dataset in Excel format by clicking the "Download" button.
2. Alternatively, you can analyze the data online using Google BigQuery with the following query:
   ```sql
   SELECT * FROM dataforgreece.public_data.athens_municipality_budget_v
   ```

### Definitions for Dataset

| **Column**      | **Description**                                                             |
|---------------------|-----------------------------------------------------------------------------|
| year                | The year of the recorded budget and expenditures                            |
| department_office    | The municipal office or department responsible for the expense              |
| code                | Unique identifier for each budget entry                                     |
| title               | Description of the specific expenditure or project                          |
| amount              | Initial budget amount allocated for the expenditure                         |
| adjustment          | Adjustments or revisions made to the initial budget amount                  |
| final_budget        | Final budget amount after adjustments                                       |
| committed_funds     | Amount of money committed for the expenditure                               |
| authorized_payments | Funds authorized for payment                                                |
| payments_made       | Actual payments made for the specific expenditure                           |
| certified_revenues  | Revenues certified by the municipality (if applicable)                      |
| collected_revenues  | Revenues actually collected (if applicable)                                 |
| args_year           | (internal field)                                         |
| args_pro_cdief      | (internal field)                                     |
| args_pro_esex       | (internal field)                                    |
