<template>
    <div class="footer">
        <div class="logo">
            <h2>
                LIFELINE GROUP OF COMPANIES
            </h2>
        </div>
        <div class="row location ">
            <div class="col-lg-7">
                <div class="row mt-5">
                    <div class="col-lg-5 ">
                        <div class="row mb-3">
                            <div class="col-lg-1 ">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="col-lg-9 address ms-3">
                                No.13, HlaingMyintHmo 7 th St, Hlaing  Township, Yangon
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-1 ">
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            <div class="col-lg-9 address ms-3">
                                +959 - 2343423442 <br>
                                +959 - 4432325902
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-1 ">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="col-lg-9 address ms-3">
                                inquiry@lifelinemyanmar.com
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7  lifeline-link">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>About Us</h2>
                                <ul>
                                    <li><router-link to="/about-us/introduction">Introduction</router-link></li>
                                    <li><router-link to="/about-us/ceo-message">CEO Message</router-link></li>
                                    <li><router-link to="/about-us/vision-mission">Vision & Mission</router-link></li>
                                    <li><router-link to="/about-us/company-milestone">Company MileStone</router-link></li>
                                    <li><router-link to="/coming-soon">Distribution Network</router-link></li>
                                    <li><router-link to="/coming-soon">Regulatory Strength</router-link></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <h2>Business</h2>
                                <ul>
                                    <li><router-link to="/business/lifeline">Lifeline</router-link></li>
                                    <li><router-link to="/business/mbd">Myanmar Booster Distribution</router-link></li>
                                    <li><router-link to="/business/loyal-lifeline">Loyal Lifeline</router-link></li>
                                    <li><router-link to="/business/lifecare">Lifecare</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="extra-link mt-4">
                    <router-link to="/product-service/catalog">Our Products & Services</router-link>
                    <div class="divider"></div>
                    <router-link to="/partnership/principles">Partnerships</router-link>
                    <div class="divider"></div>
                    <router-link to="/coming-soon">Career</router-link>
                </div>
            </div>
            <!-- <div class="col-lg-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.96138933151!2d96.13091972674002!3d16.837824966492192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1950017207cd5%3A0xe9fa12534c33c00c!2sLifeline%20Group%20of%20Companies!5e0!3m2!1sen!2smm!4v1688320014597!5m2!1sen!2smm" width="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> -->
        </div>

        <div class="f-divider"></div>
        <div class="d-flex justify-content-between align-items center copy-right">
            <div>&copy; 2023 Copy Right Served</div>
            <div>Lifeline Group of Companies</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer {
        padding: 30px 15% 10px;
        background: #01579b;
       
    }

    .footer .logo h2 {
        font-weight: bolder;
        font-size: 28px;
        color: var(--main-color);
        letter-spacing: 2px;
    }
    
    .location {
        margin-top: 3px;
    }

    .location i {
        font-size: 17px;
        color: #fff;
    }

    .location .address {
        font-size: 14px;
        color: #fff;
    }

    .location .lifeline-link h2 {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }

    .location .lifeline-link ul li {
        list-style: none;
        margin: 0 0 2px -30px;
        font-size: 14px;
        text-decoration: underline;
    }

    ul li a {
        color: #fff;
    }

    .extra-link {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
    }

    .extra-link a {
        color: #fff;
        text-decoration: none;
    }

    .extra-link .divider {
        width: 2px;
        height: 15px;
        background: #ccc;
    }

    iframe {
        height: 250px;
    }

    .f-divider {
        background: var(--sec-color);
        height: 1px;
        width: 100%;
        margin: 12px 0;
    }
    .copy-right div {
        font-size: 14px;
        color: #fff;
    }

    @media (max-width:1600px) {
        .footer {
            padding: 20px 9% 10px;
            background-image: linear-gradient(60deg,#1a182e 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#1a182e 75%,#1a182e);
        }
    
        .footer .logo h2 {
            font-size: 20px;
            letter-spacing: 2px;
        }
        
        .location {
            margin-top: 0px;
        }
    
        .location i {
            font-size: 12px;
        }
    
        .location .address {
            font-size: 11px;
        }
    
        .location .lifeline-link h2 {
            font-size: 14px;
        }
    
        .location .lifeline-link ul li {
            margin: 0 0 0px -30px;
            font-size: 11px;
            text-decoration: underline;
        }
    
        .extra-link {
            gap: 10px;
            font-size: 12px;
        }
    
        .extra-link .divider {
            width: 2px;
            height: 15px;
            background: #ccc;
        }
    
        iframe {
            height: 160px;
        }
    
        .f-divider {
            background: var(--sec-color);
            height: .8px;
            margin: 8px 0;
        }
        .copy-right div {
            font-size: 12px;
        }
    }

    @media (max-width:1200px) {
        .footer {
            padding: 20px 3% 10px;
            background-image: linear-gradient(60deg,#1a182e 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#1a182e 75%,#1a182e);
        }
    
        .footer .logo h2 {
            font-size: 20px;
            letter-spacing: 2px;
        }
        
        .location {
            margin-top: 0px;
        }
    
        .location i {
            font-size: 12px;
        }
    
        .location .address {
            font-size: 11px;
        }
    
        .location .lifeline-link h2 {
            font-size: 14px;
        }
    
        .location .lifeline-link ul li {
            margin: 0 0 0px -30px;
            font-size: 11px;
            text-decoration: underline;
        }
    
        .extra-link {
            gap: 10px;
            font-size: 12px;
        }
    
        .extra-link .divider {
            width: 2px;
            height: 15px;
            background: #ccc;
        }
    
        iframe {
            height: 160px;
        }
    
        .f-divider {
            background: var(--sec-color);
            height: .8px;
            margin: 8px 0;
        }
        .copy-right div {
            font-size: 12px;
        }
    }
</style>
