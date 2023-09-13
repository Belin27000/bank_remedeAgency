import React from 'react';
import featureData from '@/assets/data/featureData.json'
import './feature.scss'

const Feature = () => {

    return (
        <section className='features'>
            <h2 className="sr-only">Features</h2>
            {

                featureData.map((item, index) => {
                    return (
                        <div key={index} className="feature-item">
                            <img key={item.id} src={item.src} alt={item.alt} className="feature-icon" />
                            <h3 className="feature-item-title">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }

        </section>
    );
};

export default Feature;