import { News, Article, Source } from './news/news';
import Sources from './sources/sources';

export interface ArticleCollection {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}

export interface SourceCollection {
    sources: Array<Source>;
}

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ArticleCollection): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourceCollection): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
