# Week 3: A Detailed Introduction to Lists

**Goal:** To learn how to store and manage an ordered collection of items using lists. This is the first step to managing a collection of contacts.

---

## Key Concepts & Thorough Explanations

### 1. What is a List?

A list is a data structure that holds an ordered sequence of items. Think of it like a numbered list of groceries or a column in a spreadsheet. Each item in the list has a specific position.

**Syntax Breakdown:**
```python
# An empty list
my_friends = []

# A list with initial items
shopping_list = ["apples", "bread", "milk"]
```
*   `[]`: The square brackets are what define a list.
*   `"apples", "bread", "milk"`: The items are separated by commas.

### 2. Adding to a List with `.append()`

`.append()` is a **method**, which is a function that belongs to a specific object (in this case, a list). It adds a new item to the very end of the list.

**Syntax Breakdown:**
```python
shopping_list = ["apples", "bread"]
shopping_list.append("eggs")
# Now, shopping_list is ["apples", "bread", "eggs"]
```
*   `shopping_list.append(...)`: You write the name of the list, a dot `.`, and then the method name.

### 3. Accessing List Items by Index

Every item in a list has a position called an **index**. The most important thing to remember is that **indexes start at 0**, not 1.

**Syntax Breakdown:**
```python
colors = ["red", "green", "blue"]
first_color = colors[0]  # This gets "red"
second_color = colors[1] # This gets "green"
```
*   `colors[0]`: The number inside the square brackets is the index of the item you want to retrieve.

### 4. Getting the Length of a List with `len()`

`len()` is a function that tells you how many items are in a list.

**Syntax Breakdown:**
```python
num_of_colors = len(colors) # This would be 3
```

### 5. Modifying an Item in a List

You can change an item at a specific index by assigning a new value to it.

**Syntax Breakdown:**
```python
colors = ["red", "green", "blue"]
colors[1] = "yellow" # Change the item at index 1
# Now, colors is ["red", "yellow", "blue"]
```

### 6. Removing Items from a List

There are two common ways to remove items:

*   `.pop()`: Removes an item at a specific index. If you don't provide an index, it removes the *last* item.
*   `.remove()`: Removes the *first* item in the list that matches the value you provide.

**Syntax Breakdown:**
```python
# Using .pop()
colors = ["red", "green", "blue"]
colors.pop(0) # Removes "red"
# Now, colors is ["green", "blue"]

# Using .remove()
colors.remove("blue") # Removes "blue"
# Now, colors is ["green"]
```

---

## Exercises

1.  **My Hobbies:** Create a list containing three of your hobbies. Print the entire list.
2.  **First and Last:** Create a list of your three favorite foods. Print the first item in the list.
3.  **Add an Item:** Start with an empty list called `movies`. Ask the user to enter their favorite movie and `append()` it to the list. Then print the list.
4.  **Team Roster:** Create a list with the names of two of your friends. Ask the user to add a third friend's name. Print the final list.
5.  **List Count:** Create a list of 5 different numbers. Use the `len()` function to print a message like: "The list contains 5 numbers."
6.  **Change of Plans:** Create a list of three places you want to visit. Use an index to change the second place to a new destination. Print the updated list.
7.  **Remove an Item:** Create a list of tasks to do. Use `.pop()` to remove the first task and print a message saying you've completed it. Then print the remaining tasks.
8.  **Guest List Management:** Create a list of guests. A guest cancels, so use `.remove()` to remove their name from the list. Print the final guest list.
9.  **Dynamic Shopping List:** Create an empty list. Ask the user to enter three items one by one, appending each to the list. Then, tell the user you're out of the first item and remove it. Print the final list.
10. **Error Finder:** The following code has an error. Can you fix it? `my_list = [1, 2, 3] print(my_list[3])` (Hint: Remember how indexing starts).
11. **Sentence Builder:** Create a list of individual words: `["This", "is", "a", "sentence"]`. Print each word on the same line by accessing them by their index and using string concatenation, to form the full sentence.
12. **Top Three:** Create a list of your top three favorite songs. `pop()` the last one and store it in a variable. Then print a message like: "Your third favorite song is [Song], but let's just focus on the top two: [The rest of the list]."