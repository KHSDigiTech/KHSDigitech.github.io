# Week 2: A Detailed Guide to Conditional Logic & F-Strings

**Goal:** To make decisions in code and to format output in a clean, modern way.

---

## Key Concepts & Thorough Explanations

### 1. `if`, `elif`, `else`

These keywords allow you to run different blocks of code based on conditions.

### 2. The Importance of Indentation

Indentation (4 spaces) is how Python knows which code belongs to which `if` statement. It is mandatory.

### 3. F-Strings (Formatted String Literals)

F-strings are the best way to include variables directly inside a string.

**Syntax Breakdown:**

```python
name = "Alice"
age = 30

# The old way (using +)
message_old = "Hello, " + name + ". You are " + str(age) + " years old."

# The new way (using f-string)
message_new = f"Hello, {name}. You are {age} years old."

print(message_new)
```

* `f"..."`: The `f` before the opening quote tells Python this is an f-string.
* `{name}`: You can put any variable directly inside curly braces, and its value will be inserted into the string. Python handles any necessary type conversions automatically.

---

## Exercises

1. **Password Checker:** Ask for a password. If correct, print "Access Granted."
2. **Age Checker (f-string):** Ask for the user's age. If they are 18 or older, use an f-string to print `"Welcome, you are {age} and old enough to enter."`
3. **Number Comparison:** Ask for two numbers. Use an f-string to state if the first is larger, smaller, or equal to the second.
4. **Menu System:** Create a menu with two options. Use f-strings to confirm the user's choice: `"You selected option {choice}."`
5. **Weekend Detector:** Ask for the day of the week. If it's a weekend day, print "It's the weekend!" Otherwise, print "Time to work."
6. **Temperature Alert (f-string):** Ask for the temperature. Use f-strings to give different advice for hot, cold, or moderate weather.
7. **Movie Rating:** Ask for a movie rating (G, PG, M). Use f-strings to explain the rating.
8. **Basic Login (f-string):** Ask for a username and password. If both are correct, print a welcome message using the username: `f"Welcome back, {username}!"`
9. **Quote Formatter:** Store a quote and an author in variables. Use an f-string to print them in the format: `[Author] says, "[Quote]"`.
10. **Receipt Printer:** Create variables for an item name and its price. Use an f-string to print a line for a receipt: `Item: [Name] - $[Price]`.
