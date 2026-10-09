---
title: Budget of the Municipality of Athens
slug: athens-municipality-budget
description: "The City of Athens budget: what was voted, what was spent and where the money went"
category: Economy
date: 2024-10-20
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/athens-municipality-budget/athens-municipality-budget-greece_2024.csv.zip

published_by: "DataForGreece"
last_update: "2024-10-20"
date_added: "2024-10-20"
data_dates: "2005/01 - 2024/10"
source_name: "Municipality of Athens Budget and Expenditure Dataset"
source_url: "https://old.cityofathens.gr/khe/proypologismos"
contributed_by: "Adam Markakis"
contributed_by_url: "https://www.linkedin.com/in/amarkakis"

chart_id: "athens-municipality-budget"
description_detailed: "The City of Athens budget and how it was carried out, year by year and month by month: what was voted, how it was amended, what was committed and what was paid or collected, by category and department."
description_preprocess: "The data come from the City of Athens and Diavgeia and update regularly. We join them into one set and give the categories consistent names."
description_data_access_sql_bigquery: "SELECT * FROM dataforgreece.public_data.athens_municipality_budget_v"
image_path: assets/posts/athens.webp

---

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
