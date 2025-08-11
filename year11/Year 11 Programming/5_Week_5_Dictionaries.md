# Week 5: A Detailed Guide to Dictionaries

**Goal:** To learn how to store data as key-value pairs, which allows for much better organization. This is a critical step for creating a "well-structured" program and achieving at the Merit level.

---

## Key Concepts & Thorough Explanations

### 1. The Problem with Simple Lists

Imagine we store a contact like this: `contact = ["Alice", "123456789"]`. What does `contact[0]` mean? We know it's the name, but the code doesn't. We have to remember the order. This is where dictionaries come in.

### 2. What is a Dictionary?

A dictionary is a collection of **key-value pairs**. It's like a real dictionary where you look up a word (the **key**) to find its definition (the **value**). The order doesn't matter, only the keys do.

**Syntax Breakdown:**

```python
# A dictionary representing one contact
contact = {
    "name": "Alice",
    "phone": "123456789",
    "email": "alice@example.com"
}
```

* `{}`: Dictionaries are defined with curly braces.
* `"name": "Alice"`: This is a key-value pair. `"name"` is the key, and `"Alice"` is the value. They are separated by a colon `:`. 
* Each pair is separated by a comma.

### 3. Accessing Values by Key

You don't use an index with dictionaries. You use the key to get the value.

**Syntax Breakdown:**

```python
print(contact["name"])  # This will print "Alice"
print(contact["email"]) # This will print "alice@example.com"
```

### 4. A List of Dictionaries

This is the pattern you will use for your final assessment. You have a `list` where each item in the list is a `dictionary` representing one contact.

**Syntax Breakdown:**
```python
all_contacts = [
    { "name": "Alice", "phone": "111-222" },
    { "name": "Bob", "phone": "333-444" }
]

# Get Bob's phone number
print(all_contacts[1]["phone"]) # Prints "333-444"
```
*   `all_contacts[1]`: This gets the second dictionary from the list (`{ "name": "Bob", ... }`).
*   `["phone"]`: From that dictionary, we then get the value associated with the "phone" key.

### 5. Iterating Through a Dictionary

You can loop through a dictionary using a `for` loop with the `.items()` method. This gives you both the key and the value for each pair.

**Syntax Breakdown:**
```python
contact = { "name": "Alice", "phone": "111-222" }
for key, value in contact.items():
    print(f"{key}: {value}")
# Output:
# name: Alice
# phone: 111-222
```

### 6. Checking if a Key Exists

If you try to access a key that doesn't exist, your program will crash. You can check for a key's existence first using the `in` keyword.

**Syntax Breakdown:**
```python
if "email" in contact:
    print(contact["email"])
else:
    print("Email address not found.")
```

### 7. Deleting a Key-Value Pair

You can remove a pair from a dictionary using the `del` keyword.

**Syntax Breakdown:**
```python
del contact["phone"]
# The contact dictionary no longer has a "phone" key.
```

---

## Exercises

1.  **My Profile:** Create a dictionary to store your own profile with keys for "name", "city", and "favorite_food". Print one of the values.
2.  **Car Details:** Create a dictionary for a car with keys for "make", "model", and "year". Print a sentence using all three values.
3.  **Add a Key:** Create a profile dictionary. After creating it, add a new key-value pair for "email". Print the whole dictionary.
4.  **Student Grades:** Create a dictionary to store a student's grades, with subjects as keys and scores as values. Use `.items()` to loop through and print each subject and score.
5.  **Simple Translation:** Create a dictionary that maps three English words to their Spanish translations. Ask the user for an English word and use the `in` keyword to check if it exists before printing the translation.
6.  **Delete a Key:** Create a dictionary with three key-value pairs. Use `del` to remove one of them. Print the final dictionary.
7.  **Contact List of Dictionaries:** Create a `list` containing two `dictionary` items, where each dictionary represents a contact (with "name" and "phone" keys).
8.  **Looping Through Dictionaries:** Using the list from the previous exercise, write a `for` loop that prints a formatted string for each contact, like: `"Contact: [Name], Phone: [Phone]"`.
9.  **Adding a Dictionary to a List:** Start with an empty list called `contacts`. Create a new contact `dictionary` based on user input and `append()` it to the list. Print the list.
10. **Search by Name:** Create a list of contact dictionaries. Ask the user for a name to search for. Loop through the list, and if you find a dictionary with a matching name, print that contact's phone number.
11. **Full Contact Entry:** Combine everything: Create an empty list. Ask the user for a name and phone number. Create a new dictionary with that data. Append the dictionary to the list. Finally, loop through the list and print all the contacts.
12. **Profile Printer:** Create a profile dictionary. Use a `for` loop with `.items()` to print each piece of information on a new line, like `"Key: Value"`.