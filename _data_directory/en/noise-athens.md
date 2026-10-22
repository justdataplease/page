---
title: Noise in Athens neighbourhoods
slug: noise-athens
description: "SoundWatch's noise sensors in Athens neighbourhoods: how much noise, at what hour and where"
category: Energy & environment
date: 2026-10-22
published_by: "DataForGreece"
last_update: "2026-10-22"
date_added: "2026-10-22"
data_dates: "2026/08 - 2026/10"
source_name: "SoundWatch"
source_url: "https://soundwatch.gr/"
description_detailed: "How noisy each neighbourhood is and when the city goes quiet, from the SoundWatch noise-sensor network in Athens and the municipalities around it. For every sensor: the noise level by hour and by day, the usual level of each hour and the difference from the rest of the city. Updated every day."
description_preprocess: "The data come from SoundWatch's public API; we refresh them every day and keep every hour we have read. Levels are device decibels, not calibrated: compare them with each other, never with limits. Never take a plain average of levels, only an energy average."
image_path: assets/posts/topic-noise.webp
---

| **Column**                                                         | **Description** |
|--------------------------------------------------------------------|-----------------|
| sensor_id, sensor_label, place_name, neighbourhood, municipality_el | The sensor, its address, neighbourhood and municipality. |
| latitude, longitude                                                | Where the sensor is on the map. |
| hour_start_athens, date_athens, hour_athens                        | When it was measured, in Athens time. |
| laeq                                                               | The noise level: the average sound energy of the hour or day, in device decibels. |
| l90, l50, l10                                                      | The level exceeded almost all the time, half the time and only in the loudest moments. |
| n, energy_n, is_thin_hour                                          | How many readings the hour has, their energy for averages, and whether the hour is incomplete. |
| laeq_vs_town                                                       | How much louder or quieter the place is than the median place at the same hour. |
| laeq_energy_mean, laeq_hour_p25, laeq_hour_p75                     | The usual level of each hour and its range over the last few weeks. |

**NOTE** - Source: SoundWatch (soundwatch.gr), Schema Labs' noise-sensor network, with open data; we rearranged it and SoundWatch is not responsible for the changes. Levels are not calibrated: they show differences between places and hours, not official noise measurements, and are never compared with legal limits. Background map: © OpenStreetMap contributors.
