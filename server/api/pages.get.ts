import { H3Event } from "h3";

export type GetPages = {
    pages: {
        route: string,
        link?: string,
        name: string,
        description: string,
        category: 'Лендинг' | 'Проект',
    }[],
};

export default defineEventHandler(async (_: H3Event): Promise<GetPages> => { 
    return {
        pages: [
            {
                route: 'shockwave',
                name: 'Shockwave Studios',
                description: 'Студия разработки профессиональных UI/UX дизайнов.',
                category: 'Лендинг',
            },
            {
                route: 'ecopulse-energy',
                name: 'EcoPulse Energy',
                description: 'Лидер в области разработки и внедрения возобновляемых источников энергии.',
                category: 'Лендинг',
            },
            {
                route: 'coin-miner',
                name: 'Coin Miner',
                description: 'Простая программа для эффективной добычи криптовалют на компьютер.',
                category: 'Лендинг',
            },
            {
                route: 'xare',
                name: 'Xare Seсurity 70000',
                description: 'Экосистема антивирусных программ, работающих в режиме реального времени.',
                category: 'Лендинг',
            },
            {
                route: 'sakurator',
                link: 'https://sakurator.anafro.ru/',
                name: 'Anafro.Sakurator',
                description: 'Платформа для изучения японский азбук.',
                category: 'Проект',
            },
            {
                route: 'gallery',
                link: 'https://gallery.anafro.ru/',
                name: 'Anafro.Gallery',
                description: 'Сайт моих веб-страниц и платформ. Вы уже здесь, если что!',
                category: 'Проект',
            },
        ]
    };
});