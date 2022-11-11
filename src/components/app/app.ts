import Logger from '../../logger';
import AppController from '../controller/controller';
import { AppView, ArticleCollection, SourceCollection } from '../view/appView';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        Logger.getInstance().log({ message: 'App started'});
        const sources = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ArticleCollection) => this.view.drawNews(data))
            );
            Logger.getInstance().log({ message: 'Sources click event listener added' });
        }
        this.controller.getSources((data: SourceCollection) => this.view.drawSources(data));
        Logger.getInstance().log({ message: 'Sources loaded' });
    }
}

export default App;
