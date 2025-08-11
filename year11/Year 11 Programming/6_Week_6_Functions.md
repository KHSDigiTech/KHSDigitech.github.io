# Week 6: A Detailed Guide to Functions & Project Consolidation

**Goal:** To learn how to organize code into clean, reusable blocks called functions. This is the final and most important step for creating a "flexible and robust" program to meet the Excellence criteria.

---

## Key Concepts & Thorough Explanations

### 1. Why Use Functions? (The DRY Principle)

DRY stands for **D**on't **R**epeat **Y**ourself. Functions allow you to write a block of code once and then call it whenever you need it. This makes your code cleaner, easier to read, and much easier to debug. If you need to change how something works, you only have to change it in one place (inside the function).

### 2. Defining a Function

You define a function using the `def` keyword.

**Syntax Breakdown:**

```python
def print_menu():
    print("--- Contact Book Menu ---")
    print("1. Add a contact")
    print("2. View all contacts")
    print("3. Exit")
```

* `def`: The keyword that tells Python you are defining a function.
* `print_menu`: The name you choose for your function. It should be descriptive of what the function does.
* `()`: The parentheses are for parameters (see next point). They are required even if there are no parameters.
* `:`: The colon and the indented block of code work just like in `if` statements and loops.

### 3. Calling a Function

Defining a function doesn't run it. You have to **call** it by its name.

```python
# This will execute the code inside the print_menu function
print_menu()
```

### 4. Functions with Parameters

Parameters are variables that you can pass into a function to make it more flexible.

**Syntax Breakdown:**

```python
def greet(name, city):
    print(f"Hello, {name} from {city}!")

# Calling the function with arguments
greet("Alice", "Auckland")
greet("Bob", "Wellington")
```

* `name` and `city` are **parameters** in the function definition.
* `"Alice"` and `"Auckland"` are **arguments** that you provide when you call the function. The values of the arguments are assigned to the parameters.

### 5. Passing Lists and Dictionaries to Functions

You can pass any data type as an argument, including lists and dictionaries. This is how you will manage your main contact list.

```python
def view_contacts(contacts_list):
    print("--- Your Contacts ---")
    for contact in contacts_list:
        print(f"Name: {contact['name']}, Phone: {contact['phone']}")

my_contacts = [ { "name": "Charlie", "phone": "555-666" } ]
view_contacts(my_contacts)
```

---

## Exercises

1. **Simple Greeter:** Write a function called `greet` that prints "Hello, world!". Call the function.
2. **Personalized Greeter:** Write a function that takes one parameter, `name`, and prints a personalized greeting.
3. **Area Calculator:** Write a function `calculate_area` that takes `width` and `height` as parameters and prints the area of a rectangle.
4. **List Printer Function:** Write a function `print_list` that takes a list as a parameter and then uses a `for` loop to print every item in the list.
5. **Menu Function:** Take the menu from Week 2's exercises and put it inside a function called `display_menu()`.
6. **Refactor:** Take your "Guest List Greeter" from Week 4 and put the `for` loop inside a function that takes the guest list as a parameter.
7. **Add Contact Function:** Write a function `add_contact` that takes a `contacts` list as a parameter. Inside the function, it should ask the user for a name and phone, create a dictionary, and append it to the list that was passed in.
8. **Main Program Structure:** Create the basic structure for your final assessment. Create an empty list `all_contacts`. Define empty functions `display_menu`, `add_contact`, and `view_contacts`. Write the main `while` loop that calls `display_menu` and then uses `if/elif/else` to decide which other function to call.
9. **Robust Input:** Create a function `get_menu_choice` that shows the user the menu and asks for input. The function should loop until the user enters a valid choice (e.g., "1", "2", or "3") and then return that choice.
10. **Full Project Assembly:** Spend the rest of your time working on the **Simple Contact Book** assessment. Fill in the logic for all your functions. Make sure it meets all the requirements for Achieved, and try to implement the features for Merit (dictionaries) and Excellence (functions, robust input).