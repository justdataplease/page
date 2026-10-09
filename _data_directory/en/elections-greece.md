---
title: Elections in Greece, 1974–2024
slug: elections-greece
description: "The results of every election since the restoration of democracy, at every level, with demographics"
category: Politics
date: 2026-10-07
published_by: "DataForGreece"
last_update: "2026-10-02"
date_added: "2026-10-07"
data_dates: "1974/11 - 2024/06"
source_name: "Ministry of the Interior,Hellenic Parliament,iMEdD Lab,ELSTAT,Eurostat"
source_url: "https://ekloges.ypes.gr,https://www.hellenicparliament.gr,https://lab.imedd.org,https://www.statistics.gr,https://ec.europa.eu/eurostat"
description_detailed: "Election results since the restoration of democracy: parliamentary, European, referendums, regional and municipal. For every election: registered voters, ballots cast, and every party's votes and seats, from the whole country down to the polling station where published. Alongside them are candidates' preference votes, the electoral rolls and the population of each area."
description_preprocess: "The results are collected from the Ministry of the Interior, Parliament and other official sources. For every election we keep one source, so no vote is counted twice; parties keep one name across the years and areas are matched to today's map. Every update checks that the totals agree."
image_path: assets/cover-syntagma.jpg
---

| **Column**       | **Description**                                                                                                  |
|------------------|------------------------------------------------------------------------------------------------------------------|
| election_id      | Election code `<date>_<type>`; a run-off has its own code.                                                        |
| election_date    | Election day.                                                                                                    |
| election_type    | national (parliamentary), euro (European Parliament), referendum, regional, municipal.                            |
| election_round   | 1, or 2 for a run-off.                                                                                           |
| region_code, district_code, regional_unit_code, municipality_code, municipal_unit_code, station_code | Codes of the region, electoral district, regional unit, municipality, municipal unit and polling station, depending on the table. |
| registered       | Registered voters of the area (repeated on every party row).                                                      |
| voted            | Ballots cast.                                                                                                    |
| valid            | Valid ballots.                                                                                                   |
| invalid, blank   | Invalid and blank ballots.                                                                                       |
| turnout_pct      | Ballots cast / registered × 100.                                                                                 |
| party_code       | One party code across all years (ND, PASOK, SYRIZA, KKE, etc.); empty for local tickets.                         |
| party_name_el    | Party name in Greek (local elections: the ticket's name); party_name_en in English.                               |
| party_family     | E.g. conservative, social_democratic, radical_left, communist; local_ticket for local tickets.                    |
| head_candidate   | Local elections: the ticket's mayor or governor candidate.                                                        |
| votes            | Votes of the party in the area (they add up within one election and one table).                                   |
| vote_share_pct   | Votes / valid ballots × 100.                                                                                     |
| seats_total      | Seats won (parliamentary elections: including the State list).                                                    |
| electorate_male, electorate_female | Registered men and women (electoral rolls, from 2009).                                          |
| population_eurostat | Resident population on 1 January of the election year.                                                        |
| is_derived       | TRUE when the total was summed from a lower level because the source does not publish it.                          |
| source, basis    | Which source the row comes from and how it was obtained (published, sum_of_stations, etc.).                       |

**NOTE** - One table per level: ekloges_national, ekloges_region, ekloges_district, ekloges_regional_unit, ekloges_municipality, ekloges_municipal_unit, ekloges_polling_station, plus ekloges_candidates for preference votes (candidate_name, preference_votes). Registered voters, ballots cast and the demographics repeat on every party row: count them once per area, never as a sum of the rows.
