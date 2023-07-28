import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { useTranslation, UseTranslationOptions } from 'react-i18next'
import { useTranslation } from 'react-i18next'



export default function Description() {
    // const [t, i18n] = useTranslation("global");
    const { t } = useTranslation("global");
    const [containerVisible, setContainerVisible] = useState(false);
    console.log(t("welcome"))


    const toggleContainerVisibility = () => {
        setContainerVisible(!containerVisible);
    };

    return (
        <div className='Description'>
            <div className='head'>
            {t('welcome')}
            </div>
            <div className='text'>
                We deliver wholesale vegetables and fruits. We supply our customers with fresh, high quality produce at
                competitive prices. Partner with us and experience excellence in wholesale produce.
            </div>
            <button className="btn" onClick={toggleContainerVisibility}>{containerVisible ? ' Hide info' : 'Learn more'}</button>
            {containerVisible && (
                <div className='showContainer'>
                    Welcome to GreenBean, your premier destination for high-quality
                    wholesale vegetables and fruits. We take pride in supplying the freshest and finest
                    produce to businesses across the region. With a commitment to exceptional quality,
                    prompt service, and competitive pricing, we are your trusted partner in the wholesale
                    produce industry.
                    At GreenBean, we understand the importance of providing our
                    customers with top-notch products that meet their specific needs. That&#39;s why
                    we work directly with local farmers and growers who share our commitment to
                    sustainable and responsible farming practices. Our extensive network allows
                    us to offer a diverse selection of seasonal produce, ensuring that you have
                    access to the finest fruits and vegetables year-round.

                    Whether you own a restaurant, a grocery store, or any other establishment that
                    requires fresh produce, GreenBean is here to fulfill your wholesale
                    needs. We offer competitive pricing, flexible ordering options, and reliable
                    delivery services, making it easy and convenient for you to receive the produce
                    you need, when you need it.
                    We value the relationships we build with our customers and strive to provide
                    exceptional service every step of the way. With our commitment to quality,
                    reliability, and customer satisfaction, GreenBean is your trusted
                    partner for all your wholesale vegetable and fruit requirements.
                    Contact us today to experience the freshness and quality that sets us apart. We
                    look forward to serving you and helping your business thrive with the finest
                    produce available in the market.
                </div>
            )}

        </div>
    )
}
