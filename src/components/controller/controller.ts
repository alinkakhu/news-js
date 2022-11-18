import { ArticleCollection, SourceCollection } from '../view/appView';
import AppLoader from './appLoader';


 export type callback<T,Y>=(arg:T) => Y

class AppController extends AppLoader {
    public getSources(callback: callback<SourceCollection,void>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: callback<ArticleCollection,void>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        if (target && newsContainer) {
            while (target !== newsContainer) {
                if (target?.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode as HTMLElement;
            }
        }
    }
}

export default AppController;
