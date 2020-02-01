/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import formatDate from 'app/helpers/formate-data';
import Button from 'app/common/components/Button';

interface IDataItem {
    [index: string]: {
        title: string;
        description: string;
        createdBy: string;
    };
}

const Main: React.FC = () => {
    const [data, setData] = React.useState<IDataItem>({
        '_001': {
            title: 'Сделать React To Do',
            description: 'Использовать redux, rxjs',
            createdBy: formatDate(new Date(2020, 1, 1)),
        },
        '_002': {
            title: 'Посмотреть лекцию 2 по Angular 8',
            description: 'Написать что-нибудь на основе полученных знаний из лекции',
            createdBy: formatDate(new Date(2020, 1, 2)),
        },
    });

    return <div css={styles.wrapper}>
        <ul css={styles.list}>
            {Object.keys(data).map((id: string) => <li key={id} css={styles.item}>
                <div css={styles.itemTitle}>{data[id].title}</div>
                <div css={styles.itemDesc}>{data[id].description}</div>
                <div css={styles.itemDate}>{data[id].createdBy}</div>

                <div css={styles.itemActions}>
                    <Button>
                        <div>❤️</div>
                    </Button>

                    <Button variant='fill' color='primary'>
                        <div>👻</div>
                        <div>Изменить</div>
                    </Button>

                    <Button variant='fill'>
                        <div>👻</div>
                        <div>Изменить</div>
                    </Button>

                    <Button>
                        <div>Удалить</div>
                        <div>😛</div>
                    </Button>
                </div>
            </li>)}
        </ul>
    </div>;
};

export default Main;
