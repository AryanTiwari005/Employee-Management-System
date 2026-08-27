import { useTaskContext } from '../../context/task-context'
import { useAuthContext } from '../../context/auth-context'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import toast from 'react-hot-toast'

const TaskList = () => {
  const { tasks, updateTaskStatus } = useTaskContext()
  const { user } = useAuthContext()

  const userTasks = tasks.filter((t) => t.assignee === user?.email)

  const handleUpdateStatus = (id, status) => {
    updateTaskStatus(id, status)
    if (status === 'accepted') {
      toast.success('Task accepted!')
    } else if (status === 'completed') {
      toast.success('Task marked as completed!')
    } else if (status === 'failed') {
      toast.error('Task marked as failed.')
    }
  }

  if (userTasks.length === 0) {
    return (
      <div className="mt-10 py-12 text-center text-zinc-400 bg-zinc-900/50 rounded-xl border border-zinc-800">
        <p className="text-base">No tasks assigned yet.</p>
      </div>
    )
  }

  return (
    <div
      id="TaskList"
      className="h-[340px] overflow-x-auto w-full flex items-center justify-start gap-4 sm:gap-5 flex-nowrap py-5 mt-6 sm:mt-10 snap-x snap-mandatory scroll-smooth"
    >
      {userTasks.map((task) => {
        if (task.status === 'new') {
          return <NewTask key={task.id} task={task} updateTaskStatus={handleUpdateStatus} />
        }
        if (task.status === 'accepted') {
          return <AcceptTask key={task.id} task={task} updateTaskStatus={handleUpdateStatus} />
        }
        if (task.status === 'completed') {
          return <CompleteTask key={task.id} task={task} />
        }
        if (task.status === 'failed') {
          return <FailedTask key={task.id} task={task} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList