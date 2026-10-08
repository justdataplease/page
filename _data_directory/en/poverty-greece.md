---
title: Income, poverty and inequality in Greece
slug: poverty-greece
description: "Median income, the risk of poverty or social exclusion, inequality and deprivation, for children, older people and every region, next to the 27 EU countries"
category: Society
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "2003 - 2025 · some series from 1995 · regions 2018 - 2025"
source_name: "Eurostat – At risk of poverty or social exclusion (ilc_peps01n),Eurostat – At-risk-of-poverty rate (ilc_li02),Eurostat – Gini inequality (ilc_di12),Eurostat – Mean and median income (ilc_di03),Eurostat – Poverty by region (ilc_peps11n),ELSTAT – Survey on Income and Living Conditions"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/ilc_peps01n/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/ilc_li02/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/ilc_di12/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/ilc_di03/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/ilc_peps11n/default/table?lang=en,https://www.statistics.gr/en/statistics/-/publication/SFA10/-"
description_detailed: "The headline figures of the European survey on income and living conditions (EU-SILC) for Greece, the EU27, the euro area and the other 26 EU countries, every year to 2025: mean and median income in euro and in purchasing power standards, the risk of poverty (income below 60% of the country's median), the risk of poverty or social exclusion (from 2015), severe material and social deprivation, and inequality measured two ways, the Gini index and the ratio of the income of the richest 20% to the poorest 20%, for the whole population, children under 18 and people aged 65 and over. For the 13 regions it gives the risk of poverty or social exclusion from 2018. In 2025, 27.5% of Greece's population was at risk of poverty or social exclusion, the second highest share in the EU after Bulgaria (EU27: 20.9%); among children 29.6% and among people aged 65 and over 27.7%, up from 24.9% a year earlier. Median equivalised disposable income was €11,700, 51% of the EU27 figure (€22,939), and across the regions the risk ranged from 18.2% in Crete to 38.1% in the Peloponnese."
description_preprocess: "The Eurostat tables are read in full from its API at every update, every year, because countries revise survey results backwards too. Each value is first kept exactly as it arrived, with all the source codes, and the final table is checked to have exactly the same rows per table; every code we request must come back, because the API silently ignores codes that do not exist. The Greek names of indicators, age groups and regions are our own. Each year's survey measures the previous year's income: the 2025 survey shows 2024 incomes. The poverty line is relative and national (60% of each country's median equivalised income), so the same rate means a different income in each country; to compare income levels use purchasing power standards (Greece 13,612, EU27 22,638 in 2025). Rates never add up across age groups or regions; each rate is a separate estimate from the sample. For the euro area EA20 or EA21 is used, because the changing-composition euro area (EA) stops in EU-SILC in 2021–2024, depending on the table. Gaps: the risk of poverty or social exclusion under the current definition starts in 2015; the Gini index in 2014; regions have values from 2018 (2015–2017 only the country); breaks in series are flagged b."
image_path: assets/posts/topic-poverty.webp
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| series_id, series_key | Number and code of the series: the source codes, e.g. `freq=A;statinfo=MED_EI;unit=PC;rskpovth=B_60;sex=T;age=TOTAL` (rskpovth: B_60 below 60% of the median). One series covers every area. |
| dataset, dataset_name_en | The Eurostat table code (e.g. ilc_peps01n) and its name.                                                     |
| series_name_en, series_title_en | What the series measures, e.g. “At risk of poverty or social exclusion — Total”.                      |
| sex                  | T total: every series in this topic covers both sexes together.                                                 |
| age                  | TOTAL all ages, Y_LT18 under 18, Y_GE65 65 and over.                                                            |
| unit, unit_label_en  | PC percentage of the population, EUR euro a year, PPS purchasing power standards, GINI Gini index (0–100), RAT S80/S20 ratio. |
| geo, geo_name_en     | EL Greece, EL30 Attica … EL65 Peloponnese (13 regions), EU27_2020 the EU27, EA / EA20 / EA21 the euro area, the EU countries. |
| geo_level            | country, nuts2 (region) or eu_aggregate; filter on it before any comparison or ranking.                         |
| is_greece            | TRUE for Greece and its regions.                                                                                |
| freq, time_period    | A (annual) and the survey year (2025).                                                                          |
| period_date, year    | The first day of the year (2025-01-01) and the year.                                                            |
| value                | The value as Eurostat publishes it, in the series' unit.                                                        |
| value_prev_year      | The value of the same series and area in the previous year's survey.                                            |
| status_flag          | b break in series, e estimated, p provisional.                                                                  |
| is_latest            | TRUE on the latest year of each series in each area.                                                            |
| source_url, dataset_updated | The table's page at Eurostat and when Eurostat last updated it.                                          |

**NOTE** - Eurostat tables (EU-SILC): ilc_peps01n (risk of poverty or social exclusion), ilc_li02 (at-risk-of-poverty rate), ilc_di12 (Gini), ilc_di11 (S80/S20), ilc_di03 (mean and median income), ilc_mdsd11 (severe material and social deprivation), ilc_peps11n (by region), and ilc_mdes01 and ilc_mdes07 (inability to keep the home warm, arrears on utility bills), which are shown in the Electricity & energy topic. A person is at risk of poverty or social exclusion if their income is below the poverty line, or they live in severe material and social deprivation, or in a household with very low work intensity; each person is counted once. “Equivalised” income shares the household's income among its members with weights, so households of different sizes can be compared. ELSTAT runs the survey in Greece, and we read it as Eurostat distributes it. The stats_eu_rank table gives Greece's position in the EU for each series and year. Eurostat data may be reused freely with acknowledgement of the source; figures that come from ELSTAT are credited to ELSTAT. We translated and rearranged them; Eurostat and ELSTAT are not responsible for the changes.
