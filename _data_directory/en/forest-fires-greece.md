---
title: Forest Fires in Greece
slug: forest-fires-greece
description: Forest Fires in Greece
category: Environment
date: 2024-10-14
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/fires-greece/forest-fires-combined-greece_2023.csv.zip

published_by: "DataForGreece"
last_update: "2024-10-14"
date_added: "2024-10-14"
data_dates: "2000/01 - 2023/12"
source_name: "Hellenic Fire Service Dataset"
source_url: "https://www.fireservice.gr/el_GR/synola-dedomenon"

chart_id: "forest-fires-greece-monthly"
description_detailed: "The dataset provides information on forest and urban fire incidents where the Hellenic Fire Service (HFS) intervened. The data is available in a machine-readable format, and is governed by the terms of Annex C of the related circular (ADA: ΩΩΡΜΧ-ΜΒΛ). The terms include attribution to the creator, non-commercial use, and sharing alike."
description_preprocess: "The individual files are merged into a single dataset and cleaned to ensure consistency. Additionally, several helper columns are added to facilitate the analysis."
description_data_access_sql_bigquery: "SELECT * FROM dataforgreece.public_data.forest_fires_greece_v"

---

| **Column**                   | **Description**                                                        |
|------------------------------|------------------------------------------------------------------------|
| id                           | Unique identifier for the record                                       |
| engage_id                    | Incident ID                                                            |
| engage_x                     | X coordinate of the incident location                                  |
| engage_y                     | Y coordinate of the incident location                                  |
| service                      | Service that reported the incident                                     |
| county                       | County where the incident occurred                                     |
| start_date                   | Start date of the incident                                             |
| start_time                   | Start time of the incident                                             |
| end_date                     | End date of the incident                                               |
| end_time                     | End time of the incident                                               |
| municipality                 | Municipality where the incident occurred                               |
| area                         | Specific area of the incident                                          |
| address                      | Address where the incident occurred                                    |
| burned_forest                | Burned forest area (stremma)                                           |
| burned_forest_area           | Forested areas that were affected by fire (stremma)                    |
| burned_groves                | Small forested areas or groves affected by fire (stremma)              |
| burned_grassland_areas       | Grasslands that were affected by fire (stremma)                        |
| burned_reeds_marshes         | Marshlands and reed-covered areas burned (stremma)                     |
| burned_agricultural_areas    | Agricultural lands that were affected by fire (stremma)                |
| burned_crops_residues        | Leftover crops and residues from farming affected by fire (stremma)    |
| burned_landfills             | Landfill or waste disposal sites affected by fire (stremma)            |
| burned_forest_total          | Total burned forest area (stremma)                                     |
| burned_total                 | Total burned area (stremma)                                            |
| personnel_fire_brigade       | Firefighters from the fire brigade involved in firefighting operations |
| personnel_infantry_divisions | Infantry units involved in firefighting operations                     |
| personnel_volunteers         | Volunteers assisting in firefighting operations                        |
| personnel_army               | Army personnel involved in firefighting operations                     |
| personnel_other_forces       | Other forces that contributed to firefighting                          |
| vehicles_fire_vehicles       | Fire trucks and other firefighting vehicles                            |
| vehicles_municipal_vehicles  | Municipal vehicles involved in firefighting operations                 |
| vehicles_tanker_trucks       | Tanker trucks used to transport water for firefighting                 |
| vehicles_machinery           | Heavy machinery used in fire response                                  |
| airborne_helicopters         | Helicopters used in aerial firefighting                                |
| airborne_aircraft_cl415      | CL-415 aircraft used for water bombing in firefighting                 |
| airborne_aircraft_cl215      | CL-215 aircraft used for aerial firefighting                           |
| airborne_aircraft_pzl        | PZL aircraft used for water bombing in firefighting                    |
| airborne_aircraft_gru        | GRU aircraft used for fire intervention                                |
| airborne_hired_helicopters   | Hired helicopters used for firefighting                                |
| airborne_hired_airplanes     | Hired airplanes used for aerial firefighting                           |
| start_at                     | Start date and time of the incident                                    |
| end_at                       | End date and time of the incident                                      |
| start_hour                   | Start hour of the incident (only the hour)                             |
| end_hour                     | End hour of the incident (only the hour)                               |
| service_full                 | Full description of the service                                        |

**NOTE** - 1 stremma = 1,000 m² = 0.1 hectrares. Greece has a total of 1.7 million hectares of forested area.