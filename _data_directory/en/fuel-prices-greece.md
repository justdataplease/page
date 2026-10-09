---
title: Fuel Prices in Greece
slug: fuel-prices-greece
description: "Motor and heating fuel prices in Greece, in every prefecture"
category: Economy
date: 2025-02-01
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/fuel-prices-greece/fuel-prices-greece.zip

published_by: "DataForGreece"
last_update: "2025-02-01"
date_added: "2024-11-09"
data_dates: "2017/01 - 2025/01"
source_name: "Ministry of Development and Competitiveness"
source_url: "http://www.fuelprices.gr/"

chart_id: "fuel-prices-greece-daily"
description_detailed: "Prices of petrol, diesel, heating oil and autogas as the Ministry of Development publishes them from filling stations, for the whole country and every prefecture. Alongside them are wholesale prices, to show how much of the price stays at the pump."
description_preprocess: "The Ministry's bulletins come as PDF; we read them, join them into one set and check that the prices make sense. The Ministry does not guarantee that the stations' data are complete."
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
