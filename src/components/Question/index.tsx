import './styles.scss' 
import { ReactNode } from 'react'
import cx from 'classnames'

type QuestionProps = {
  content:  string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLithed?: boolean;
}
export function Question({
  content ,
  author,
  isAnswered = false,
  isHighLithed = false,
  children
}: QuestionProps) {
  return (
    <div 
      className={cx(
        'question', 
        { answered: isAnswered },
        { highlight: isHighLithed && !isAnswered }
      )}
      >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          { children }
        </div>
      </footer>
    </div>
  );
}