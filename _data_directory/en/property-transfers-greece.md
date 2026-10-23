---
title: Property transfer contracts
slug: property-transfers-greece
description: "Property transfer contracts from the Ministry of Finance register: declared price, area, age and place, next to the asking prices"
category: Prices & cost of living
date: 2026-10-23
published_by: "DataForGreece"
last_update: "2026-10-23"
date_added: "2026-10-23"
data_dates: "2017/02 - 2026/10"
source_name: "Ministry of Finance (AADE),DataForGreece"
source_url: "https://www.gsis.gr/sites/default/files/akinhta/mhtrwo-ax-met-ak-2025.xlsx,https://dataforgreece.gr/en/data/real-estate/"
description_detailed: "Every property transfer contract from the Ministry of Finance register: the municipality, the property category, the area, the year of construction, the floor, the zone price and the declared price. For homes, the price per m² next to the asking prices of our listings, apartments with apartments and detached houses with detached houses. Updated every month."
description_preprocess: "We download every file of the register each month, because the current year grows and older ones are corrected. It has no names or addresses. The price is the declared price of the right that was sold, not an estimate and not an asking price."
image_path: assets/posts/topic-real-estate.webp
---

| **Column**                                             | **Column (English)**        | **Description** |
|--------------------------------------------------------|-----------------------------|-----------------|
| prefecture, municipality, district                     | Place                       | The prefecture, the municipality and the municipal or community district of the property. |
| property_category, category_group                      | Property category           | Dwelling, detached house, plot, storage, shop, parking space and others, with a group for comparison. |
| main_area_sqm, aux_area_sqm, plot_area_sqm             | Area                        | Main and auxiliary spaces and plot, in m². |
| construction_year_clean, floor                         | Year built and floor        | The year of construction, when believable, and the floor of the dwelling. |
| zone_price_eur_sqm                                     | Zone price                  | The objective value of the property's zone, in € per m², as the register states it. |
| building_right_type, building_share_pct                | Right                       | Full or bare ownership or usufruct, and what share of the property was sold. |
| contract_date                                          | Contract date               | The day the contract was signed. |
| price_eur, price_per_sqm_eur                           | Price                       | The declared price of the right and, for homes in full ownership, the price per m². |
| home_type, asking_sqm_median_eur, asking_over_contract_pct | The listings next to it | The median asking price per m² of our listings for the same area, year and type of home (apartments or detached houses), and how far above the contracts it is. |

**NOTE** - Source: Ministry of Finance (AADE), register of property transfers, processed by DataForGreece; asking prices are our own collection of listings. The price is the one declared in the contract, not an estimate or an asking price, and a share or bare ownership sells for less than the property. Municipalities are compared with the listings only when their name is the same in both sources.
