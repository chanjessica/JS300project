import React from 'react';

export default () => {
    return (
        <>
            <h2 className="mt-4 text-center">Happy Kitchen</h2>
            <div id="food" className="carousel slide   justify-content-center" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#food" data-slide-to="0" className="active"></li>
                    <li data-target="#food" data-slide-to="1"></li>
                    <li data-target="#food" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active justify-content-center">
                        <img className="d-block mx-auto" src="https://lorempixel.com/output/food-q-c-640-480-1.jpg" alt="food 1" />
                        <div className="carousel-caption">
                            <h3>Kung Po Chicken</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block mx-auto" src="https://lorempixel.com/output/food-q-c-640-480-2.jpg" alt="food 2" />
                        <div className="carousel-caption">
                            <h3>Mongolian Beef</h3>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block mx-auto" src="https://lorempixel.com/output/food-q-c-640-480-3.jpg" alt="food 3" />
                        <div className="carousel-caption">
                            <h3>Twice Cooked Pork</h3>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-warning" href="#food" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next text-warning" href="#food" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </>

    )
}
