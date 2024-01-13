const express = require('express')
const app = express()
const users = require('./user_data/user_data.js')
const cors = require('cors');
app.use(cors(),express.json())

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "user2"] })
})
app.listen(5000, () => { console.log("server connected on port 5000") })



app.post('/login', (req, res) => {
  
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    const user = users.find((user) => user.email === email);
   console.log(user)
    
    if (!user || user.password !== password) {

   console.log(user)

        return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    
    return res.json({ message: 'Login successful' ,role: user.role });
});

app.get('/requested',(req, res)=>{});

app.get('/issed', (req, res)=>{});

