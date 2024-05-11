var express = require('express');
var router = express.Router();
const Users = require(__dirname+'/../models/Users');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  try {
    const {useremail, password} = req.body;    
    const pass = await Users.findOne({email: useremail}, {password:1 ,_id:1});
    if (pass){
      const passwordMatches = bcrypt.compareSync(password, pass.password);

      if (passwordMatches){
        return res.json({ status: 'Valid User', userId:pass._id});
      }
      else{
        return res.json({ status: 'Invalid Password'})
      }
    }
    else{
      return res.json({ status: 'Invalid User'})
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
