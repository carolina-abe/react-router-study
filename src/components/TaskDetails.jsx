import { useParams } from 'react-router-dom'

export const TaskDetails = () => {
  const { taskId } = useParams() 

  return (
    <div>
      <h2>Tasks details</h2>
      <p>Task: {taskId}</p>
    </div>
  )
}
