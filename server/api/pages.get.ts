import { H3Event } from "h3";
import fs from "fs";
import removeExtension from "~/utils/files/file-extensions";
import excludes from "~/utils/arrays/array-hof-filters";

export type GetPages = {
    pages: {
        route: string,
        name: string,
        description: string,
    }[],
};

export default defineEventHandler(async (_: H3Event): Promise<GetPages> => { 
    return {
        pages: [
            {
                route: 'nebula-nav',
                name: 'Nebula Nav',
                description: 'Организация и проведение космических туров по Солнечной системе.',
            },
            // {
            //     route: 'gourmet-garden',
            //     name: 'Gourmet Garden',
            //     description: 'Производитель и поставщик органических продуктов питания премиум-класса.',
            // },
            {
                route: 'ecopulse-energy',
                name: 'EcoPulse Energy',
                description: 'Лидер в области разработки и внедрения возобновляемых источников энергии.',
            },
            // {
            //     route: 'zenith-robotics',
            //     name: 'Zenith Robotics',
            //     description: 'Разработка и производство роботов для промышленного и бытового применения.',
            // },
            // {
            //     route: 'aquascape',
            //     name: 'AquaScape',
            //     description: 'Дизайн и строительство уникальных аквариумов и водных экосистем.',
            // },
            // {
            //     route: 'mystic-melody',
            //     name: 'Mystic Melody',
            //     description: 'Создание музыкальных инструментов с уникальными звуковыми характеристиками.',
            // },
            // {
            //     route: 'quantum-wear',
            //     name: 'Quantum Wear',
            //     description: 'Производитель умной одежды, интегрированной с передовыми технологиями.',
            // },
            // {
            //     route: 'adventure-horizon',
            //     name: 'Adventure Horizon',
            //     description: 'Организация экстремальных туров и приключенческих экспедиций по всему миру.',
            // },
            // {
            //     route: 'pixel-pet-pals',
            //     name: 'Pixel Pet Pals',
            //     description: 'Разработка интерактивных виртуальных питомцев для детей и взрослых.',
            // }
        ]
    };
});