
# Week 7: A Detailed Guide to Functions & Documentation

**Goal:** To organize code into reusable blocks and to document it clearly.

---

## Key Concepts & Thorough Explanations

### 1. Functions (`def` and `return`)

A function is a named, reusable block of code. Using `return` allows a function to send a value back to the code that called it.

### 2. Comments vs. Docstrings

Good documentation is crucial for writing understandable code.

*   **Comments (`#`):** Use comments to explain the *why* behind a specific, tricky line or section of code. They are for developers reading the code.
    ```python
    # We add 1 to the index because users think in 1-based numbers
    print(f"Contact #{i+1}: {contact['name']}")
    ```

*   **Docstrings (`"""..."""`):** A docstring is a special, multi-line string that is placed as the very first thing inside a function definition. It explains *what* the function does, what its parameters are, and what it returns. It is the professional standard for documentation.

**Syntax Breakdown:**
```python
def calculate_area(width, height):
    """Calculates the area of a rectangle.

    Args:
        width (int): The width of the rectangle.
        height (int): The height of the rectangle.

    Returns:
        int: The calculated area of the rectangle.
    """
    return width * height
```

---

## Exercises

1.  **Greeter Function:** Write a function that prints "Hello!".
2.  **Return Value:** Write a function that `return`s your name as a string.
3.  **Area Calculator with Docstring:** Write the `calculate_area` function from the example above, including the full docstring.
4.  **List Printer Function:** Write a function that takes a list as a parameter and prints every item.
5.  **Menu Function with Return:** Write a function that displays a menu and `return`s the user's choice.
6.  **Add Comment:** Take a piece of code from a previous week and add a useful `#` comment to it.
7.  **Add Docstring:** Take a function you wrote and add a professional docstring to it.
8.  **Main Program Structure:** Structure your contact book with empty functions (`display_menu`, `add_contact`, etc.) and add docstrings to each one explaining what it will do.
9.  **is_valid_choice function:** Write a function that takes a user's choice and a maximum number of options as parameters. It should `return` `True` if the choice is a valid number within the range, and `False` otherwise.
10. **Project Planning:** Write out the plan for your contact book in plain English, with each step corresponding to a function you will create.
