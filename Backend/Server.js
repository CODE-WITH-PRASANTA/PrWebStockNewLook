const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/Db');
const cors = require('cors');
const projectRoutes = require('./Routes/projectRoutes');
const serviceRoutes = require("./Routes/serviceRoutes");
const jobRoutes = require('./Routes/jobRoutes');
const blogRoutes = require("./Routes/blogRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use("/api/services", serviceRoutes);
app.use('/api/jobs', jobRoutes);
app.use("/api/blogs", blogRoutes);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
