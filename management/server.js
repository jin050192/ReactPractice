const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1', // placeimg 사이트는 이미지를 랜덤으로 가져옴. 보여주고싶은 이미지는 64x64크기
            'name' : '진은성',
            'birthday' : '910501',
            'gender' : '남자',
            'job' : 'Programmer'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2', // placeimg 사이트는 이미지를 랜덤으로 가져옴. 보여주고싶은 이미지는 64x64크기
            'name' : '진은성2',
            'birthday' : '920501',
            'gender' : '남자',
            'job' : 'Programmer'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3', // placeimg 사이트는 이미지를 랜덤으로 가져옴. 보여주고싶은 이미지는 64x64크기
            'name' : '진은성3',
            'birthday' : '930501',
            'gender' : '남자',
            'job' : 'Programmer'
          }
    ]);
});

app.listen(port, () => console.log(`Listenin on port ${port}`));