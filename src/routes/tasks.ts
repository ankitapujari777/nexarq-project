import { Hono } from 'hono'

type Bindings = {
  TASKS_KV: KVNamespace
}

export const taskRoutes = new Hono<{ Bindings: Bindings }>()

// CREATE TASK
taskRoutes.post('/', async (c) => {
  const body = await c.req.json()

  const task = {
    id: crypto.randomUUID(),
    title: body.title,
    description: body.description,
    createdAt: new Date().toISOString()
  }

  await c.env.TASKS_KV.put(task.id, JSON.stringify(task))

  return c.json(task, 201)
})

// GET ALL TASKS
taskRoutes.get('/', async (c) => {
  const list = await c.env.TASKS_KV.list()
  const tasks = []

  for (const key of list.keys) {
    const value = await c.env.TASKS_KV.get(key.name)
    if (value) tasks.push(JSON.parse(value))
  }

  return c.json(tasks, 200)
})

// GET TASK BY ID
taskRoutes.get('/:id', async (c) => {
  const id = c.req.param('id')
  const task = await c.env.TASKS_KV.get(id)

  if (!task) {
    return c.json({ error: 'Task not found' }, 404)
  }

  return c.json(JSON.parse(task), 200)
})

// DELETE TASK
taskRoutes.delete('/:id', async (c) => {
  const id = c.req.param('id')
  await c.env.TASKS_KV.delete(id)

  return c.json({ message: 'Task deleted' }, 200)
})
