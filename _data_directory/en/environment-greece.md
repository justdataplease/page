---
title: Emissions, waste and recycling in Greece and the EU
slug: environment-greece
description: "Greenhouse gas emissions since 1990, how much waste we produce, recycle and bury, and renewables, next to the EU"
category: Energy & environment
date: 2026-10-08
published_by: "DataForGreece"
last_update: "2026-10-08"
date_added: "2026-10-08"
data_dates: "emissions 1990 - 2024 · waste 1995 - 2023 · renewables 2004 - 2025"
source_name: "Eurostat – Greenhouse gas emissions by source (env_air_gge),Eurostat – Greenhouse gas emissions SDG indicator (sdg_13_10),Eurostat – Municipal waste (env_wasmun),Eurostat – Renewables share (nrg_ind_ren)"
source_url: "https://ec.europa.eu/eurostat/databrowser/view/env_air_gge/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/sdg_13_10/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/env_wasmun/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/nrg_ind_ren/default/table?lang=en"
description_detailed: "Greenhouse gas emissions every year since 1990, in total, by source and per inhabitant, along with municipal waste (how much we produce, recycle and send to landfill) and the renewables share, for Greece and the EU countries."
description_preprocess: "The data come from Eurostat's API and update automatically. Each time we reload them in full, because emissions are recalculated every year back to 1990. We work out the recycling and landfill rates ourselves, and wrote the Greek names too."
image_path: assets/posts/topic-environment.webp
---

| **Column**                  | **Description** |
|-----------------------------|-----------------|
| series_name_en              | What the series measures, e.g. “Transport” or “Municipal waste”. |
| unit_label_en               | Tonnes of CO2 equivalent, tonnes per inhabitant, index (1990 = 100), kg per inhabitant or %. |
| geo, geo_name_en, geo_level | Greece, the EU27, the euro area or an EU country, and whether it is a country or a total. |
| is_greece                   | TRUE on the rows for Greece. |
| period_date, year           | The first day of the year, and the year. |
| value, value_prev_year      | The value as the source publishes it, and the same period a year earlier. |
| status_flag                 | p provisional, e estimated, b break in series. |
| is_latest                   | TRUE on the latest value of each series. |

**NOTE** - Source: Eurostat. The six emission sources are not all sources and do not add up to the total, which has its own series. Eurostat data may be reused freely with acknowledgement of the source; we translated and rearranged them, and Eurostat is not responsible for the changes.
