import React from 'react';
import Photo1 from '@assets/foto/mainModel1.png';
import Photo2 from '@assets/foto/mainModel2.png';
import Photo3 from '@assets/foto/mainModel3.png';
import ProductImage from '@components/ProductCatalog/Image';
import ProductDescription from '@components/ProductCatalog/Description';
import Breadcrumbs from '@components/ReusedComponents/Breadcrumbs';
import { Content, Container } from './style';

const product = {
    category: 'Пальто',
    name: 'Белая куртка',
    prices: { ru: 2000, ua: 12.2 },
    sizes: [
        {
            value: 1,
            label: 'XXS',
        },
        {
            value: 2,
            label: 'XS',
        },
        {
            value: 3,
            label: 'S',
        },
        {
            value: 4,
            label: 'M',
        },
        {
            value: 5,
            label: 'L',
        },
    ],
    colors: ['white', 'blue', 'yellow', 'black', 'red', 'green'],
    images: [Photo1, Photo2, Photo3, Photo3, Photo1],
    description: [
        'Классическое пальто итальянского бренд Heresis',
        'Оригинальная модель в шерсти аналогичного класса стоит 135 000 руб',
        'Классическое пальто итальянского бренда Heresis',
    ],
    structure: [
        'Состав: 50% Шерсть, 50% Полиэстер',
        'Подкладка: 100% Полиэстер',
        'Утеплитель: 90% Пух, 10% Перо',
        '',
        '- Не стирать',
        '- Гладить при температуре утюга до 110°C',
        '- Не отбеливать',
        '- Сухая чистка (химчистка)',
        '- Барабанная сушка запрещена',
    ],
};

const ProductCatalog = () => (
    <Container>
        <Breadcrumbs />
        <Content>
            <ProductImage images={product.images} />
            <ProductDescription
                description={product.description}
                name={product.name}
                sizes={product.sizes}
                prices={product.prices}
                colors={product.colors}
                structure={product.structure}
            />
        </Content>
    </Container>
);

export default ProductCatalog;
