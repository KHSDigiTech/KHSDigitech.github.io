
# Week 1: A Detailed Introduction to Programming & Data Types

**Goal:** To understand the basics of programming, data types, and how to convert between them.

---

## Key Concepts & Thorough Explanations

### 1. The `print()` and `input()` functions
*   `print()`: Displays information to the user.
*   `input()`: Gets information from the user.

### 2. Variables and Data Types

A variable is a named container for a value. Every value has a **data type**.
*   **String (`str`):** Text, wrapped in quotes. e.g., `"Hello"`, `'123'`.
*   **Integer (`int`):** Whole numbers. e.g., `10`, `-5`, `123`.

`input()` **always gives you a string!**

### 3. Type Conversion with `int()`

To do math, you must convert number strings into integers.

**Syntax Breakdown:**
```python
age_string = input("How old are you? ") # e.g., user enters "16"
# The line below will cause an error because you can't do math with a string.
# next_year = age_string + 1 

age_number = int(age_string) # Convert the string to an integer
next_year = age_number + 1   # This now works correctly
print(f"Next year, you will be {next_year}.")
```

---

## Exercises

1.  **User Greeting:** Ask for a name and print a greeting.
2.  **Age in 10 Years:** Ask for the user's age, convert it to an integer, and tell them how old they will be in 10 years.
3.  **Simple Calculator:** Ask for two numbers, convert them to integers, and print their sum.
4.  **Rectangle Area:** Ask for the width and height of a rectangle, convert them, and print the area.
5.  **Movie Tickets:** A movie ticket costs $15. Ask the user how many tickets they want and print the total cost.
6.  **Apples and Oranges:** Ask for a number of apples and a number of oranges. Print the total number of fruits.
7.  **Year of Birth:** Ask the user for their age and the current year. Calculate and print the year they were born.
8.  **Temperature Converter (Simple):** Ask for a temperature in Celsius and convert it to an integer. (The formula for Fahrenheit is `C * 9/5 + 32`, but for now, just focus on the conversion part).
9.  **Type Check:** Create a variable with a number string (e.g., `x = "50"`). Print its type using `print(type(x))`. Then, convert it to an integer and print its new type.
10. **Error Prediction:** What error will the following code produce? `age = input("Age: "); print(age - 5)`
