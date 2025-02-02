---
title: Προϋπολογισμός Δήμου Αθηναίων
slug: athens-municipality-budget
description: Προϋπολογισμός Δήμου Αθηναίων
category: Οικονομία
date: 2024-10-20
download_url: https://github.com/justdataplease/dataforgreece/raw/refs/heads/main/data/athens-municipality-budget/athens-municipality-budget-greece_2024.csv.zip

published_by: "DataForGreece"
last_update: "2024-10-20"
date_added: "2024-10-20"
data_dates: "2005/01 - 2024/10"
source_name: "Δήμος Αθηναίων"
source_url: "https://old.cityofathens.gr/khe/proypologismos"
contributed_by: "Adam Markakis"
contributed_by_url: "https://www.linkedin.com/in/amarkakis"

chart_id: "athens-municipality-budget"
description_detailed: "Αυτό το σύνολο δεδομένων παρέχει λεπτομερείς πληροφορίες για τον προϋπολογισμό και τις δαπάνες του Δήμου Αθηναίων από το 2005 έως το 2024. Περιλαμβάνει τις αρχικές κατανομές προϋπολογισμού,
αναμορφώσεις, δεσμευθέντα ποσά, ενταλθέντα και πληρωθέντα ποσά ανά υπηρεσία. Τα δεδομένα αφορούν έξοδα όπως νομικές αμοιβές, προμήθειες γραφείου, έξοδα δημοσίων σχέσεων και συντήρηση εξοπλισμού."
description_preprocess: "Τα δεδομένα κατέβηκαν και συνδυάστηκαν σε ένα αρχείο."
description_data_access_sql_bigquery: "SELECT * FROM dataforgreece.public_data.athens_municipality_budget_v"
image_path: assets/posts/athens.webp
---

| **Στήλη**    | **Στήλη (Ελληνικά)** | **Περιγραφή**                                                         |
|------------------------|----------------------|-----------------------------------------------------------------------|
| year                   | ΈΤΟΣ                 | Το έτος καταγραφής του προϋπολογισμού και των δαπανών                 |
| department_office       | ΔΙΕΥΘΥΝΣΗ            | Η διεύθυνση ή το τμήμα του δήμου που είναι υπεύθυνο για τη δαπάνη     |
| code                   | ΚΩΔΙΚΟΣ              | Μοναδικός κωδικός για κάθε εγγραφή του προϋπολογισμού                 |
| title                  | ΤΙΤΛΟΣ               | Περιγραφή της συγκεκριμένης δαπάνης ή έργου                           |
| amount                 | ΠΟΣΟ                 | Αρχικό ποσό προϋπολογισμού που διατέθηκε για τη δαπάνη                |
| adjustment             | ΑΝΑΜΟΡΦΩΣΗ           | Αναμορφώσεις ή αναθεωρήσεις που έγιναν στο αρχικό ποσό προϋπολογισμού |
| final_budget           | ΔΙΑΜΟΡΦΩΣΗ           | Τελικό ποσό προϋπολογισμού μετά τις αναμορφώσεις                      |
| committed_funds        | ΔΕΣΜΕΥΘΕΝΤΑ          | Ποσό που δεσμεύτηκε για τη δαπάνη                                     |
| authorized_payments    | ΕΝΤΑΛΘΕΝΤΑ           | Ποσά που εξουσιοδοτήθηκαν για πληρωμή                                 |
| payments_made          | ΠΛΗΡΩΘΕΝΤΑ           | Ποσά που πληρώθηκαν για τη συγκεκριμένη δαπάνη                        |
| certified_revenues     | ΒΕΒΑΙΩΘΕΝΤΑ          | Έσοδα που έχουν βεβαιωθεί από τον δήμο (αν υπάρχει εφαρμογή)          |
| collected_revenues     | ΕΙΣΠΡΑΧΘΕΝΤΑ         | Έσοδα που έχουν εισπραχθεί (αν υπάρχει εφαρμογή)                      |
| args_year              | args_year            | -                                                                     |
| args_pro_cdief         | args_pro_cdief       | -                                                                     |
| args_pro_esex          | args_pro_esex        | -                                                                     |


