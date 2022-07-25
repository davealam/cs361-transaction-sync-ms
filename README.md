# CS361-transaction_sync_ms
### A microservice that simulates syncing of bank data for budget tracking application.


**Install and usage:**
>
1. Download repo to desired folder
2. Navigate to above folder via terminal
3. Run command NPM INSTALL to install dependencies
4. Run command NPM START to start server
5. Send HTTP GET request to "/transaction_sync_ms" - the resulting response will be a .JSON file 
>


**Sample Response:**
```
  [
        {
            date: "05-12-2022",
            description: "Leet Code Annual Subscription",
            amount: 149.99,
        }
   ]
```
