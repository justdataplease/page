---
title: Air and footfall in Athens neighbourhoods
slug: athens-neighbourhoods
description: "The City of Athens air sensors and WiFi points in squares, parks and sports grounds: pollution, heat and footfall by neighbourhood"
category: Energy & environment
date: 2026-10-15
published_by: "DataForGreece"
last_update: "2026-10-15"
date_added: "2026-10-15"
data_dates: "2025/10 - 2026/10"
source_name: "City of Athens"
source_url: "https://opendata.cityofathens.gr/"
description_detailed: "What we breathe and how many people pass through the neighbourhoods of Athens, from the sensors of the City of Athens «Smart Neighbourhood» programme in squares, parks and sports grounds. For every station: particles, nitrogen dioxide, ozone and temperature by hour and by day, and how many devices its WiFi sees. Updated every day."
description_preprocess: "The data come from the City's open-data portal; we refresh them every day and keep the original values too. We drop the readings of broken sensors and the days a WiFi point was down. Do not add stations up: air values are averages, and one phone is counted at every station it passes."
image_path: assets/posts/topic-athens-neighbourhoods.webp
---

| **Column**                                                                       | **Description** |
|----------------------------------------------------------------------------------|-----------------|
| station_key, station_label, kind                                                 | The station and its kind: air sensor or WiFi point. |
| venue_type_el, district_short_el, neighbourhood_name                             | Square, park, sports ground or playground, with the municipal district and the neighbourhood. |
| date_athens, hour_athens                                                         | When the value was measured, in Athens time. |
| pm2_5_mean_ugm3, pm10_mean_ugm3                                                  | The day's average for fine and coarser particles. |
| no2_mean_ugm3, o3_max_8h_ugm3                                                    | Nitrogen dioxide, which traffic gives off, and ozone, which rises with the sun. |
| temperature_min_c, temperature_max_c                                             | The day's lowest and highest temperature, at street level. |
| pm2_5_over_who_daily_guideline, o3_over_eu_target, is_hot_day, is_tropical_night | Whether the day went over the WHO guideline or the EU target, and whether it was a very hot day or a tropical night. |
| visitors, is_outage_day                                                          | How many different devices the station's WiFi saw that day, or whether it was down. |

**NOTE** - Source: City of Athens, «Smart Neighbourhood» programme. Credit the City as the source; we rearranged the data and the City is not responsible for the changes. These are low-cost sensors: they show differences between neighbourhoods, hours and seasons, not the official readings of the Ministry's network.
