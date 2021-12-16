import Button from "./Button";
import classNames from "classnames";

function Post({
    idx,
    item,
    type,
    timeTravel,
    addAction
}) {
  const { id, title } = item;
  const isAction = type === 'actions';
  const postClass = classNames({
    "shadow-xl bg-white container": true,
    "rounded md:h-20 sm:h-24 h-28 my-4": !isAction,
    "action": isAction
  })

  return (
    <div className={postClass}>
        <span>{title}</span>

        {
          isAction? (<Button onClick={() => {
            timeTravel(idx)
          }} />): (
        <div className="flex flex-col">
          {idx === 0? '': (
            <i className="arrow up" onClick={() => {
              addAction(id, idx, idx - 1);
            }}></i>
          )}
          {idx === 4? '': (
            <i className="arrow down" onClick={() => {
              addAction(id, idx, idx + 1);
            }}></i>
          )}
        </div>)
        }
    </div>
  );
}

export default Post;
