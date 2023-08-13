import { Routes, Route } from 'react-router-dom'
import { TodoPage } from '../page'

export const TodoRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<TodoPage />}/>
    </Routes>
  )
}
