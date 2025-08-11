
# Assessment Task: Simple Contact Book

## Introduction

Your task is to create a simple command-line "Contact Book" application. This program will allow a user to store and retrieve contact information. You will need to apply your programming skills to create a functional, well-structured, and robust application.

This assessment will be graded against the criteria for **AS92004 Create a computer program**.

## Core Requirements

Your program **must** provide the user with a menu of options to:

1.  **Add a new contact:** The program should prompt the user for a contact's name and their phone number and save it.
2.  **View all contacts:** The program should display a list of all the contacts that have been saved.
3.  **Exit the program:** A way for the user to safely close the application.

To meet the standard, your program must:

*   Store at least two types of data for each contact (e.g., name as a string, phone number as a string or integer).
*   Take input from the user to navigate the menu and enter contact details.
*   Produce clear output for the user (displaying the menu, contacts, and other messages).
*   Use **sequence**, **selection** (e.g., `if/elif/else` for menu choices), and **iteration** (e.g., a `while` loop for the main menu).
*   Use a single **collection** (e.g., a list) to store all the contact data.
*   Be documented with comments.
*   Include evidence of testing to show that it works on expected cases.

---

# Marking Schedule

## To Achieve: Create a computer program

The student's program meets all the core requirements. It is functional and performs the specified task.

*   **Functionality:** The program successfully allows a user to add contacts, view them, and exit.
*   **Data Storage:** Contacts are stored in a single collection, such as a list.
    *   *Example: The contacts are stored in a list of strings, like `["John Doe - 021123456", "Jane Smith - 022765432"]`.*
*   **Control Structures:** The program correctly uses `if` statements (or equivalent) to handle menu choices and a loop to keep the program running until the user exits.
*   **Testing:** The student provides evidence that the program works as expected for the main functions.
    *   *Example: Screenshots or a log showing the user adding a contact and then successfully viewing it.*
*   **Comments:** The code contains comments that explain what is happening.
    *   *Example: `# Get user input for the name`.*

## To Achieve with Merit: Create a well-structured computer program

The student's program meets all the criteria for Achieved, and is also well-structured.

*   **Variable Names:** Variables and functions have clear, descriptive names.
    *   *Example: `contact_list` or `all_contacts` is used instead of `x` or `c_list`.*
*   **Code Structure:** The code is logically organised. Each contact's data is stored together, for instance, as a dictionary within a list or an object within a list.
    *   *Example: `contacts = [{"name": "John Doe", "phone": "021123456"}, {"name": "Jane Smith", "phone": "022765432"}]`. This is better structured than using two separate lists for names and numbers.*
*   **Comments:** Comments explain the **purpose** of sections of code, not just individual lines.
    *   *Example: `# Main loop to display menu and handle user choice`.*
*   **Testing:** Testing evidence includes **boundary cases**.
    *   *Example: Testing what happens when the user tries to view contacts when the list is empty. The program should handle this gracefully (e.g., by printing "Your contact book is empty") rather than doing nothing or showing an error.*

## To Achieve with Excellence: Create a flexible and robust computer program

The student's program meets all the criteria for Merit, and is also flexible and robust.

*   **Flexibility:** The program is easy to modify or extend. This is often achieved by using functions to separate logic.
    *   *Example: The logic for adding a contact is in its own function, e.g., `def add_contact():`. This makes the code cleaner and means adding a new feature like "delete contact" would be as simple as writing a new function and adding it to the menu.*
*   **Robustness:** The program handles invalid user input without crashing.
    *   *Example: If the menu requires the user to enter a number (1-3), and the user types "hello" or "5", the program should not crash. Instead, it should display an error message like "Invalid input, please try again" and show the menu again.*
*   **Effective Control Structures:** The program uses control structures effectively to improve robustness and flexibility.
    *   *Example: A `while True` loop is used inside the `add_contact` function to repeatedly ask for a phone number until the user provides a valid one (e.g., ensuring it only contains numbers), demonstrating robust input validation.*
*   **Testing:** Testing evidence includes **invalid cases**.
    *   *Example: Screenshots or a log showing what happens when the user enters text where a number is expected, or enters a menu option that doesn't exist.*
