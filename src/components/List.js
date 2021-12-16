import Post from "./Post";
import classNames from "classnames";

function List({
    items,
    type,
    addAction,
    timeTravel
}) {
  const isAction = type === 'actions';
  const listClass = classNames({
    "flex flex-col": true,
    "posts-list": !isAction,
    "actions-list": isAction
  })

  return (
    <div className={listClass}>
      {
        items.map((item, idx) => {        
          return <Post 
            idx={idx}
            key={idx}
            item={item} 
            type={type} 
            addAction={addAction} 
            timeTravel={timeTravel}
            />
        })
      }
    </div>
  );
}

export default List;
