---
title: Property auctions
slug: auctions-greece
description: "Property auctions from our market data: starting price, result and the market next to them"
category: Prices & cost of living
date: 2026-10-22
published_by: "DataForGreece"
last_update: "2026-10-22"
date_added: "2026-10-22"
data_dates: "2025/07 - 2027/06"
source_name: "DataForGreece"
source_url: "https://dataforgreece.gr/en/data/real-estate/"
description_detailed: "Property auctions from our market data, with their eauction.gr code: when the auction is held, which round it is, the starting price, and the type, size and area of the property. Next to every home, the median asking price of the sale listings we collect. Updated every week."
description_preprocess: "We collect the auctions every week, along with the listings, and keep every snapshot. We do not see the result, so we infer it from whether the property is withdrawn or comes back in a new round. Do not read the starting price as a sale price."
image_path: assets/posts/topic-real-estate.webp
---

| **Column**                                             | **Description** |
|--------------------------------------------------------|-----------------|
| eauction_code, lot_number                              | The auction's code on eauction.gr and the property within it. |
| auction_date, property_round_seq                       | When the auction is held and how many times the same property has been offered. |
| starting_price_eur, starting_price_sqm_eur             | The least a bidder can offer, in total and per square metre. |
| property_type_el, size_sqm, build_year                 | Apartment, house, shop or land, with its size and year of construction. |
| municipality_gr, regional_unit_gr, region_gr           | The municipality, prefecture and region, with the same borders as our listings. |
| creditor_el, creditor_type_el                          | The bank or servicer that pursues the auction; private individuals are not named. |
| outcome_group_el                                       | Probable adjudication, no buyer, postponed, withdrawn or still to come. |
| market_median_price_sqm_eur, starting_discount_pct     | Our market data: the median asking price per square metre of our listings for the same type and area, and how far below it the auction starts. |

**NOTE** - Source: our market data, the auctions and the sale listings we collect. We do not see the final price of each auction, so we compare the starting price and the result is an inference, not an official figure. We do not collect every auction in the country.
