const todos = [
  {
    id: 1,
    title: 'Todo1',
    description: 'これは一つ目のタスクです',
    expiration: '2022/03/06'
  },
  {
    id: 2,
    title: 'Todo2',
    description: 'これは二つ目のタスクです',
    expiration: '2022/03/08'
  },
  {
    id: 3,
    title: 'Todo3',
    description: 'これは三つ目のタスクです',
    expiration: '2022/03/10'
  }
];

// 本来、ここは DBサーバー または アプリケーションサーバーにリクエストを送るエンドポイントになる
export const getTodosFromDB = () => {
  sleep(2000);
  return todos;
}

export const getTodoFromDB = (id) => {
  sleep(2000);
  let todo;
  for (const ele of todos) {
    if (ele.id === parseInt(id)) {
      todo = ele;
      break;
    }
  }
  return todo;
}

export const getAllTodoIds = () => {
  sleep(2000);
  const todoIds = todos.map(({ id }) => {
    return {
      params: { id: String(id) }
    }
  });
  return todoIds;
}

// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}