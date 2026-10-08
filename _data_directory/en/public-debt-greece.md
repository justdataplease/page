---
title: Greece's public debt, deficit and taxes
slug: public-debt-greece
description: "Public debt every quarter, the deficit or surplus, interest, government revenue and spending, taxes by type and spending by function, next to the 27 EU countries"
category: State & politics
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "1995 - 2025 · quarterly debt 2000/Q1 - 2026/Q1"
source_name: "Eurostat – Government deficit and debt (gov_10dd_edpt1),Eurostat – Quarterly government debt (gov_10q_ggdebt),Eurostat – Government revenue and expenditure (gov_10a_main),Eurostat – Tax revenue (gov_10a_taxag),Eurostat – Government expenditure by function (gov_10a_exp)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/gov_10dd_edpt1/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/gov_10q_ggdebt/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/gov_10a_main/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/gov_10a_taxag/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/gov_10a_exp/default/table?lang=en"
description_detailed: "The public finances of general government (the state, municipalities and regions, social security funds), as each country reports them to the EU, for Greece, the EU27, the euro area and the other 26 countries: public debt as a share of GDP and in euro, every year since 1995 and every quarter since 2000; the deficit or surplus and interest; total revenue and total spending; taxes and contributions by type (VAT, excise duties, personal and corporate income tax, social contributions); and spending on the ten functions of government (general services, defence, public order, economic affairs, environment, housing, health, culture, education, social protection), all as a share of GDP. In the first quarter of 2026 Greece's debt was 143.5% of GDP, down from 152.9% a year earlier and from a peak of 212.9% in the first quarter of 2021 (EU27: 82.9%). In 2025 it was 146.1% of GDP or €362.9 billion, the highest in the EU, while the budget showed a surplus of 1.7% of GDP, the fourth best result of the 27 countries (EU27: a deficit of 3.1%)."
description_preprocess: "The Eurostat tables are read in full from its API at every update, every year and quarter, because government finance figures are revised at each notification, in April and October, and backwards too. Each value is first kept exactly as it arrived, with all the source codes, and the final table is checked to have exactly the same rows per table; every code we request must come back, because the API silently ignores codes that do not exist. Spot check against Eurostat's figure: debt of 146.1% of GDP in 2025, the same as the fourth quarter of the quarterly series. The Greek names of taxes and functions are our own. In the deficit series a negative value is a deficit and a positive one a surplus (2009: −15.4%). Shares of GDP never add up across countries; the ten functions come to roughly total spending (2024: 48.2% against 48.1%, because of rounding), so use the total's own series for the total; the taxes by type are not all taxes and do not add up to the total. Taxes are measured for general government together with the EU institutions (sector S13_S212), as Eurostat publishes them. Gaps: the EU27 and the euro area do not split personal and corporate income tax; Greece's taxes and spending by function run to 2024, while debt, deficit, revenue and spending run to 2025; quarterly debt runs to the first quarter of 2026, with the latest values provisional (flag p)."
image_path: assets/posts/topic-public-debt.webp
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| series_id, series_key | Number and code of the series: the source codes, e.g. `freq=A;unit=PC_GDP;sector=S13;na_item=GD` (sector: S13 general government; cofog99: GF01–GF10 function). One series covers every area. |
| dataset, dataset_name_en | The Eurostat table code (e.g. gov_10dd_edpt1) and its name.                                                  |
| series_name_en, series_title_en | What the series measures, e.g. “Government consolidated gross debt · % of GDP” or “Value added type taxes (VAT)”. |
| na_item              | GD debt, B9 deficit (−) or surplus (+), D41PAY interest, TR revenue, TE spending, D2_D5_D91_D61_M_D995 total taxes and contributions, D211 VAT, D214A excise duties, D51A / D51B personal / corporate income tax, D61 social contributions. |
| unit, unit_label_en  | PC_GDP % of GDP, MIO_EUR € million.                                                                             |
| geo, geo_name_en     | EL Greece, EU27_2020 the EU27, EA20 / EA21 the euro area, and the codes of the other 26 countries.               |
| geo_level            | country or eu_aggregate; filter on it before any comparison or ranking.                                         |
| is_greece            | TRUE on the rows for Greece.                                                                                    |
| freq, time_period    | Frequency (Q quarterly, A annual) and the period as the source writes it (2026-Q1, 2025).                        |
| period_date, year, quarter | The first day of the period (2026-Q1 → 2026-01-01) and its parts.                                         |
| value                | The value as Eurostat publishes it, in the series' unit.                                                        |
| value_prev_year      | The value of the same series and area in the same period of the previous year.                                  |
| status_flag          | p provisional, b break in series.                                                                               |
| is_latest            | TRUE on the latest period of each series in each area.                                                          |
| source_url, dataset_updated | The table's page at Eurostat and when Eurostat last updated it.                                          |

**NOTE** - Eurostat tables: gov_10dd_edpt1 (deficit, debt and interest under the excessive deficit procedure), gov_10q_ggdebt (quarterly debt), gov_10a_main (revenue and spending), gov_10a_taxag (taxes and contributions by type) and gov_10a_exp (spending by function, COFOG classification). Spending on health, education and the environment also appears in those topics. Debt is the consolidated gross debt of general government at nominal value, as defined for the EU rules; it differs from other ways of measuring debt. The state budget (the state only, on a cash basis) is in the Budget topic. The stats_eu_rank table gives Greece's position in the EU for each series and period. ELSTAT compiles these figures for Greece, and we read them as Eurostat distributes them. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged it, and Eurostat is not responsible for the changes.
