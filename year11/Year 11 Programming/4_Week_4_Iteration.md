# Week 4: A Detailed Guide to Iteration (Loops)

**Goal:** To learn how to repeat blocks of code automatically. This is essential for creating a menu that keeps running and for processing every item in a list.

---

## Key Concepts & Thorough Explanations

### 1. The `while` Loop

A `while` loop repeats a block of code **as long as a certain condition remains true**. It's perfect for when you don't know how many times you need to repeat the code.

**Syntax Breakdown:**

```python
# A loop that counts to 3
count = 1
while count <= 3:
    print("The count is:", count)
    count = count + 1 # This is crucial! It's the incrementer.

print("Loop finished.")
```

* `while count <= 3:`: The loop will continue as long as the `count` variable is less than or equal to 3.
* `count = count + 1`: Inside the loop, we must change the variable from the condition. If we don't, we create an **infinite loop** because the condition will never become false.

**The `while True` and `break` Pattern:**
A very common pattern is to create a loop that runs forever and then use a conditional `break` statement to exit it. This is ideal for menus.

```python
while True:
    command = input("Enter command (or 'q' to quit): ")
    if command == "q":
        break # Exit the loop immediately
    print(f"Executing command: {command}")
```

### 2. The `for` Loop

A `for` loop is used to iterate over a sequence (like a list). It will run its code block once for every item in the sequence.

**Syntax Breakdown:**

```python
colors = ["red", "green", "blue"]
for item in colors:
    print("The color is:", item)
```

* `for item in colors:`: This is the loop definition.
  * `colors`: The list you want to loop through.
  * `item`: This is a **temporary variable** that you name. In each iteration of the loop, `item` will hold the current item from the list (`"red"` in the first loop, `"green"` in the second, etc.).

---

## Exercises

1. **Counting:** Write a `while` loop that counts from 1 to 5 and prints each number.
2. **List Printer:** Create a list of your favorite songs. Use a `for` loop to print each song title.
3. **Password Loop:** Write a program that keeps asking for a password until the user types "secret".
4. **Sum of a List:** Create a list of numbers. Use a `for` loop to calculate and print the sum of all the numbers in the list.
5. **Menu Loop:** Using a `while True` loop, create a menu that prints two options. If the user chooses option 1, print "Option 1 chosen." If they choose option 2, `break` the loop.
6. **Even Numbers:** Write a `for` loop that goes through a list of numbers and only prints the ones that are even.
7. **Guest List Greeter:** You have a list of guests. Use a `for` loop to print a personalized greeting for each guest, like "Welcome to the party, [Guest Name]!"
8. **Find the Item:** Create a list of items. Ask the user for an item to search for. Use a `for` loop and an `if` statement to check if the item is in the list and print a confirmation message.
9. **Shopping Cart Total:** Create a list of prices for items in a shopping cart. Use a `for` loop to add them all up and print the final total.
10. **Contact List Display:** Create a simple list of contacts (just names for now). Use a `for` loop to print the header "--- Your Contacts ---" and then print each contact name on a new line.