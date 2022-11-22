import './news.css';
interface Source {
    id: string;
    name: string;
}
export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    urlToImage: string;
    url: string;
}

class News {
    draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
            if (idx % 2) newsItem.classList.add('alt');
            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            metaAuthor.textContent = item.author || item.source.name;
            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const descrT = newsClone.querySelector('.news__description-title') as HTMLElement;
            descrT.textContent = item.title;
            const descSrc = newsClone.querySelector('.news__description-source') as HTMLElement;
            descSrc.textContent = item.source.name;
            const descContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            descContent.textContent = item.description;
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const news2 = document.querySelector('.news') as HTMLElement;
        news2.innerHTML = '';
        news2.appendChild(fragment);
    }
}

export { News, Article as NewsInterface, Source };
