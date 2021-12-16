import List from './components/List';
import ListTitle from './components/ListTitle';
import axios from 'axios';
import React, {
  useState,
  useEffect
} from 'react';
import {
  createAction,
  array_move,
  revertActionsGen
} from '../src/utils.js';

function App() {
  const [posts, setPosts] = useState([]);
  const [actions, setActions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResult = async () => {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data.slice(0, 5));
    }

    fetchResult();
  }, []);

  function addAction(id, a, b) {
    if(isLoading)
      return;

    const action = createAction({ id, a, b });

    setPosts(array_move(posts, a, b));
    setActions([action, ...actions]);
  }

  function timeTravel(idx) {
    setLoading(true);

    const revertActions = revertActionsGen(idx, actions);

    for (let i = actions.length - 1; i >= idx; i--) {
      const { a, b } = revertActions.next().value;

      setPosts(array_move(posts, b, a));
      setActions([...actions]);
    }

    setLoading(false);
  }

  return (
    <div className="box">
       <div className="w-full flex md:flex-row flex-col sm:p-0 my-8">
        <div className="flex flex-col mx-8 sm:mb-8 md:w-1/2 lg:w-1/2">
          <ListTitle className="posts-title" title="Sortable post list" />
          <List items={posts} addAction={addAction} />
        </div>
        <div className="h-full rounded overflow-hidden shadow-lg mx-8 bg-white md:w-1/2 lg:w-1/2">
          <div className='bg-white p-8'>
            <ListTitle className="actions-title" title="List of actions commited" />
          </div>
          {actions.length > 0 ? (
            <div className="bg-indigo-50 p-8">
              <List items={actions} timeTravel={timeTravel} type='actions' />
            </div>
          ): ''}
        </div>
      </div>
    </div>
  );
}

export default App;
