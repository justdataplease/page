---
title: Inflation in Greece and the EU
slug: inflation-greece
description: "Inflation every month since 1996, category by category, for Greece and every EU country"
category: Prices & cost of living
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "1996/01 - 2026/09 · price levels 1995 - 2025"
source_name: "Eurostat – Harmonised index of consumer prices (prc_hicp_minr),Eurostat – Price levels (prc_ppp_ind_1)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_minr/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/prc_ppp_ind_1/default/table?lang=en"
description_detailed: "The harmonised index of consumer prices, the inflation measure used across the EU, every month since 1996, for every member state and every category of goods and services. Price levels are here too: how much dearer or cheaper each country is than the EU average."
description_preprocess: "The data come straight from Eurostat's API and update automatically. Each time we reload every month, because Eurostat revises older figures and replaces the flash estimate with the final one. We wrote the Greek names of the categories ourselves."
image_path: assets/posts/topic-inflation.webp
---

| **Column**                  | **Description** |
|-----------------------------|-----------------|
| series_name_en              | What the series measures, e.g. “Actual rental payments made for housing · Annual rate of change”. |
| coicop                      | The spending category: all items, the 13 main groups, energy, food, rents, electricity and more. |
| unit_label_en               | Annual rate (%), index (2025 = 100) or price level (EU27 = 100). |
| geo, geo_name_en, geo_level | Greece, the EU27, the euro area or an EU country, and whether it is a country or a total. |
| is_greece                   | TRUE on the rows for Greece. |
| period_date, year, month    | The first day of the period, the year and the month. |
| value, value_prev_year      | The value as the source publishes it, and the same period a year earlier. |
| status_flag                 | e marks an estimate, usually in the latest month. |
| is_latest                   | TRUE on the latest value of each series. |

**NOTE** - Source: Eurostat, with ELSTAT compiling the index for Greece. The HICP differs slightly from ELSTAT's national CPI. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged them, and Eurostat is not responsible for the changes.
