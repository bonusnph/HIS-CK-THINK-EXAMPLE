# HIS-CK-THINK-EXAMPLE

Workshop สำหรับสมัครงานตำแหน่ง Node.js Developer (Backend)

## Endpoints
[GET] /api-docs
[GET] /api/oauth/google
[GET] /api/v1/users
[POST] /api/v1/users

## Dependency
- "body-parser": "^1.20.0"
- "cookie-session": "^2.0.0"
- "cors": "^2.8.5"
- "dotenv": "^16.0.1"
- "express": "^4.18.1"
- "express-rate-limit": "^6.4.0"
- "express-validator": "^6.14.1"
- "moment": "^2.29.3"
- "passport": "^0.6.0"
- "passport-google-oauth2": "^0.2.0"
- "pino-http": "^7.1.0"
- "sequelize": "^6.20.1"
- "sqlite3": "^5.0.8"
- "swagger-ui-express": "^4.4.0"

## Install
ติดตั้ง node (lts 16.x.x) พร้อม npm (8.x.x)

>  https://nodejs.org/en/download

เข้าโฟลเดอร์หลักของโปรเจคและติดตั้ง node packages dependencies ที่ระบุอยู่ในไฟล์ package.json ทั้งหมดได้ด้วยคำสั่ง

>  npm install

เมื่อดาวน์โหลด Packages สำเร็จ จะได้โฟลเดอร์ node_modules ขึ้นมา
ให้ทดลองรันโปรเจคด้วยคำสั่ง

> npm run start

หรือต้องการทำงานบนสภาพแวดล้อมการพัฒนา

> npm run dev

หรือหากต้องการทำงานเป็น Service เบื้องหลัง ให้ติดตั้ง pm2 ก่อนด้วยคำสั่ง

Run on Linux
> npm install pm2 -g

Run on Windows
> npm install pm2-windows-startup -g
> pm2-startup install

และใช้คำสั่ง Start Service

> pm2 start index.js --name 'HIS-CK-THINK-EXAMPLE' 

สุดท้ายทำการบันทึก Profile ให้สามารถทำงานได้อัตโนมัติเมื่อ Startup

> pm2 save

## License
|||
|------------|--|
|Developer| Chayaphat  Na Phatthalung  |
|Github| https://github.com/bonusnph |
