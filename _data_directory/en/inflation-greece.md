---
title: Inflation in Greece and the EU
slug: inflation-greece
description: "The harmonised index of consumer prices every month since 1996, category by category, for Greece, the EU27, the euro area and every EU country, and how expensive each country is compared with the average"
category: Prices & cost of living
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "1996/01 - 2026/09 · price levels 1995 - 2025"
source_name: "Eurostat – Harmonised index of consumer prices (prc_hicp_minr),Eurostat – Price levels (prc_ppp_ind_1)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_minr/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/prc_ppp_ind_1/default/table?lang=en"
description_detailed: "The harmonised index of consumer prices (HICP), the inflation measure that is comparable across EU countries, every month from January 1996 to September 2026, for Greece, the EU27, the euro area and the other 26 EU countries. Each category comes with its index (2025 = 100) and its annual rate, that is, how much prices rose compared with the same month a year earlier: the all-items index, the 13 main spending categories (food, housing, transport, restaurants and so on), aggregates such as energy, goods, services and core inflation (excluding energy, food, alcohol and tobacco), and everyday items: bread and cereals, meat, dairy, oils, vegetables, rents, electricity, motor fuel. Alongside them are the annual price levels for 1995–2025, which show how expensive each country is relative to the EU average (= 100). In September 2026 inflation in Greece was 5.1% (flash estimate), the highest since March 2023, with energy 25.4% dearer than a year earlier; in August it was 3.7%, the eighth highest of the 27 countries, against 3.2% in the EU27. In 2025 the price level of consumption in Greece was 84.0 (EU = 100), but that of food was 105.3."
description_preprocess: "The Eurostat tables are read in full from its API at every update, every month since 1996 and not just the latest, because Eurostat revises older values and replaces the flash estimate with the final figure. Each value is first kept exactly as it arrived, with all the source codes and the table's update date, and then moves to the final table; every update checks that the two have exactly the same rows per table. Because the API silently ignores a code that does not exist, every code we request must come back, or the update stops. Values are checked against published figures: Greek inflation of 9.5% in October 2022 and 2.9% in December 2024 (euro area 10.6% and 2.4%), and the index averaging 100 in 2025. The Greek names of the categories and units are our own. In 2026 Eurostat moved to the new spending classification (ECOICOP version 2), with back data to 1996; the categories from 08 onwards do not match the old numbering. The rise since January 2021 is the ratio of two values of the same index (for Greece +31.2% for all items up to September 2026). Annual rates are never added up across categories or countries; the average of a year's monthly rates is close to, not the same as, Eurostat's annual average inflation. The latest month is usually a flash estimate (flag e) that only euro-area countries publish: in September 2026, 21 countries had a value and the EU27 stops in August, so Greece's EU ranking uses the latest month with every country."
image_path: assets/posts/topic-inflation.webp
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| series_id, series_key | Number and code of the series: the source codes that define it, e.g. `freq=M;unit=RCH_A;coicop18=TOTAL`. One series covers every area. |
| dataset, dataset_name_en | The Eurostat table code (prc_hicp_minr, prc_ppp_ind_1) and its name.                                         |
| series_name_en, series_title_en | What the series measures, e.g. “Actual rental payments made for housing · Annual rate of change”; the title puts the table name in front. |
| coicop               | TOTAL all items, CP01–CP13 the 13 categories, NRG energy, FOOD food-alcohol-tobacco, SERV services, GD goods, TOT_X_NRG_FOOD core, CP041 rents, CP0451 electricity, CP0722 motor fuel and others. |
| indicator            | Price levels: PLI_EU27_2020 (EU27 = 100); the category (consumption, food, restaurants and so on) is in series_key. |
| unit, unit_label_en  | RCH_A annual rate (%), I25 index (2025 = 100), I_EU27 price level (EU27 = 100).                                 |
| geo, geo_name_en     | EL Greece, EU27_2020 the EU27, EA / EA20 / EA21 the euro area, and the codes of the other 26 countries.          |
| geo_level            | country or eu_aggregate (EU27, euro area); filter on it before any comparison or ranking.                       |
| is_greece            | TRUE on the rows for Greece.                                                                                    |
| freq, time_period    | Frequency (M monthly, A annual) and the period as the source writes it (2026-09, 2025).                          |
| period_date, year, month | The first day of the period (2026-09-01), the year and the month.                                           |
| value                | The value as Eurostat publishes it, in the series' unit.                                                        |
| value_prev_year      | The value of the same series and area in the same month of the previous year.                                   |
| status_flag          | The source's flag: e estimated (the flash estimate of the latest month), b break in series, d definition differs, u low reliability. |
| is_latest            | TRUE on the latest period of each series in each area.                                                          |
| source_url, dataset_updated | The table's page at Eurostat and when Eurostat last updated it.                                          |

**NOTE** - Two Eurostat tables: prc_hicp_minr (HICP, monthly, ECOICOP version 2, 30 categories × index and annual rate) and prc_ppp_ind_1 (price levels, annual). The stats_eu_rank table gives, for each series and period, Greece's position in the EU (greece_rank_highest_first), how many countries reported (members_reporting) and the EU27 and euro-area values. ELSTAT compiles the HICP for Greece; it differs slightly from ELSTAT's national CPI, which is not included here. The euro area appears as EA (its composition at each point in time), EA20 (2023–2025) and EA21 (from 2026, with Bulgaria); never add them up or mix them. The rents index covers all rents, old and new. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged it, and Eurostat is not responsible for the changes.
