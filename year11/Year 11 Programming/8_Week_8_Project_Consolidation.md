
# Week 8: Project Consolidation & Refinement

**Goal:** To bring all the concepts from the previous seven weeks together to build a high-quality, fully functional, and robust final project.

---

## This Week's Focus

There are no new programming concepts this week. The entire focus is on **applying what you have learned** to the **Simple Contact Book** assessment. This is the time to build, test, debug, and refine your code.

### Checklist for Success:

Use this checklist to make sure you are on track to meet the criteria for Excellence.

**1. Core Functionality (Achieved)**
*   [ ] Does the program have a main loop that keeps it running?
*   [ ] Can you add a new contact (name and phone)?
*   [ ] Can you view all the contacts you have added?
*   [ ] Is the contact information stored in a single list?
*   [ ] Does the program have a menu and use `if/elif/else` to handle the user's choice?
*   [ ] Have you included basic comments (`#`) in your code?

**2. Code Structure (Merit)**
*   [ ] Are you using clear, descriptive variable names (e.g., `contact_list` instead of `cl`)?
*   [ ] Are you storing each contact as a **dictionary** inside your main list?
*   [ ] Do your comments explain the *purpose* of code sections, not just what each line does?
*   [ ] Have you tested for **boundary cases** (e.g., what happens if you try to view an empty contact list)?

**3. Flexibility and Robustness (Excellence)**
*   [ ] Is your code organized into **functions** (e.g., `display_menu()`, `add_contact()`, `view_contacts()`)?
*   [ ] Have you used **docstrings** to document what each of your functions does?
*   [ ] Is your program robust? Does it use **`try...except`** blocks to prevent crashing from invalid input (e.g., entering text when a number is expected)?
*   [ ] Have you tested for **invalid cases** (e.g., entering "hello" at the menu, trying to add a contact with no name)?

---

## Exercises

This week, the exercises are steps in the project development process.

1.  **Build the Skeleton:** Create the main file with your empty list and your main `while` loop. Define all the functions you will need (`display_menu`, etc.) but leave them empty with just a `pass` keyword inside.
2.  **Implement `display_menu`:** Write the code for your menu function.
3.  **Implement `add_contact`:** Write the code to add a contact. Make sure you are adding a dictionary to your list.
4.  **Implement `view_contacts`:** Write the code to loop through and display the contacts.
5.  **First Test:** Test the core functionality. Make sure you can add and view contacts.
6.  **Add Error Handling:** Go back to your `add_contact` and menu functions. Add `try...except` blocks to handle any potential `ValueError` from user input.
7.  **Refine and Document:** Read through your code. Add comments and docstrings. Are your variable names clear? Can you make anything easier to read?
8.  **Peer Review:** Swap your code with a classmate. Can they understand what it does? Can they find any bugs?
9.  **Final Testing:** Go through the marking schedule for the assessment one last time. Test every single requirement for A, M, and E to make sure your program meets them.
10. **Submit Your Work:** Hand in your completed project file.
