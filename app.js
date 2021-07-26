require('dotenv').config()
const fs = require('fs-extra')
const { v4: generateuuid } = require('uuid')
const AWS = require('aws-sdk')
const FileType = require('file-type')

const s3Config = {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccesskey: process.env.S3_SECRET_ACCESS_KEY,
    endpoint: process.env.S3_ENDPOINT
}
AWS.config.update(s3Config)
const s3Client = new AWS.S3()


const uploadFile = async () => {
    const fileName = './upload/a.jpeg'
 
    const fileData = fs.readFileSync(fileName)
    const fileType = await FileType.fromFile(fileName)
    const newFileName = generateuuid() + '.' + fileType.ext
    
    const s3params = {
        Bucket: process.env.S3_BUCKET,
        Key: newFileName,
        Body: fileData,
        ContentType: fileType.mime,
        ACL: 'public-read'
    }   
 
    s3Client.upload(s3params, (err, uploadedData) => {
        if(err) throw err
        console.log(uploadedData)
    })
    
}

uploadFile();