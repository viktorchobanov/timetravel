export const createAction = ({
  id,
  a,
  b
}) => {
  const title = `Moved post ${id} from index ${a} to index ${b}`;
  const action = {
    postID: b,
    a,
    b,
    title
  };

  return action;
}

export const revertActionsGen = function* (idx, actions) {
  for (let i = actions.length - 1; i >= idx; i--) {
    yield actions.splice(i, 1)[0];
  }
}

export const array_move = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
}
