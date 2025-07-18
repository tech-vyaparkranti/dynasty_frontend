import React, { useEffect } from 'react';
import WOW from 'wowjs';

function BannerSeven() {
    useEffect(() => {
            new WOW.WOW().init();
                
            }, 
        []);
    return (
        <>
            {/* banner area */}
            <div className="rts__section banner__area is__home__six banner__height banner__center">
                <div className="banner__content">
                    <div className="banner__slider__image">
                        <img src="/assets/images/index-6/banner/banner.webp" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="banner__slide__content">
                                    <h1 className="wow fadeInUp">
                                        Discover the Beauty of Our Coastal Haven
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="rts__section advance__search__section is__home__six wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <div className="container">
                                    <div className="row">
                                        <form
                                            action="room"
                                            method="post"
                                            className="advance__search"
                                        >
                                            <div className="advance__search__wrapper wow fadeInUp">
                                                {/* single input */}
                                                <div className="query__input">
                                                    <label htmlFor="check__in" className="query__label">
                                                        Check In
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="check__in"
                                                        name="check__in"
                                                        placeholder="15 Jun 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                                {/* single input end */}
                                                {/* single input */}
                                                <div className="query__input">
                                                    <label htmlFor="check__out" className="query__label">
                                                        Check Out
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="check__out"
                                                        name="check__out"
                                                        placeholder="15 May 2024"
                                                        required=""
                                                    />
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-calendar" />
                                                    </div>
                                                </div>
                                                {/* single input end */}
                                                {/* single input */}
                                                <div className="query__input">
                                                    <label htmlFor="adult" className="query__label ">
                                                        Adult
                                                    </label>
                                                    <select name="adult" id="adult" className="form-select">
                                                        <option value={1}>1 Person</option>
                                                        <option value={2}>2 Person</option>
                                                        <option value={3}>3 Person</option>
                                                        <option value={4}>4 Person</option>
                                                        <option value={5}>5 Person</option>
                                                        <option value={6}>6 Person</option>
                                                        <option value={7}>7 Person</option>
                                                        <option value={8}>8 Person</option>
                                                        <option value={9}>9 Person</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                                {/* single input end */}
                                                {/* single input */}
                                                <div className="query__input">
                                                    <label htmlFor="child" className="query__label ">
                                                        Child
                                                    </label>
                                                    <select name="child" id="child" className="form-select">
                                                        <option value={1}>1 Child</option>
                                                        <option value={2}>2 Child</option>
                                                        <option value={3}>3 Child</option>
                                                        <option value={4}>4 Child</option>
                                                        <option value={5}>5 Child</option>
                                                        <option value={6}>6 Child</option>
                                                        <option value={7}>7 Child</option>
                                                        <option value={8}>8 Child</option>
                                                        <option value={9}>9 Child</option>
                                                    </select>
                                                    <div className="query__input__icon">
                                                        <i className="flaticon-user" />
                                                    </div>
                                                </div>
                                                {/* single input end */}
                                                {/* submit button */}
                                                <button className="theme-btn btn-style fill no-border search__btn">
                                                    <span>Check Now</span>
                                                </button>
                                                {/* submit button end */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end */}
        </>

    )
}

export default BannerSeven