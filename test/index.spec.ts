import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { taskRoutes } from './routes/tasks'; // Ensure tasks.ts exists and is exported properly

type Bindings = {
  TASKS_KV: KVNamespace;
  AI: any; // Workers AI binding
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS for frontend communication
app.use('*', cors());

// Health check route
app.get('/', (c) => {
  return c.json({
    message: 'Nexarq Assignment API is running 🚀'
  });
});

// Task routes (ensure taskRoutes is defined and imported correctly)
app.route('/tasks', taskRoutes);

export default app;
