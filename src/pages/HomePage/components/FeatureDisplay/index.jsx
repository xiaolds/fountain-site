import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPalette,
    faIndustry,
    faTools,
    faToolbox,
    faHeadset,
    faPeopleCarry
} from '@fortawesome/free-solid-svg-icons';

const { Row, Col } = Grid;

const data = [
    {
        title: 'Fountain Design',
        description: `Providing personalized design base on clients' ideas and requests. Effect pictures and animations can be provided if requested (additional charges may apply) . Accomplish design within 2 to 3 days. 3D animations will take 15 days`,
        imgUrl: faPalette
    },
    {
        title: 'Material supply',
        description: `All TY Fountain products can be customized accorading to customer requirements. If however, you are looking for a unique water effect, nozzle, pump, luminaire or anything related to water, We can provide all kinds of fountain equipment, and we also creates custom products. We introduce and incorporate in the majority of our products the use of stainless steel. A remarkable material with numerous advantages over the other materials used in the fountain industry.`,
        imgUrl: faToolbox
    },
    {
        title: 'Manufacturing',
        description: `The exceptional quality of stainless steel in combination with precision engineering, specialized CNC machines, Laser cutters and some of the world’s most skilled fountain technicians, result in fountain equipment of unique quality. 
We carefully check the lights, the nozzles, the spray systems, the pumps, the control system and the entire structure. Then we pack it all together and ship it to you. When you open the boxes, apart from the shiny, high-quality equipment.`,
        imgUrl: faIndustry
    },
    {
        title: 'Installation',
        description: `Even though our products are remarkably easy to install, if installation is asked by the client, our experienced installation & commission teams prepare their luggage and installation gear and fly to the site. They install the entire fountain system, the lights and the control system in the most professional way, keeping always in mind the ease of maintenance and most primarily the safety of the fountain. The supervisors make sure that everything is installed properly, every water stream is fine-tuned, all lights point correctly at the streams and all the little details that matter the most. If it is a dancing fountain the choreographies now run for testing and fine-tuning purposes. Nobody leaves the site until the fountain operates as designed and the client is satisfied. 
We will arrange the shipment according to your request and make sure the product will be delivered to you safely and efficiently. `,
        imgUrl: faPeopleCarry
    },
    {
        title: 'Maintenance & Repair',
        description: `We provide professional maintenance service, and if your fountain system is not well functional, no mater it’s a mechanical problem or a software problem, we can repair it.`,
        imgUrl: faTools
    },
    {
        title: 'After sales',
        description: `After purchasing the product from T.Y. Fountain, we provide 24 hours on-line technical support. Our after sales support is renowned for our quick response to any incident. If a problem appears, we will help you fix it as soon as possible. And if for any reason, there is problematic equipment due to production error, the part is replaced right away - no questions asked.`,
        imgUrl: faHeadset
    }
];

export default class FeatureDisplayFeatureDisplay extends Component {
    static displayName = 'FeatureDisplay';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    limitCharts = charts => {
        if (charts.length > 160) {
            charts = charts.substring(0, 160) + '...';
        }
        return charts;
    };

    render() {
        return (
            <div className="pt100">
                <p className="page-title">Services & Solutions</p>
                <div className={styles.container}>
                    <div className={styles.items}>
                        <Row gutter="20" wrap>
                            {data.map((item, index) => {
                                return (
                                    <Col key={index} xxs="24" s="12" l="8">
                                        <div className={styles.item}>
                                            <FontAwesomeIcon
                                                icon={item.imgUrl}
                                                className="icon"
                                                size="2x"
                                            />
                                            <h3 className={styles.title}>{item.title}</h3>
                                            <p className={styles.description}>
                                                {this.limitCharts(item.description)}
                                            </p>
                                            <a className="link" href="#">
                                                More
                                            </a>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
