import './sources.css';
interface Data {
    name: string;
    id: string;
}
class Sources {
    public draw(data: Data[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            sourceItemName.textContent = item.name;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        sources.append(fragment);
    }
}

export default Sources;
