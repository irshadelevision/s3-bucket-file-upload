# s3-bucket-file-upload

Simple Node.js example for uploading a local file to S3-compatible object storage.

## Supported platforms

- Linode Object Storage
- DigitalOcean Spaces
- AWS S3
- Any S3-compatible provider

## What this project does

- Loads credentials from `.env`
- Reads `./upload/a.jpeg`
- Detects the file MIME type and extension
- Generates a UUID-based file name
- Uploads the file with `public-read` ACL
- Logs the uploaded file response in the console

## Prerequisites

- Node.js (recommended: v16+)
- Yarn or npm
- An S3-compatible bucket

## Setup

1. Copy `.env_sample` to `.env`.
2. Add your storage credentials to `.env`.
3. Install dependencies:
   - `yarn install`
   - or `npm install`
4. Put a test file at `./upload/a.jpeg` (or update the path in `app.js`).
5. Run the script:
   - `node app.js`

## Environment variables

Set these values in your `.env` file:

- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`
- `S3_ENDPOINT` (for example, AWS S3 or your provider endpoint)
- `S3_BUCKET`

## Notes

- The uploaded object key is generated as `<uuid>.<extension>`.
- The file is uploaded with `ACL: public-read`.
