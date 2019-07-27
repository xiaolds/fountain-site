import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools';
import { faToolbox } from '@fortawesome/free-solid-svg-icons/faToolbox';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons/faPeopleCarry';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';

const data = [
    {
        title: 'Fountain Design',
        description: `Providing personalized design base on clients' ideas and requests. Effect pictures and animations can be provided if requested (additional charges may apply) . Accomplish design within 2 to 3 days. 3D animations will take 15 days`,
        icon: faPalette,
        imgs: ['d-1', 'd-2', 'd-3', 'd-4', 'd-5', 'd-6', 'd-7', 'd-8', 'd-9', 'd-10']
    },
    {
        title: 'Material supply',
        description: `All TY Fountain products can be customized accorading to customer requirements. If however, you are looking for a unique water effect, nozzle, pump, luminaire or anything related to water, We can provide all kinds of fountain equipment, and we also creates custom products. We introduce and incorporate in the majority of our products the use of stainless steel. A remarkable material with numerous advantages over the other materials used in the fountain industry.`,
        icon: faToolbox,
        imgs: ['ms-1', 'ms-2', 'ms-3', 'ms-4', 'ms-5', 'ms-6']
    },
    {
        title: 'Manufacturing',
        description: `The exceptional quality of stainless steel in combination with precision engineering, specialized CNC machines, Laser cutters and some of the world’s most skilled fountain technicians, result in fountain equipment of unique quality. 
We carefully check the lights, the nozzles, the spray systems, the pumps, the control system and the entire structure. Then we pack it all together and ship it to you. When you open the boxes, apart from the shiny, high-quality equipment.`,
        icon: faIndustry,
        imgs: ['m-1', 'm-2', 'm-3', 'm-4', 'm-5']
    },
    {
        title: 'Installation',
        description: `Even though our products are remarkably easy to install, if installation is asked by the client, our experienced installation & commission teams prepare their luggage and installation gear and fly to the site. They install the entire fountain system, the lights and the control system in the most professional way, keeping always in mind the ease of maintenance and most primarily the safety of the fountain. The supervisors make sure that everything is installed properly, every water stream is fine-tuned, all lights point correctly at the streams and all the little details that matter the most. If it is a dancing fountain the choreographies now run for testing and fine-tuning purposes. Nobody leaves the site until the fountain operates as designed and the client is satisfied. 
We will arrange the shipment according to your request and make sure the product will be delivered to you safely and efficiently. `,
        icon: faPeopleCarry,
        imgs: ['in-1']
    },
    {
        title: 'Maintenance & Repair',
        description: `We provide professional maintenance service, and if your fountain system is not well functional, no mater it’s a mechanical problem or a software problem, we can repair it.`,
        icon: faTools,
        imgs: ['in-1']
    },
    {
        title: 'After sales',
        description: `After purchasing the product from T.Y. Fountain, we provide 24 hours on-line technical support. Our after sales support is renowned for our quick response to any incident. If a problem appears, we will help you fix it as soon as possible. And if for any reason, there is problematic equipment due to production error, the part is replaced right away - no questions asked.`,
        icon: faHeadset,
        imgs: ['as-1']
    }
];

