import { useInfiniteQuery } from 'react-query';
import Body from './components/Body';

import LinearProgress from '@material-ui/core/LinearProgress';

export type todoItem = {
  id?: string,
  text: string,
  status: string
}

export type todos = {
  todos: todoItem[]
}

export const getAllTodos = async ():Promise<todos> => await(await fetch('/api/todos')).json();

function App() {
  const { data, isLoading, error, isError } = useInfiniteQuery(
    'todos',
    getAllTodos
  )


  if (isLoading) return <LinearProgress />
  if (isError) return <div>Something went wrong... {error}</div>


  return (
    <div className="h-screen bg-gray-100 App">
      <div className="w-screen h-56 bg-no-repeat bg-cover bg-upper-image-mobile-light lg:bg-upper-image-desktop-light">
        <Body todos={data!?.pages[0].todos}/>    
      </div>
    </div>
  );
}

export default App;
