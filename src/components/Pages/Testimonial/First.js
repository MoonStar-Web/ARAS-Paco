import React from 'react'

function First() {
    const testimonials = [
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-1.png',
            name: 'Ethel Collier',
            title: 'Analytics',
        },
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-2.png',
            name: 'Frances Gross',
            title: 'Analytics',
        },
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-3.png',
            name: 'Mayme Lowe',
            title: 'Analytics',
        },
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-4.png',
            name: 'James Garrett',
            title: 'Analytics',
        },
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-5.png',
            name: 'Mina McCoy',
            title: 'Analytics',
        },
        {
            text: 'I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.',
            imgSrc: 'assets/images/resources/testimonials-1-6.png',
            name: 'Estelle Carr',
            title: 'Analytics',
        },
    ];

    return (
        <section className="testimonials-page pt-120 pb-90">
            <div className="container">
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="testimonials-one__box">
                                <p><span>{testimonial.text}</span></p>
                                <div className="testimonials-one__box-info">
                                    <img src={testimonial.imgSrc} alt="" />
                                    <h3>{testimonial.name}</h3>
                                    <span>{testimonial.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default First;
