import express from "express"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Tasks API</h1>`)
})

const port = process.env.PORT || 8081

app.post("/task", async (req, res) => {
  try {
    const {title,description} = req.body;
    const task = await client.tasks.create({
      data:{
        title,
        description
      }
    })
   

    return res.status(201).json({
      success: true,
      message: : "Task created successfully",
      data: task
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await client.tasks.findMany({
      where: { isDeleted: false }
    })
    return res.status(200).json({
      success: true,
      data: tasks
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params
    const task = await client.tasks.findFirst({
      where: { id, isDeleted: false }
    })

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      })
    }

    return res.status(200).json({
      success: true,
      data: task
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, isCompleted } = req.body

    const updatedTask = await client.tasks.update({
      where: { id },
      data: {
        title,
        description,
        isCompleted: isCompleted || false
      }
    })

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.patch("/task/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const updatedTask = await client.tasks.update({
      where: { id },
      data: updateData
    })

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })  
  }
})

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params

    await client.tasks.update({
      where: { id },
      data: { isDeleted: true }
    })

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
