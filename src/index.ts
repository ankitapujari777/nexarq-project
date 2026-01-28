import { Hono } from 'hono'
import { taskRoutes } from './routes/tasks'

type Bindings = {
  TASKS_KV: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

// Health check route
app.get('/', (c) => {
  return c.json({
    message: 'Nexarq Assignment API is running 🚀'
  })
})

// Task routes
app.route('/tasks', taskRoutes)

export default app
