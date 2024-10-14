---
title: Forest Fires in Greece
slug: forest-fires-greece
description: Forest Fires in Greece
date: 2024-10-14
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/fires-greece/forest-fires-combined-greece_2023.csv?download=
---

## Environment  
### Forest Fire Incidents

| **Published by**     | Hellenic Fire Service                                 |
|----------------------|------------------------------------------------------|
| **Last Update**       | 2024-10-14                                                 |
| **Date Added**        | 2024-10-14                                           |
| **Category**          | Environment              |
| **Data Dates**        | 2000/01 - 2023/12                                    |
| **Source**               | [Hellenic Fire Service Dataset](https://www.fireservice.gr/el_GR/synola-dedomenon) |

### Data Description
The dataset provides information on forest and urban fire incidents where the Hellenic Fire Service (HFS) intervened. The data is available in a machine-readable format, and is governed by the terms of Annex C of the related circular (ADA: ΩΩΡΜΧ-ΜΒΛ). The terms include attribution to the creator, non-commercial use, and sharing alike.

### Data Preprocessing
The individual files are merged into a single dataset and cleaned to ensure consistency. Additionally, several helper columns are added to facilitate the analysis.

### Definitions for Dataset

| **Column**                        | **Description**                                                             |
|------------------------------------|-----------------------------------------------------------------------------|
| burned_forest_area                 | Forested areas that were affected by fire                                   |
| burned_groves                      | Small forested areas or groves affected by fire                             |
| burned_grassland_areas             | Grasslands that were affected by fire                                       |
| burned_reeds_marshes               | Marshlands and reed-covered areas burned                                    |
| burned_agricultural_areas          | Agricultural lands that were affected by fire                               |
| burned_crops_residues              | Leftover crops and residues from farming affected by fire                   |
| burned_landfills                   | Landfill or waste disposal sites affected by fire                           |
| personnel_fire_brigade             | Firefighters from the fire brigade involved in firefighting operations       |
| personnel_infantry_divisions       | Infantry units involved in fire operations                                  |
| personnel_volunteers               | Volunteers assisting in firefighting operations                             |
| personnel_army                     | Army personnel involved in firefighting operations                          |
| personnel_other_forces             | Other forces that contributed to firefighting                               |
| vehicles_fire_vehicles             | Fire trucks and other firefighting vehicles                                 |
| vehicles_municipal_vehicles        | Municipal vehicles involved in firefighting operations                      |
| vehicles_tanker_trucks             | Tanker trucks used to transport water for firefighting                      |
| vehicles_machinery                 | Heavy machinery used in fire response                                       |
| airborne_helicopters               | Helicopters used in aerial firefighting                                     |
| airborne_aircraft_cl415            | CL-415 aircraft used for water bombing in firefighting                      |
| airborne_aircraft_cl215            | CL-215 aircraft used for aerial firefighting                                |
| airborne_aircraft_pzl              | PZL aircraft used for water bombing in firefighting                         |
| airborne_aircraft_gru              | GRU aircraft used for fire intervention                                     |
| airborne_hired_helicopters         | Hired helicopters used for firefighting                                     |
| airborne_hired_airplanes           | Hired airplanes used for aerial firefighting                                |
