---
title: Supermarket Prices - It's just period
slug: supermarket-prices-itsjustperiod
description: Supermarket Prices - It's just period
category: Economy
date: 2024-11-09
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/fuel-prices-greece/fuel-prices-greece.zip
live: false

published_by: "DataForGreece"
last_update: "2024-11-01"
date_added: "2024-11-09"
data_dates: "2017/01 - 2024/11"
source_name: "Ministry of Development and Competitiveness"
source_url: "http://www.fuelprices.gr/"
---

### Data Description
This dataset shows daily fuel prices across Greece, including fuel types, station counts, average prices, and report IDs to help consumers understand pricing trends. Shared by the Ministry of Development on fuelprices.gr, it aims to keep consumers informed. While efforts are made to ensure accuracy, the Ministry publishes data as received from stations and does not guarantee completeness.

### Data Preprocessing
The individual pdf files are merged into a single dataset and cleaned to ensure consistency.

### Related Charts
<div class="pt-2">
<iframe 
    src="/en/charts/supermarket-prices-itsjustperiod/" 
    frameborder="0" 
    style="border: 0; width: 100%; aspect-ratio: 4 / 3;" 
    allowfullscreen>
</iframe>
</div>

### Data Accessibility
1. You can download and analyze the data in Excel by clicking the "Download" button at the top of the page.
2. Alternatively, you can analyze the data online using the public dataset directly in [Google BigQuery](https://console.cloud.google.com/bigquery) with the following query:
   ```sql
   SELECT * FROM dataforgreece.public_data.fuel_prices_greece_v
   ```


### Definitions for Dataset

| **Column**                   | **Description**                                                                                    |
|------------------------------|----------------------------------------------------------------------------------------------------|
| product                      | Type of fuel (e.g., gasoline, diesel, etc.).                                                       |
| pdf_url                      | URL of the PDF document associated with the report.                                                |
| pdf_date                     | Date the PDF document was generated                                                                |
| report_date                  | Date the report refers to, which is the date of the last available measurement (actual data date). |
| number_of_stations           | Number of fuel stations reporting prices in Greece.                                               |
| average_price                | Average price of the fuel for the recorded date among all fuel stations in Greece.                |
| protocol_numner              | Unique identifier for each report.                                                                         |
