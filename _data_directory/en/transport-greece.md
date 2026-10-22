---
title: Transport in Greece and the EU
slug: transport-greece
description: "How many people take the Athens metro and buses every day, and how people and goods travel in Greece next to the EU"
category: Business & tourism
date: 2026-10-22
published_by: "DataForGreece"
last_update: "2026-10-22"
date_added: "2026-10-22"
data_dates: "OASA daily 2020/09 - today · Eurostat yearly 1990 - 2025"
source_name: "OASA – Ridership (data.gov.gr),Eurostat – Rail passengers (rail_pa_total),Eurostat – Rail passengers by quarter (rail_pa_quartal),Eurostat – Passenger transport by mode (tran_hv_psmod),Eurostat – Freight transport by mode (tran_hv_frmod),Eurostat – Rail accident victims (tran_sf_railvi)"
source_url: "https://data.gov.gr/dataset/oasa_ridership,https://ec.europa.eu/eurostat/databrowser/view/rail_pa_total/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/rail_pa_quartal/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_hv_psmod/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_hv_frmod/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_sf_railvi/default/table?lang=en"
description_detailed: "Ticket validations on the Athens metro, buses, tram and suburban railway, every day, by station and by hour. Alongside, train passengers across the country, the share of car, bus and train in travel, and rail accidents, compared with the EU."
description_preprocess: "We take the validations every day from OASA's open data, put them on Athens time and leave out days with missing or doubled figures. The rest comes from Eurostat and updates automatically."
image_path: assets/posts/athens.webp
---

| **Column**                    | **Column (Greek)**         | **Description** |
|-------------------------------|----------------------------|-----------------|
| service_date, month           | Day, month                 | The service day and its month. |
| mode, mode_name_en            | Mode                       | Metro, buses and trolleys, tram or suburban railway. |
| validations, entries, exits   | Validations                | Every tap of a ticket or card; on the metro exits count too. |
| station, lines                | Station, lines             | The metro station and the lines that stop there. |
| local_hour, day_type          | Hour, day type             | The Athens hour and whether it is a weekday, Saturday or Sunday. |
| is_reliable_day               | Reliable day               | False on days with gaps or odd figures in the source. |
| dataset, series_name_en       | Table, series              | The Eurostat table and what it measures, e.g. "Rail passengers". |
| geo, geo_name_en, period_date | Country, year              | Greece, the EU or each member state, and the year. |
| value                         | Value                      | The source value: passengers, a share or a number of victims. |

**NOTE** - Sources: OASA via data.gov.gr and Eurostat. Validations are not passengers: many bus riders do not validate, and since OASA changed its data feed, buses and tram can no longer be compared with the older figures. The data may be reused freely with credit to the source; we translated and rearranged the Eurostat data and Eurostat is not responsible for the changes.
