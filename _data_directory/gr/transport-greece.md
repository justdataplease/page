---
title: Μεταφορές στην Ελλάδα και την ΕΕ
slug: transport-greece
description: "Πόσοι παίρνουν το μετρό και τα λεωφορεία της Αθήνας κάθε μέρα, και πώς μετακινούνται άνθρωποι και εμπορεύματα στην Ελλάδα δίπλα στην ΕΕ"
category: Επιχειρήσεις & τουρισμός
date: 2026-10-22
published_by: "DataForGreece"
last_update: "2026-10-22"
date_added: "2026-10-22"
data_dates: "ΟΑΣΑ κάθε μέρα 2020/09 - σήμερα · Eurostat κάθε χρόνο 1990 - 2025"
source_name: "ΟΑΣΑ – Επιβατικό κοινό (data.gov.gr),Eurostat – Επιβάτες σιδηροδρόμων (rail_pa_total),Eurostat – Επιβάτες σιδηροδρόμων ανά τρίμηνο (rail_pa_quartal),Eurostat – Μετακινήσεις ανά μέσο (tran_hv_psmod),Eurostat – Εμπορεύματα ανά μέσο (tran_hv_frmod),Eurostat – Θύματα σιδηροδρομικών ατυχημάτων (tran_sf_railvi)"
source_url: "https://data.gov.gr/dataset/oasa_ridership,https://ec.europa.eu/eurostat/databrowser/view/rail_pa_total/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/rail_pa_quartal/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_hv_psmod/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_hv_frmod/default/table?lang=en,https://ec.europa.eu/eurostat/databrowser/view/tran_sf_railvi/default/table?lang=en"
description_detailed: "Οι επικυρώσεις εισιτηρίων στο μετρό, στα λεωφορεία, στο τραμ και στον προαστιακό της Αθήνας, κάθε μέρα, ανά σταθμό και ώρα. Δίπλα τους οι επιβάτες των τρένων σε όλη τη χώρα, το μερίδιο του αυτοκινήτου, του λεωφορείου και του τρένου στις μετακινήσεις και τα σιδηροδρομικά ατυχήματα, σε σύγκριση με την ΕΕ."
description_preprocess: "Τις επικυρώσεις τις παίρνουμε κάθε μέρα από τα ανοιχτά δεδομένα του ΟΑΣΑ, βάζουμε την ώρα Αθήνας και αφήνουμε έξω τις μέρες με ελλιπή ή διπλά στοιχεία. Τα υπόλοιπα έρχονται από τη Eurostat και ενημερώνονται αυτόματα."
image_path: assets/posts/athens.webp
---

| **Στήλη**                     | **Στήλη (Ελληνικά)**       | **Περιγραφή** |
|-------------------------------|----------------------------|---------------|
| service_date, month           | Ημέρα, μήνας               | Η ημέρα λειτουργίας και ο μήνας της. |
| mode, mode_name_gr            | Μέσο                       | Μετρό, λεωφορεία και τρόλεϊ, τραμ ή προαστιακός. |
| validations, entries, exits   | Επικυρώσεις                | Όσες φορές χτύπησε εισιτήριο ή κάρτα· στο μετρό μετρώνται και οι έξοδοι. |
| station, lines                | Σταθμός, γραμμές           | Ο σταθμός του μετρό και οι γραμμές που περνούν από εκεί. |
| local_hour, day_type_gr       | Ώρα, τύπος ημέρας          | Η ώρα Αθήνας και αν είναι καθημερινή, Σάββατο ή Κυριακή. |
| is_reliable_day               | Αξιόπιστη ημέρα            | Ψευδές για τις μέρες με κενά ή παράξενα νούμερα στην πηγή. |
| dataset, series_name_gr       | Πίνακας, σειρά             | Ο πίνακας της Eurostat και τι μετρά, π.χ. «Επιβάτες τρένων». |
| geo, geo_name_gr, period_date | Χώρα, έτος                 | Η Ελλάδα, η ΕΕ ή κάθε κράτος μέλος, και το έτος. |
| value                         | Τιμή                       | Η τιμή της πηγής: επιβάτες, ποσοστό ή αριθμός θυμάτων. |

**ΣΗΜΕΙΩΣΗ** - Πηγές: ΟΑΣΑ μέσω data.gov.gr και Eurostat. Οι επικυρώσεις δεν είναι επιβάτες: στα λεωφορεία πολλοί δεν χτυπούν εισιτήριο, και όταν ο ΟΑΣΑ άλλαξε τη ροή των δεδομένων, τα λεωφορεία και το τραμ δεν συγκρίνονται πια με τα παλιότερα νούμερα. Τα στοιχεία επαναχρησιμοποιούνται ελεύθερα με αναφορά της πηγής· της Eurostat τα μεταφράσαμε και τα αναδιατάξαμε εμείς και η Eurostat δεν ευθύνεται για τις αλλαγές.