const productDatas = [
    {
        title: 'Home Fountain',
        description: `In the field of decorative design, water is one of the most lively and inspiring elements. The yearning towards the nature is growing stronger against modernization. Getting back to simplicity and embracing the nature has become a desire of many people. Home Fountain happens to be a satisfaction of this desire. It becomes the emotional bond people could easily have with the nature. Water brings the spirit of the nature to our home while it becomes an artwork of our life.`,
        imgs: ['hf-1', 'hf-2', 'hf-3', 'hf-4', 'hf-5', 'hf-7', 'hf-11', 'hf-13', 'hf-14']
    },
    {
        title: 'Garden Fountain',
        description: `Water attracts people; Water makes landscape alive. Water can be soft, can be hard; can be virtual, can be real; can be rapid, and can be slow too. In combined garden landscape, water frames different construction environment. By combining other facilities, beauty of water could be presented in different garden designs. Water is the source of life: it makes a garden more than a container of visual feast; it gives a soul; and make the entire garden breath and grow.
        Every fountain consists of a series of nozzles, underwater luminaires, pumps, control systems and various other components, but these parts are not just simple pieces of metal. Every fountain component is a marvelous piece of engineering, design and functionality; elaborately devised, precisely engineered and exhaustively tested under the harshest conditions to make sure it will give the water owing through it the exact form we want – for decades to come. `,
        imgs: [
            'gf-1',
            'gf-3',
            'gf-5',
            'gf-6',
            'gf-8',
            'gf-9',
            'gf-11',
            'gf-12',
            'gf-13',
            'gf-15',
            'gf-16'
        ]
    },
    {
        title: 'Water Fountain',
        description: `In the field of decorative design, water is one of the most lively and inspiring elements. The yearning towards the nature is growing stronger against modernization. Getting back to simplicity and embracing the nature has become a desire of many people. Home Fountain happens to be a satisfaction of this desire. It becomes the emotional bond people could easily have with the nature. Water brings the spirit of the nature to our home while it becomes an artwork of our life.You will find a wide selection of carefully designed fountain shapes, made of the highest quality materials and delivered pre-fabricated, pre-wired, ready for installation. The best part? The feature all new technologies like LED illumination and a set of handy features that will make your life easier. Installation is fast & easy without requiring special experience or skill - it is more like taking the system out of its packaging, putting it inside the basin and plugging the cables. No matter how complex the fountain pattern you choose is, we have simplied the process of installation as much as possible, saving you money, time and effort. Time has changed, water is no longer a silent & secrete existence. We are transforming static water into dynamic, pouring soul into it, and companioning it with multiple lighting effects. In this way, water fountain could "buffer" the solid buildings, "soft" the hard ground, and contribute more vitality to the environment. It satisfies the affection for water in human nature, makes water human's soul mate. With it, cities are not stiff anymore, and life is fulfilled by happiness.
        All standardised products can be customized according to customer requirements (e.g. 316 stainless steel, longer cable lengths, alternate mounting systems or spray patterns). If however, you are looking for a unique water effect, nozzle, luminaire or anything related to water, We also creates custom products. We have designed and manufactured extraordinary fountain equipment numerous times. `,
        imgs: [
            'wf-1',
            'wf-2',
            'wf-3',
            'wf-4',
            'wf-5',
            'wf-7',
            'wf-12',
            'wf-14',
            'wf-8',
            'wf-9',
            'wf-10',
            'wf-15',
            'wf-16'
        ]
    },
    {
        title: 'Water Curtain',
        description: `We are born for creating the art of nature. Water is no longer captured by vessels; it can present the words and patterns with our water curtain. Water curtain is so wonderful that it could attract all the attention. Therefore, it has become a new favorite in commercial promotion; it brings infinite fun and vitality to interior environment, and fashion to plazas and parks.`,
        imgs: [
            'wc-1',
            'wc-2',
            'wc-3',
            'wc-4',
            'wc-5',
            'wc-7',
            'wc-12',
            'wc-6',
            'wc-8',
            'wc-9',
            'wc-10',
            'wc-11'
        ]
    },
    {
        title: 'Water Screen',
        description: `3D Water Screen Show is a feast combined with science and creativity. It has overcome all traditional water screen movie. The most fashionable & shocking glass-free 3D technology and colorful laser light are used in the 3D Water Screen Show. The visual penetrability of water screen makes the projected images stereo; unpredicted laser movement and high-power sound effect integrates the images with the environment. This kind of city art uses buildings and sky as background, and takes people's imagination to the night sky. The wonderful charm it has is enough to make a whole city crazy, and reveals the character and legend of the city. 
       The Water Screen is ideal for Laser or Video Projection with incredible water particles density and therefore projection capabilities. In day-time, the Water Screen is a beautiful, massive water shape but at night even when simply illuminated by the vivid underwater luminaires, it is an awe-inspiring magical spectacle. In low ambient-light conditions, the screen becomes completely transparent and only the spots pointed by the laser / projector are visible creating a holographic-like effect. 
       `,
        imgs: ['ws-1', 'ws-2', 'ws-3', 'ws-4', 'ws-5', 'ws-7', 'ws-6', 'ws-8', 'ws-9']
    },
    {
        title: 'Music Fountain',
        description: `This is what a fountain, actually is. A way to deeply involve with the spectator through the most fundamental and fascinating substance on earth. Every fountain has a unique character; it might convey tranquility, it might be a work of art, it might trigger one’s imagination through its perpetual liquid motion, or it can be a mind-blowing extravaganza with massive volumes of water, impressive light shows and even fire, all dancing to music, following a dramatic choreography. It can essentially be anything – anything that one can imagine of. Our job is to turn extraordinary ideas into marvelous fountains. We have our own proposals but we can also turn your idea into a liquid piece of art. `,
        imgs: [
            'mf-1',
            'mf-2',
            'mf-3',
            'mf-4',
            'mf-5',
            'mf-7',
            'mf-6',
            'mf-8',
            'mf-9',
            'mf-10',
            'mf-11'
        ]
    }
];

const navigation = [
    {
        title: 'Home',
        link: ''
    },
    {
        title: 'Products',
        link: 'service?products',
        location: productDatas[0].title
    },
    {
        title: 'Services',
        link: 'service?solutions',
        location: data[0].title
    },
    {
        title: 'Projects',
        link: ''
    },
    {
        title: 'About',
        link: 'contact'
    }
];

const projectsData = [
    {
        title: 'Amazing Musical Dancing Fountain in the Greater Iqbal Park',
        time: 2016,
        location: 'Pakistan',
        feature: '300M',
        thumb: 'thumb-1',
        imgs: ['hf-1', 'hf-2', 'hf-3', 'hf-4', 'hf-5', 'hf-7', 'hf-11', 'hf-13', 'hf-14']
    },
    {
        title: 'Amazing Musical Dancing Fountain in the Greater Iqbal Park--2',
        time: 2016,
        location: 'Pakistan',
        feature: '300M',
        thumb: 'thumb-2',
        imgs: []
    }
];

export default {
    data,
    productDatas,
    navigation,
    projectsData
};
