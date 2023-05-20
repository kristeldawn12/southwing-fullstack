# SouthWing Cafeteria (BackEnd)

A brief description of what this project does and who it's for.

The SouthWing Cafeteria order delivery app is designed to make it easy and convenient for users to order food and drinks from our restaurant and have them delivered directly to their location. The app offers a user-friendly interface that allows users to create an account, browse through our menu, select different categories of food and drinks, and add items to their cart.

One of the key benefits of using our app is that it saves users time and effort. Instead of having to call in their orders or visit the restaurant in person, users can place their orders quickly and easily from the comfort of their own home or office. They can browse the menu at their own pace and make informed decisions about what they want to order. They can also view the price and total of their order before they check out.

## API Reference

|  #  | Action |           URL           | HTTP Verb |  CRUD  |              Description               |
| :-: | :----: | :---------------------: | :-------: | :----: | :------------------------------------: |
|  1  | Create |     /users/register     |   POST    | Create |           Create a new user            |
|  2  | Create | /products/uploadProduct |   POST    | Create | Upload a product with its informations |
|  3  |  Read  |         /users          |    GET    |  Read  |         Retrieve all user data         |
|  4  |  Read  |        /products        |    GET    |  Read  |       Retrieve all products data       |
|  5  |  Read  |      /products/:id      |   POST    |  Read  |         Retrieve product by id         |
|  6  | Create |      /users/login       |   POST    |  Read  |             Logins a user              |
|  7  | Delete |       /users/:id        |  DELETE   | Delete |           Hard delete a user           |
|  8  | Delete |      /products/:id      |  Delete   | Delete |      Hard deletes a product by id      |
|  9  |  Read  |      /products/:id      |    GET    |  Read  |          Retrieve one product          |
| 10  | Update |      /products/:id      |    PUT    | Update |            Update a product            |
| 11  | Update |      /products/:id      |   PATCH   | Update |      Soft Deletes a product by id      |
| 11  |  Get   |        /products        |    GET    | Update |          Get product by name           |

## User Stories

### As a user, I can create an account and log in to the app.

Acceptance criteria:

I can create a new account with my email and password
I can log in with my email and password

### As a user, I can browse through the menu and select different categories in food and drinks.

Acceptance criteria:

I can view the different categories in the menu (food & drinks)
I can select a category to view the items in that category
I can view the price and description of each item
As a user, I can add items to my cart and adjust the quantity.

Acceptance criteria:

I can add an item to my cart
I can increase or decrease the quantity of an item in my cart
I can view the total price of my cart
As a user, I can check out and place my order.

Acceptance criteria:

I can view the items in my cart and the total price

### As an admin user, I can upload the menu and drinks and set the price and description of the product.

Acceptance criteria:

I can upload a new item to the menu
I can set the price and description of the item
I can update the price and description of an existing item
I can delete an item from the menu

### As a developer, I can integrate the backend service to the frontend.

Acceptance criteria:

I can access the endpoints from the backend using React
I can display the data from the endpoints in the frontend
I can use the data provided by the endpoints to update the UI of the app.
