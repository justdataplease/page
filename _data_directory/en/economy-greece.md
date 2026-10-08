---
title: GDP and the Greek economy, every quarter and every region
slug: economy-greece
description: "GDP every quarter since 1995, the sectors, GDP in every region and economic sentiment, next to the EU"
category: Economy
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "1995/Q1 - 2026/Q2 · regions 2000 - 2024 · sentiment 1982/01 - 2026/09"
source_name: "Eurostat – GDP and main components quarterly (namq_10_gdp),Eurostat – GDP per capita (nama_10_pc),Eurostat – GDP by region (nama_10r_2gdp),Eurostat – GDP by regional unit (nama_10r_3gdp),Eurostat – Economic sentiment (ei_bssi_m_r2),ELSTAT – Quarterly national accounts"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/namq_10_gdp/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/nama_10_pc/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/nama_10r_2gdp/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/nama_10r_3gdp/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/ei_bssi_m_r2/default/table?lang=en,https://www.statistics.gr/en/statistics/-/publication/SEL84/-"
description_detailed: "Greece's GDP every quarter since 1995, with its components and sectors, GDP per head in every region and EU country, and economic sentiment. In the second quarter of 2026 the economy was 1.9% larger than a year earlier, but still 13.6% below its 2007 peak. In 2025 GDP per head stood at 68.3% of the EU average."
description_preprocess: "The data come from Eurostat's API and update automatically. Each time we reload them in full, because national accounts are revised often, and backwards. We wrote the Greek names of the items, sectors and units ourselves."
image_path: assets/posts/topic-economy-piraeus.webp
---

| **Column**                        | **Description** |
|-----------------------------------|-----------------|
| series_name_en                    | What the series measures, e.g. GDP, real change on a year earlier. |
| na_item, nace_r2                  | GDP, consumption, investment, exports, imports or a sector's value added. |
| unit_label_en                     | Change (%), € million, € per inhabitant or a share of the EU27. |
| geo, geo_name_en                  | Greece, a region, a regional unit, the EU27, the euro area or an EU country. |
| geo_level                         | Country, region, regional unit or EU total. Never add them together. |
| is_greece                         | TRUE for Greece, its regions and regional units. |
| period_date, year, quarter, month | The first day of the period and its parts. |
| value, value_prev_year            | The value as the source publishes it, and the same period a year earlier. |
| is_latest                         | TRUE on the latest value of each series. |

**NOTE** - Source: Eurostat, with ELSTAT compiling the Greek figures. An economic sentiment reading above 100 means a better mood than the country's long-term average. The data may be reused with Eurostat and ELSTAT credited as sources; we translated and rearranged them, and neither is responsible for the changes.
