---
layout: default
title: "Αρχική"
description: "Aνακάλυψε την Ελλάδα μέσα από δεδομένα"
lang: "gr"
permalink: /
---

<style>
body {
background:#F8F9FA;
}
</style>

<section class="bg-half-260 d-table w-100" style="background: url('{{ site.baseurl }}/assets/bg-3.webp') center center;">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <div class="title-heading mt-4">
                    <h1 style="color:white;">Ανακάλυψε την Ελλάδα<br> μέσα από δεδομένα.</h1>
                    <br>
                        <a class="btn-custom me-0 me-md-2" href="https://dataforgreece.substack.com/subscribe" method="get" target="_blank">
                            Ακολούθησέ μας
                        </a>
                        <a class="btn-custom ms-0 ms-md-2 mt-3 mt-md-0" href="https://forms.gle/Wq449G9WeDgTkj2SA" method="get" target="_blank">
                             &nbsp;&nbsp;&nbsp;Βοήθησέ μας&nbsp;&nbsp;&nbsp;
                        </a>
                </div>
            </div>
        </div>
    </div>

</section>
<div class="position-relative">
    <div class="shape overflow-hidden text-color-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#F8F9FA"></path>
        </svg>
    </div>
</div>



<section class="pb-2 bg-light">
 <div class="container pb-3" style="padding-top:60px;">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-2">
                            <h2 class="mb-4">Συλλογή Δεδομένων</h2>
                            <p class="text-muted mx-auto para-desc">Ανακαλύψτε έτοιμα προς χρήση σύνολα δεδομένων για την κοινωνική, οικονομική και πολιτική ζωή της Ελλάδας. Ιδανικά για όποιον θέλει να διεξάγει τη δική του ανάλυση.
                            <br><a href="/data-directory">Ανακαλύψτε Περισσότερα &rarr;</a></p>
                            </div>
                    </div><!--end col-->
                </div><!--end row-->
                <div class="row justify-content-center pt-3">
                    <div class="col-lg-12">
                        <div class="tiny-two-item">
                                {% for item in site.data_directory %}
                                {% if item.lang == page.lang %}
                                    <div class="tiny-slide">
                                            <div class="card blog blog-primary rounded border-0 shadow overflow-hidden">
                                                <div class="row align-items-center g-0">
                                                    <div class="col-md-6">
                                                        <img src="{{ site.baseurl }}/{{ item.image_path | default: 'assets/posts/default-blog-cover.webp' }}" class="img-fluid w-100 h-100" alt="">
                                                    </div><!--end col-->
                                                    <div class="col-md-6">
                                <div class="card-body content">
                                    <h5><a href="javascript:void(0)" class="card-title title text-dark">{{ item.title }}</a></h5>
                                    <div class="post-meta d-flex justify-content-start align-items-center mt-3">
                                        <ul class="list-unstyled mb-0">
                                        </ul>
                                        <a href="{{ site.baseurl }}{{ item.url }}" class="text-muted readmore">
                                            {% if page.lang == 'en' %}Read More{% else %}Διάβασε Περισσότερα{% endif %}
                                            <i class="uil uil-angle-right-b align-middle"></i></a>
                                    </div>
                                </div>
                                                    </div><!--end col-->
                                                </div> <!--end row-->
                                            </div><!--end blog post-->
                                    </div>
                                {% endif %}
                                {% endfor %}
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
<!--end container-->
</section>

<!--
<section class="border-bottom pb-5 bg-light">
 <div class="container pb-5" style="padding-top:70px;">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-2">
                            <h2 class="mb-4">Πίνακες Δεδομένων</h2>
                            <p class="text-muted mx-auto para-desc">Εξερευνήστε τα δεδομένα της Ελλάδας μέσα απο διαδραστικούς πίνακές δεδομένων — απλά κάντε κλικ για να ανακαλύψετε τάσεις και πληροφορίες σχετικά με την κοινωνική, οικονομική και πολιτική ζωή της χώρας.
                                <br><a href="/reports">Ανακαλύψτε Περισσότερα &rarr;</a></p>      
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center pt-3">
                    <div class="col-lg-12">
                        <div class="tiny-two-item">
                                {% for item in site.reports %}
                                {% if item.lang == page.lang %}
                                    <div class="tiny-slide">
                                        <div class="d-flex m-2">
                                            <div class="card flex-1 content p-3 shadow rounded position-relative"> 
                                                <div class="row">
                                                <div class="col-6 sm-hide">
                                                <a href="{{ site.baseurl }}{{ item.url }}"><img src="{{ site.baseurl }}/{{ item.image_path | default: 'assets/posts/default-blog-cover.webp' }}" class="w-100" alt=""></a>
                                                </div>
                                                <div class="col-12 col-lg-6" style="display: flex; flex-direction: column; height: 100%;">
                                                    <h6><a href="{{ site.baseurl }}{{ item.url }}" class="h5 title text-dark">{{ item.title }}</a></h6>
                                                    <p class="text-muted mt-2">{{ item.description }}</p>
                                                    <div style="margin-top: auto;">
                                                        <a href="{{ site.baseurl }}{{ item.url }}" class="text-muted readmore"><strong>Μάθετε Περισσότερα <i class="uil uil-angle-right-b align-middle"></i></strong></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {% endif %}
                                {% endfor %}
                        </div>
                    </div>
                </div>
            </div>

</div>

</section>-->