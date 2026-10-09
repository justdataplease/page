---
title: Businesses in the GEMI registry
slug: gemi-businesses
description: Every company in the General Commercial Registry, new registrations and closures
category: Economy
date: 2026-10-07
published_by: "DataForGreece"
last_update: "2026-10-02"
date_added: "2026-10-07"
data_dates: "Registry 2026/10 · events 2024/11 - 2026/10"
source_name: "GEMI – Open data,GEMI – Publicity portal"
source_url: "https://opendata.businessportal.gr,https://publicity.businessportal.gr"
description_detailed: "The General Commercial Registry (GEMI): every registered company with its legal form, status, incorporation date, seat, sector and capital, the new registrations and closures every day, and every activity of every company. GEMI publishes the data under a licence that asks for attribution to “GEMI”."
description_preprocess: "We combine the two public sources of the same registry and keep the latest picture of each company. Each company counts once, at its head office, and gets one sector in today's classification. Names and tax numbers of individuals are not published."
image_path: assets/topic-businesses-ethniki.jpg
---

| **Column**             | **Description**                                                                                                |
|------------------------|----------------------------------------------------------------------------------------------------------------|
| ar_gemi                | The GEMI number, the table's key; the last three digits are the branch number.                                 |
| is_head_office         | TRUE for the head office (branch 000); filter on it to count companies rather than GEMI numbers.               |
| name, name_en          | Company name in Greek and in Latin script, as registered.                                                      |
| legal_type_en          | Legal form in English; legal_type in Greek (ΑΕ, ΕΠΕ, ΙΚΕ, ΟΕ, ΕΕ, sole proprietorship, etc.).                  |
| legal_type_group_en    | Sole proprietorship, capital company, partnership, cooperative, non-profit & social, other.                    |
| status_en              | Registry status (active, deleted, dissolved, etc.); status in Greek.                                           |
| status_group_en        | Active, deleted / dissolved, financial distress, dormant / suspended, other.                                    |
| status_observed_on     | The day the status was read: how fresh it is.                                                                  |
| incorporation_date     | Date of incorporation or start (incorporation_year: the year).                                                 |
| registration_event_date, closing_event_date | Day of the registration or of the dissolution / deletion in the daily events (since November 2024). |
| zip_code, city         | Postal code and city of the seat.                                                                              |
| municipality_en, regional_unit_en, region_en | Administrative location of the seat (in Greek without _en).                                     |
| gemi_office_en         | The chamber or GEMI office the company is registered with.                                                      |
| main_kad_2026, main_kad_2026_descr_en | Main activity code in KAD 2026 and its description.                                              |
| kad_2026_section, kad_2026_section_label | KAD 2026 section (letter) of every company with a main activity code: the column for sector breakdowns. |
| main_kad_2008          | Main KAD 2008 code as published, with its hierarchy (main_kad_2008_level_1 to _3).                              |
| n_activities           | Number of activities (main and secondary).                                                                     |
| capital_eur            | Capital in euros, the column to sum (not capital, which is in its own currency).                               |
| n_financial_periods, last_financial_year | How many financial years have been filed, and the last one.                                   |
| has_website            | Whether the company lists a website.                                                                           |

**NOTE** - Three tables: gemi_companies (one row per GEMI number), gemi_events (one row per company, event type and day: event_type = registration, closing or alteration, event_date) and gemi_company_activities (one row per company and activity: kad_code, activity_type, kad_2026_section). The last two join the first on ar_gemi.
