const express = require('express') // gọi lên thư viện express và lưu vào biến
const app = express() // express bay giờ là hàm đang thực thi
const port = 3000

app.get('/tin-tuc', (req, res) => {

  res.send('Hello World!')
}) // in ra "Hello World!" khi truy cập

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})