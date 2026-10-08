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
description_detailed: "The General Commercial Registry (GEMI) in three tables. The first holds every registered company, head offices and branches, active or not, with legal form, status, incorporation date, seat (municipality, regional unit, region, postal code), main activity in KAD 2026 and KAD 2008, capital and filed financial statements. The second holds the registry's events by day: registrations and dissolutions or deletions since November 2024, and alterations over the last 90 days. The third holds every activity (main and secondary) of every company. GEMI publishes the data on businessportal.gr under the ODC-BY 1.0 licence, which asks for attribution to “GEMI”."
description_preprocess: "We combine the two sources of the same registry: the Open Data API (every company with a tax number, with the history of its activity codes) and the publicity portal (also the companies without a tax number, the daily events and the detailed record of each company). For each company we keep the newest read (name, status, address) and give every code (legal forms, statuses, municipalities, regional units, chambers) Greek and English labels. Older activity codes are mapped to KAD 2008, and KAD 2008 to KAD 2026 using the conversion the registry itself made on 1 March 2026, so every company has one sector. Capital in drachmas is converted to euros (340.75), while obvious errors (above 10 billion) and the capital of branches are left out of totals. For deleted sole proprietorships, whose address the registry has withdrawn, we keep only the city, postal code and municipality; names of people and the tax numbers of natural persons are not published. Each company is counted once, at its head office (is_head_office), and the events of the last few days are provisional (day_settled)."
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
