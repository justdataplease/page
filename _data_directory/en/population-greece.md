---
title: Population of Greece by age and sex
slug: population-greece
description: The population of the country and its 13 regions by age and sex, international migration and the historical censuses
category: Society
date: 2026-10-07
published_by: "DataForGreece"
last_update: "2026-10-07"
date_added: "2026-10-07"
data_dates: "2001 - 2025 · historical 1821 - 2011"
source_name: "ELSTAT – Population estimates,ELSTAT – Migration,ELSTAT – Historical censuses,Ministry of the Interior"
source_url: "https://www.statistics.gr/en/statistics/-/publication/SPO18/-,https://www.statistics.gr/en/statistics/-/publication/SPO15/-,https://www.statistics.gr/en/census_priv_results_1821-2021,https://ekloges.ypes.gr"
description_detailed: "The population of Greece by sex and five-year age group (18 groups, the last one 85+) on 1 January of each year, from ELSTAT's annual estimates: for the whole country from 2001 to 2025, and for each of the 13 regions from 2011 to 2025. Each year comes with ready-made indicators: the shares aged 0–14 and 65+, the median and the most common age group, the old-age dependency ratio and the change from the previous year. It also includes international migration (people who moved to and left the country, by sex and age, 2008–2024), the population balance of each year, 21 historical milestones from 1821 to 2011 and, for the elections from 2012 onwards, the registered voters and ballots cast in each region next to its residents. On 1 January 2025 Greece had 10,372,335 residents, 3,429 fewer than a year earlier; 23.7% were 65 or older and 12.8% under 15."
description_preprocess: "ELSTAT's population and migration Excel files are downloaded in full at every update, because ELSTAT revises its estimates inside the same files, and every edition is archived. The source's total rows are kept only for checking: if an age group, a sex or a region is missing, or the groups do not add up to the total, the whole update is rejected. In the regions the 85–89, 90–94, 95–99 and 100+ groups are merged into 85+, so they compare with the country, and the regions are matched to the same codes as the election data. The national figures were checked independently against Eurostat (all 900 identical) and the regional ones on 186 comparable values (185 identical, one off by three people); ELSTAT's figure is always kept. Each year's balance splits the change in population into net international migration and a remainder, “natural change and adjustments”; for 2024: −3,429 = +54,135 − 57,564. The historical milestones are transcribed as ELSTAT publishes them, with no interpolated years or ages; 1838 is left out as doubtful. No exact mean age is calculated, because ages come in five-year groups."
image_path: assets/topic-population-athens.jpg
---

| **Column**           | **Description**                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| year                 | Reference year: population on 1 January; migration during the year.                                            |
| geo_code, geo_name   | Code and name of the country (EL) or the region.                                                                |
| geo_level            | country or region; filter on it before adding up areas.                                                          |
| sex                  | M (men) or F (women).                                                                                           |
| age_group            | Five-year age group, 0-4 to 85+ (age_min, age_max: its bounds).                                                  |
| population_count     | Residents of the area, sex and age group (or in total, in the indicator tables).                                 |
| share_of_population  | The group as a share of the whole population of the area and year.                                              |
| share_age_0_14, share_age_65_plus | Share of children and of older people in the population.                                           |
| median_age_band      | The age group the median resident falls in (modal_age_band: the largest group).                                  |
| old_age_dependency_per_100 | Residents aged 65+ per 100 residents aged 15–64.                                                          |
| population_change_yoy | Difference from 1 January of the previous year.                                                                |
| population_index_baseline_100 | Population relative to the first year of the series (2001 for the country, 2011 for the regions).     |
| measure, migrant_count | immigration or emigration, and the number of people, by sex and age.                                          |
| net_international_migration | Immigration minus emigration during the year.                                                            |
| natural_change_and_adjustments | The rest of the change: births minus deaths, together with statistical adjustments.                    |
| observation_type     | Historical milestones: census_count or retrospective_estimate (1821).                                            |
| registered, voted, resident_population | Registered voters, ballots cast and residents of the region in the election year.              |
| source_url, archive_uri | The ELSTAT file the value comes from, and the copy we keep.                                                  |

**NOTE** - Seven tables: population_pyramid (area × year × sex × age group), national_indicators and regional_indicators (one year per row), migration_age_sex, population_components (each year's balance), historical_population (1821–2011) and election_demographics (election × region). The resident population is not the electoral roll. A region's change in population does not show how many people moved between regions: it includes births, deaths, international and internal migration. 1821 is a retrospective estimate made at the 1828 census, and the historical milestones refer to a different territory each time.
