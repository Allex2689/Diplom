import { Document } from './types';

interface DocumentCardProps {
    document: Document;
}

function getNoun(num: number, one: string, two: string, five: string) {
    let n = Math.abs(num);
    n %= 100;

    if (n >= 5 && n <= 20) {
        return five;
    }

    n %= 10;
    if (n === 1) {
        return one;
    }

    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

export const DocumentCard = ({ document }: DocumentCardProps) => {
    return (
        <div className={`news`}>
          <div className="topInfo">
            <p>{document.issueDate}</p>
            <a href={document.url}>{document.source.name}</a>
          </div>
          <h4>{document.title.text}</h4>
          <p className="underTitleText">
              {document.attributes.isAnnouncement && 'isAnnouncement'}
              {document.attributes.isTechNews && 'isTechNews'}
              {document.attributes.isDigest && 'isDigest'}
          </p>
          {/*  @ts-ignore*/}
            <div dangerouslySetInnerHTML={{ __html: document.content.markup }}></div>
          <div className="buttonWithText">
            <button>Читать далее</button>
            <p>{document.attributes.wordCount} {getNoun(document.attributes.wordCount, 'слово', 'слова', 'слов')}</p>
          </div>
        </div>
    );
};
