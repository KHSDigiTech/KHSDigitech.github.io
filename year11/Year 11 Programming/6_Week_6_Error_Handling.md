# Week 6: A Detailed Guide to Error Handling

**Goal:** To make your program robust by anticipating and handling errors gracefully instead of crashing.

---

## Key Concepts & Thorough Explanations

### 1. The Problem: Crashing Programs

What happens if you ask for a number, but the user types "hello"? Your program will crash with a `ValueError` when you try to use `int()`.

### 2. The `try...except` Block

This structure lets you "try" a piece of code that might fail. If it fails, the program doesn't crash; instead, it runs the code in the "except" block.

**Syntax Breakdown:**

```python
try:
    # 1. The code to attempt is put in the 'try' block.
    age_string = input("Enter your age: ")
    age_number = int(age_string)
    print(f"You are {age_number} years old.")

except ValueError:
    # 2. This block only runs if a ValueError occurs in the 'try' block.
    print("Invalid input. Please enter a number.")
```

* `try:`: The block of code where an error might happen.
* `except ValueError:`: If a `ValueError` specifically occurs in the `try` block, the program immediately jumps to this `except` block. It skips the rest of the `try` block.

This is a cornerstone of robust programming and is essential for an Excellence grade.

---

## Exercises

1. **Safe Number Input:** Ask the user for a number. Use a `try...except` block to print the number if it's valid, or an error message if it's not.
2. **Age Converter:** Wrap the age conversion program from Week 1 in a `try...except` block.
3. **Calculator Protection:** Wrap the simple calculator from Week 1 in a `try...except` block to handle cases where the user enters text instead of numbers.
4. **Menu with Loop and Error Handling:** Create a menu that asks for a number choice. Use a `while` loop to keep asking until the user enters a valid number. Use `try...except` inside the loop.
5. **Division Calculator:** Ask for two numbers. In the `try` block, calculate and print the result of the first number divided by the second. You will need two `except` blocks: one for `ValueError` (if they enter text) and one for `ZeroDivisionError` (if they try to divide by zero).
6. **List Index Checker:** Create a list with 3 items. Ask the user for an index number. In a `try` block, try to print the item at that index. Catch the `IndexError` if the index is out of range.
7. **File Reader (Conceptual):** You don't need to write the file part, but conceptually, how would you use `try...except` when trying to open a file that might not exist? (Hint: It would cause a `FileNotFoundError`).
8. **Robust Input Function:** Create a function `get_integer_input(prompt)` that uses a `while True` loop and a `try...except` block to repeatedly ask the user for input with the given prompt until they enter a valid integer, at which point the function should `return` the number.
9. **Contact Book Age:** Imagine your contact book also stored age. Use `try...except` to make sure the user enters a valid number for the age.
10. **Combining It All:** Create a list of numbers. Ask the user for a new number to add. Use `try...except` to ensure it's a valid number before appending it to the list.
