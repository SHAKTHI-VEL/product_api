# Products API

An API so that only authenticated users are allowed to perform CRUD operations on Products. 

## Installation

1. Clone this repository to your local machine using the following command:

   ```
   https://github.com/SHAKTHI-VEL/product_api.git
   ```

2. Change your current directory to the project folder:

   ```
   cd product_api
   ```

3. Run the following command to fetch the dependencies:

   ```
   npm install
   ```

4. Create the .env file and copy the contents of .env.example into it by typing the following command:
    ```
    cp .env.example .env
    ```

5. Finally start the server by typing the following command:
    ```
    node server.js
    ```

## API ENDPOINT

1. CREATE USER Endpoint [METHOD:-POST] :-
    ```
    /user/signup
    ```

2. LOGIN Endpoint [METHOD:-POST] :-
    ```
    /user/login
    ```

3. Add a product [METHOD:-POST] :-
    ```
    /product/add
    ```

4. Get all product [METHOD:-GET] :-
    ```
    /product
    ```

5. Get featured product [METHOD:-GET] :-
    ```
    /product/featured
    ```

6.  Fetch products with price less than a certain value [METHOD:-GET] :-
    ```
    /product/price/:pricelimit
    ```

7.  Fetch products with rating higher than a certain value [METHOD:-GET] :-
    ```
    /product/rating/:ratinglimit
    ```    

8.  Update a product [METHOD:-PUT] :-
    ```
    /product/:productId
    ``` 

9.   Delete a product [METHOD:-DELETE] :-
    ```
    /product/:productId
    ``` 
    