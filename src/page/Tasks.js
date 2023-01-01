import Helmet from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { selectLoading } from 'redux/tasks/selectors';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { TaskList } from 'components/TaskList/TaskList';

const Tasks = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
};

export default Tasks;
