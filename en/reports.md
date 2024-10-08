---
layout: reports_en
title: "Reports"
description: "Discover Greece Through Data"
lang: "en"
permalink: /en/reports/
---

<!-- Hero Start -->
<section class="bg-half-100 bg-light-blue d-table w-100 pb-0">
    <div class="container">
        <div class="">
            <nav aria-label="breadcrumb" class="d-inline-block">
                <ul class="breadcrumb m-0 p-0">
                    <li class="breadcrumb-item"><a href="{{ site.baseurl }}/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Reports</li>
                </ul>
            </nav>
        </div>
        <div class="row mt-3 justify-content-start">
            <div class="col-lg-12">
                <div class="pages-heading">
                    <h4 class="title mb-0"> Reports </h4>
                </div>
            </div>  <!--end col-->
        </div><!--end row-->
    </div> <!--end container-->
</section><!--end section-->
<!-- Hero End -->
{% assign dashboards_data = site.data.dashboards[page.lang] %}

<!--Blog Lists Start-->
<section class="section pt-5">
    <div class="container">
        <div class="row">
            {% for item in dashboards_data.links %}
                     <div class="col-lg-6 col-12 mb-4 pb-2">
                                <div class="card blog blog-primary rounded border-0 shadow overflow-hidden">
                                    <div class="row align-items-center g-0">
                                        <div class="col-md-6">
                                            <img src="{{ site.baseurl }}/{{item.image_path}}" class="img-fluid" alt="">
                                        </div><!--end col-->
                                        <div class="col-md-6">
                                            <div class="card-body content">
                                                <h5><a href="javascript:void(0)" class="card-title title text-dark">{{ item.name }}</a></h5>
                                                <p class="text-muted mb-0">{{ item.description }}</p>
                                                <div class="post-meta d-flex justify-content-between mt-3">
                                                    <ul class="list-unstyled mb-0">
                                                    </ul>
                                                    <a href="{{ item.url }}" class="text-muted readmore">Read More <i class="uil uil-angle-right-b align-middle"></i></a>
                                                </div>
                                            </div>
                                        </div><!--end col-->
                                    </div> <!--end row-->
                                </div><!--end blog post-->
                            </div><!--end col-->
            {% endfor %}
        </div><!--end row-->
    </div><!--end container-->
</section><!--end section -->
<!--Blog Lists End-->