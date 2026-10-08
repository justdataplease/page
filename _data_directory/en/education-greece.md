---
title: Education in Greece and the EU
slug: education-greece
description: "How many young people finish tertiary education, how many leave school early, how many neither work nor study, pupils per teacher and public spending on education, for Greece, its 13 regions and the EU countries"
category: Society
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "1992 - 2025 · regions 2000 - 2025 · pupils per teacher 2013 - 2024"
source_name: "Eurostat – Tertiary attainment ages 25-34 (edat_lfse_03),Eurostat – Early leavers from education and training (edat_lfse_14),Eurostat – Young people neither in employment nor in education (edat_lfse_20),Eurostat – Pupils per teacher (educ_uoe_perp04),Eurostat – Government expenditure by function (gov_10a_exp)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_03/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_14/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_20/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/educ_uoe_perp04/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/gov_10a_exp/default/table?lang=en"
description_detailed: "Five education indicators for Greece, the EU27, the euro area and the other 26 EU countries, every year: the share of 25–34 year-olds with a tertiary degree, in total and by sex (from 1992); early leavers, that is 18–24 year-olds who have at most completed lower secondary school and are not studying (from 1992); young people aged 15–29 neither in employment nor in education or training (NEET, from 2000); pupils per teacher in primary, lower secondary and upper secondary school (2013–2024); and public spending on education as a share of GDP. For the 13 regions it gives early leavers and NEETs from 2000. In 2025 just 3.0% of 18–24 year-olds in Greece had left education early, down from 18.2% in 2000, the second lowest share in the EU (EU27: 9.1%). By contrast, 13.6% of 15–29 year-olds neither worked nor studied, the third highest in the EU (EU27: 11.0%), and 42.8% of 25–34 year-olds held a tertiary degree (EU27: 44.8%): 50.9% of women and 35.4% of men."
description_preprocess: "The Eurostat tables are read in full from its API at every update, every year, because they are revised. Each value is first kept exactly as it arrived, with all the source codes, and the final table is checked to have exactly the same rows per table; every code we request must come back, because the API silently ignores codes that do not exist. Spot check against Eurostat's figure: early leavers at 3.0% in 2025. The Greek names of indicators, education levels and regions are our own. The first three indicators come from the Labour Force Survey, that is from a sample: rates never add up across sexes or regions, and small changes from year to year may be sampling noise. Eurostat publishes early leavers only for regions with a large enough sample: in 2025 only for five (Attica, Central Macedonia, Western Greece, Peloponnese, Crete), and the list changes every year; a missing region does not mean zero. For the euro area EA21 is used in the survey indicators and EA20 in spending. Gaps: pupils per teacher start in 2013 and run to 2024, as does education spending; breaks in series are flagged b and low-reliability values u."
image_path: assets/posts/topic-education.webp
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| series_id, series_key | Number and code of the series: the source codes, e.g. `freq=A;sex=T;age=Y25-34;unit=PC;isced11=ED5-8` (isced11: ED5-8 tertiary, ED1 primary, ED2 lower secondary, ED3 upper secondary). One series covers every area. |
| dataset, dataset_name_en | The Eurostat table code (e.g. edat_lfse_14) and its name.                                                    |
| series_name_en, series_title_en | What the series measures, e.g. “Early leavers from education and training — Total” or “Primary education”. |
| sex                  | T total, M men, F women.                                                                                        |
| age                  | Y25-34 (tertiary), Y18-24 (early leavers), Y15-29 (NEET).                                                       |
| unit, unit_label_en  | PC percentage, RT pupils per teacher, PC_GDP % of GDP.                                                          |
| geo, geo_name_en     | EL Greece, EL30 Attica … EL65 Peloponnese (13 regions), EU27_2020 the EU27, EA20 / EA21 the euro area, the EU countries. |
| geo_level            | country, nuts2 (region) or eu_aggregate; filter on it before any comparison or ranking.                         |
| is_greece            | TRUE for Greece and its regions.                                                                                |
| freq, time_period    | A (annual) and the year (2025).                                                                                 |
| period_date, year    | The first day of the year (2025-01-01) and the year.                                                            |
| value                | The value as Eurostat publishes it, in the series' unit.                                                        |
| value_prev_year      | The value of the same series and area in the previous year.                                                     |
| status_flag          | b break in series, u low reliability, d definition differs, p provisional.                                      |
| is_latest            | TRUE on the latest year of each series in each area.                                                            |
| source_url, dataset_updated | The table's page at Eurostat and when Eurostat last updated it.                                          |

**NOTE** - Eurostat tables: edat_lfse_03 (tertiary attainment, ages 25–34), edat_lfse_14 and edat_lfse_16 (early leavers, countries and regions), edat_lfse_20 and edat_lfse_22 (NEET, countries and regions), educ_uoe_perp04 (pupils per teacher) and, from the Debt, deficit & taxes topic, public spending on education (gov_10a_exp, function GF09). Few pupils per teacher does not necessarily mean small classes: the ratio counts all teachers, not class size. The stats_eu_rank table gives Greece's position in the EU for each series and year. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged it, and Eurostat is not responsible for the changes.
