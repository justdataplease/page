---
layout: default
title: "Homepage"
description: "Discover Greece Through Data"
lang: "en"
permalink: /en/
---

<style>
body {
background:#F8F9FA;
}
</style>

<section class="bg-half-260 d-table w-100" style="background: url('{{ site.baseurl }}/assets/bg.webp') center center;">
    <div class="bg-overlay"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <div class="title-heading mt-4">
                    <div class="content">
                        <h1 style="color:white;">Discover Greece<br> through data.</h1>
                        <br>
                        <a class="btn-custom" href="https://dataforgreececom.substack.com/subscribe" method="get" target="_blank">Follow us</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div> <!--end container-->

</section><!--end section-->
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
                            <h2 class="mb-4">Datasets</h2>
                            <p class="text-muted mx-auto para-desc">Discover ready-to-use datasets about Greece's social, economic, and political life. Perfect for anyone to conduct their own analysis.
                             <br><a href="/en/data-directory">Explore More &rarr;</a></p>                        
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

</section>

<!--
<section class="border-bottom pb-5 bg-light">
 <div class="container pb-5" style="padding-top:70px;">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-2">
                            <h2 class="mb-4">Reports</h2>
                        <p class="text-muted mx-auto para-desc">Explore Greece's data with our easy-to-use interactive dashboards—just click to discover trends and insights across the country's social, economic, and political life.
                        <br><a href="/en/reports">Explore More &rarr;</a></p>
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
                                                        <a href="{{ site.baseurl }}{{ item.url }}" class="text-muted readmore"><strong>Read More <i class="uil uil-angle-right-b align-middle"></i></strong></a>
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
