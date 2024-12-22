---
title: Fuel Prices in Greece
slug: fuel-prices-greece
description: Fuel Prices in Greece
category: Economy
date: 2024-11-09
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/fuel-prices-greece/fuel-prices-greece.zip

published_by: "DataForGreece"
last_update: "2024-11-01"
date_added: "2024-11-09"
data_dates: "2017/01 - 2024/11"
source_name: "Ministry of Development and Competitiveness"
source_url: "http://www.fuelprices.gr/"

chart_id: "fuel-prices-greece-daily"
description_detailed: "This dataset shows daily fuel prices across Greece, including fuel types, station counts, average prices, and report IDs to help consumers understand pricing trends. Shared by the Ministry of Development on fuelprices.gr, it aims to keep consumers informed. While efforts are made to ensure accuracy, the Ministry publishes data as received from stations and does not guarantee completeness."
description_preprocess: "The individual pdf files are merged into a single dataset and cleaned to ensure consistency."
description_data_access_sql_bigquery: "SELECT * FROM dataforgreece.public_data.fuel_prices_greece_v"
image_path: assets/posts/fuel_station.webp

---

| **Column**                   | **Description**                                                                                    |
|------------------------------|----------------------------------------------------------------------------------------------------|
| product                      | Type of fuel (e.g., gasoline, diesel, etc.).                                                       |
| pdf_url                      | URL of the PDF document associated with the report.                                                |
| pdf_date                     | Date the PDF document was generated                                                                |
| report_date                  | Date the report refers to, which is the date of the last available measurement (actual data date). |
| number_of_stations           | Number of fuel stations reporting prices in Greece.                                               |
| average_price                | Average price of the fuel for the recorded date among all fuel stations in Greece.                |
| protocol_numner              | Unique identifier for each report.                                                                         |
