## Step 1: Create Collect Id From Create-collect-order API
### Use the following curl to create collect_id
```
curl --location 'https://dev-vanilla.edviron.com/erp/create-collect-request' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVlSWQiOiJ4eHh4eHh4eHh4eHh4eCIsIkluZGV4T2ZBcGlLZXkiOjksImlhdCI6MTcxMjU1NzM3OSwiZXhwIjoxNzQ0MTE0OTc5fQ.pi6v80UtWFODc9EH1fh1z7evj7HpLgiMS_uc60EKSHc
' \
--data '{
    "school_id":"xxxxxxxxxxxxx",
    "amount":"1",
    "callback_url":"https://google.com",
    "student_id":"s123456",
    "receipt":"r12",
    "sign":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY2hvb2xfaWQiOiJ4eHh4eHh4eHh4eHh4IiwiYW1vdW50IjoiMSIsImNhbGxiYWNrX3VybCI6Imh0dHBzOi8vZ29vZ2xlLmNvbSJ9.HC_L8o-PY5ncRzdMT9nVXs6HG3qzl51WNKn2lG3g13s"
}'
```
For more information read the official documentation
[View Docs](https://documenter.getpostman.com/view/22738724/2s9Ykq5zui)
## Step 2: Install the React-native-SDK from npm & install dependency
```
npm i @edviron/react-native-sdk
```
Add Native-webview package using
```
npm i react-native-webview
```
## Step 3: To open the upi app, add the below code just outside ```<application>``` in AndroidManifest.xml file.
```
<queries>
  <package android:name="com.google.android.apps.nbu.paisa.user" />
  <package android:name="net.one97.paytm" />
  <package android:name="com.phonepe.app" />
  <package android:name="in.org.npci.upiapp" />
  <package android:name="in.amazon.mShop.android.shopping" />
  <package android:name="com.whatsapp" />
</queries>
```
## Step 4: Pass the Collectid along with mode,onSuccess & OnFailure function.
```
import {Payment} from '@edviron/react-native-sdk';
<Payment
          collectId={"xxxxxxxxxxxxxxxxxxxxxx"}
          onSuccess={() => {
            //success function
            console.log('success');
          }}
          onFailure={() => {
            //failure function
            console.log('failure');
          }}
          //mode
          // sandbox for development
          //production for production
          mode={'production'}
        />
```