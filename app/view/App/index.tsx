/** @jsx jsx */
import {jsx} from '@emotion/core';
import styles from './styles';
import React from 'react';
import {formatDate} from 'app/logic/shared/formate-data';
import Button from 'app/view/shared/components/Button';
import api from 'app/api';
import Spinner from 'app/view/shared/components/Spinner';

interface IDataItem {
    [index: string]: {
        title: string;
        description: string;
        createdBy: string;
    };
}

const App: React.FC = () => {
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

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        api.tasks.getAllList().then(() => setIsLoading(false));
    }, []);

    return <div css={styles.wrapper}>
        {isLoading
            ? <div css={styles.loadingPanel}>
                <Spinner size={24}/>
            </div>

            : <ul css={styles.list}>
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
        }
    </div>;
};

export default App;
