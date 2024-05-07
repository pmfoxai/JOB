<template>
  <div>
    <!-- Header area start here -->
    <header class="header-area">
      <div class="container header__container">
        <div class="header__main">
          <a href="index.html" class="logo">
            <img src="../assets/images/logo/logo-white.svg" alt="logo" />
          </a>
          <div class="main-menu">
            <nav>
              <ul>
                <li class="has-megamenu">
                  <a href="/">Home</a>
                  <ul class="sub-menu mega-menu menu-image">
                    <li>
                      <div class="image text-center">
                        <img src="../assets/images/menu/home1-image.jpg" alt="image" />
                        <div class="btn__group">
                          <a href="index.html" class="btn-one">Multi Page</a>
                          <a href="index-one-page.html" class="btn-one mt-2">One Page</a>
                        </div>
                        <h6 class="text-white">Home Page 01</h6>
                      </div>
                      <div class="image text-center">
                        <img src="../assets/images/menu/home2-image.jpg" alt="image" />
                        <div class="btn__group">
                          <a href="index-2.html" class="btn-one">Multi Page</a>
                          <a href="index-2-one-page.html" class="btn-one mt-2"
                            >One Page</a
                          >
                        </div>
                        <h6 class="text-white">Home Page 02</h6>
                      </div>
                      <div class="image text-center">
                        <img src="../assets/images/menu/home3-image.jpg" alt="image" />
                        <div class="btn__group">
                          <a href="index-3.html" class="btn-one">Multi Page</a>
                          <a href="index-3-one-page.html" class="btn-one mt-2"
                            >One Page</a
                          >
                        </div>
                        <h6 class="text-white">Home Page 03</h6>
                      </div>
                      <div class="image text-center">
                        <img src="../assets/images/menu/home4-image.jpg" alt="image" />
                        <div class="btn__group">
                          <a href="index-dark.html" class="btn-one">View Page</a>
                        </div>
                        <h6 class="text-white">Home Dark</h6>
                      </div>
                    </li>
                  </ul>
                </li>
                <li><router-link to="about">About</router-link></li>
                <li>
                  <a href="#0">Services</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="service-solutions">IT Solutions</a>
                    </li>
                    <li>
                      <a href="service.html">IT Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Pages</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="case.html">Case Study 01</a>
                    </li>
                    <li>
                      <a href="case-2.html">Case Study 02</a>
                    </li>
                    <li>
                      <a href="case-details.html">Case Study Details</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="error.html">404 Error</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Blog</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="blog.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li class="ml-20 d-none d-lg-block">
                  <a class="search-trigger" href="#0"
                    ><svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_307_344)">
                        <path
                          d="M16.0375 14.9381L12.0784 11.0334C13.0625 9.86621 13.6554 8.36744 13.6554 6.73438C13.6554 3.02103 10.5925 0 6.82774 0C3.0629 0 0 3.02103 0 6.73438C0 10.4475 3.0629 13.4683 6.82774 13.4683C8.4834 13.4683 10.0031 12.8836 11.1865 11.913L15.1456 15.8178C15.2687 15.9393 15.4301 16 15.5915 16C15.7529 16 15.9143 15.9393 16.0375 15.8178C16.2839 15.5748 16.2839 15.181 16.0375 14.9381ZM1.26142 6.73438C1.26142 3.70705 3.75845 1.24414 6.82774 1.24414C9.89695 1.24414 12.3939 3.70705 12.3939 6.73438C12.3939 9.76146 9.89695 12.2241 6.82774 12.2241C3.75845 12.2241 1.26142 9.76146 1.26142 6.73438Z"
                          fill="#0F0D1D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_307_344">
                          <rect width="16.2222" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="d-none d-lg-inline-block">
            <a href="contact.html" class="btn-one"
              >Get A Quote <i class="fa-regular fa-arrow-right-long"></i
            ></a>
          </div>
          <div class="bars d-block d-lg-none">
            <i id="openButton" class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
    <!-- Header area end here -->
  </div>
</template>

<script setup></script>
