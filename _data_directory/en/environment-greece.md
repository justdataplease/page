---
title: Emissions, waste and recycling in Greece and the EU
slug: environment-greece
description: "Greenhouse gas emissions since 1990 by source and per inhabitant, how much municipal waste we produce, recycle and bury, and the renewables share, for Greece and the 27 EU countries"
category: Energy & environment
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "emissions 1990 - 2024 · waste 1995 - 2023 · renewables 2004 - 2025"
source_name: "Eurostat – Greenhouse gas emissions by source (env_air_gge),Eurostat – Greenhouse gas emissions SDG indicator (sdg_13_10),Eurostat – Municipal waste (env_wasmun),Eurostat – Renewables share (nrg_ind_ren)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/env_air_gge/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/sdg_13_10/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/env_wasmun/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/nrg_ind_ren/default/table?lang=en"
description_detailed: "Greenhouse gas emissions every year from 1990 to 2024, in tonnes of carbon dioxide equivalent, in total and by source (power generation and refineries, transport, household heating, industrial processes, agriculture, waste), with the 1990 = 100 index and emissions per inhabitant, with and without land use and forests, for Greece, the EU27 and the other 26 countries. Alongside them are municipal waste per inhabitant, how much is generated, how much is recycled (materials and composting) and how much ends up in landfill (1995–2024), the share of renewables in energy and public spending on the environment. In 2024 Greece emitted 73.3 million tonnes, 29.5% less than in 1990 and 46% less than at its 2005 peak (EU27: −38% since 1990), or 7.1 tonnes per inhabitant; the largest source was power generation and refineries (21.2 million tonnes), followed by transport (18.2). In 2023 each inhabitant produced 523 kilos of municipal waste; just 17.4% was recycled, the fourth lowest share in the EU (EU27: 47.9%), and 80.7% went to landfill."
description_preprocess: "The Eurostat tables are read in full from its API at every update, every year, because emission inventories are recalculated every year all the way back to 1990. Each value is first kept exactly as it arrived, with all the source codes, and the final table is checked to have exactly the same rows per table; every code we request must come back, because the API silently ignores codes that do not exist. The Greek names of emission sources and waste operations are our own. The emissions index (1990 = 100) is the year's emissions divided by the same country's 1990 emissions; for Greece in 2024 it comes to 70.5, the same as the index Eurostat publishes itself (sdg_13_10). The recycling rate is recycled waste divided by waste generated in the same country and year, and the landfill rate is landfilled divided by generated: ratios of two series, never sums; we use it because Eurostat's ready-made recycling indicator (cei_wm011) is no longer in its catalogue. The six emission sources are not all sources and do not add up to the total (in 2024 they made 66.5 of the 73.3 million tonnes); use the total's own series for the total. Emissions per inhabitant, indices and kilos per inhabitant never add up across countries. Gaps: Greek waste data run to 2023, the EU27 to 2024 (with no landfill figure for 2023); there is no euro-area average in these tables; emissions per inhabitant are given for countries only, with no EU average."
image_path: assets/posts/topic-environment.webp
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| series_id, series_key | Number and code of the series: the source codes, e.g. `freq=A;unit=THS_T;airpol=GHG;src_crf=CRF1A3` (src_crf: emission source; wst_oper: GEN generated, RCY recycled, DSP_L_OTH landfill). One series covers every area. |
| dataset, dataset_name_en | The Eurostat table code (e.g. env_air_gge) and its name.                                                     |
| series_name_en, series_title_en | What the series measures, e.g. “Fuel combustion in transport” or “Total excluding LULUCF · Tonnes of CO2 equivalent per capita”. |
| unit, unit_label_en  | THS_T thousand tonnes of CO2 equivalent, MTCO2E million tonnes, T_HAB tonnes per inhabitant, I90 index (1990 = 100), KG_HAB kilos per inhabitant, PC percentage. |
| geo, geo_name_en     | EL Greece, EU27_2020 the EU27, and the codes of the other 26 countries.                                          |
| geo_level            | country or eu_aggregate; filter on it before any comparison or ranking.                                         |
| is_greece            | TRUE on the rows for Greece.                                                                                    |
| freq, time_period    | A (annual) and the year (2024).                                                                                 |
| period_date, year    | The first day of the year (2024-01-01) and the year.                                                            |
| value                | The value as Eurostat publishes it, in the series' unit.                                                        |
| value_prev_year      | The value of the same series and area in the previous year.                                                     |
| status_flag          | e estimated, p provisional, b break in series, i see the source's metadata.                                     |
| is_latest            | TRUE on the latest year of each series in each area.                                                            |
| source_url, dataset_updated | The table's page at Eurostat and when Eurostat last updated it.                                          |

**NOTE** - Eurostat tables: env_air_gge (greenhouse gas emissions by source), sdg_13_10 (emissions in million tonnes, 1990 = 100 index and per inhabitant, with and without land use), env_wasmun (municipal waste) and, from other topics, the renewables share (nrg_ind_ren) and public spending on environmental protection (gov_10a_exp, function GF05). The “total excluding land use” does not subtract the carbon dioxide that forests and land absorb or release (LULUCF); the “total including land use” does, and the two series are not comparable with each other. Municipal waste is household rubbish and similar waste from shops and offices, not industrial waste. Burnt areas are in the Forest fires topic. The stats_eu_rank table gives Greece's position in the EU for each series and year. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged it, and Eurostat is not responsible for the changes.
