
# Weeks 8-10: Project Development & Refinement

**Goal:** To use the final three weeks of term to build, test, document, and refine the **Simple Contact Book** project to the highest possible standard.

---

## Overview

There are no new concepts to learn. This time is dedicated to applying everything you have learned. The following is a suggested timeline to help you manage your work effectively.

## Week 8: Building the Core Engine

**Focus:** Get the basic functionality working. Aim to meet all the criteria for **Achieved** and **Merit** by the end of this week.

### This Week's Checklist:
*   [ ] **Project Skeleton:** Create your main Python file. Create the empty list that will store your contacts.
*   [ ] **Main Loop:** Implement the main `while True:` loop that will keep your program running.
*   [ ] **Menu:** Create a `display_menu()` function that prints the user options clearly.
*   [ ] **Core Functions:**
    *   Implement the `add_contact()` function. It should ask for a name and phone number, create a **dictionary** for the contact, and `append()` it to your main list.
    *   Implement the `view_contacts()` function. It should use a `for` loop to go through your list and print each contact's details in a readable format.
*   [ ] **Initial Testing:**
    *   Test that you can add multiple contacts.
    *   Test that you can view them correctly.
    *   Test the boundary case: What happens when you try to view contacts when the list is empty? Your program should handle this gracefully.
*   [ ] **Code Readability:** Use clear, descriptive variable names from the start.

## Week 9: Achieving Excellence & Robustness

**Focus:** Elevate your project from functional to excellent. This week is about adding robustness and professional structure.

### This Week's Checklist:
*   [ ] **Error Handling (`try...except`):**
    *   Go back to your `display_menu()` function (or wherever you get the user's menu choice). Wrap the `int()` conversion in a `try...except` block to catch `ValueError` if the user types text.
    *   Add a check to ensure the user's choice is within the valid range of options (e.g., 1-3).
*   [ ] **Function Documentation:**
    *   Write professional **docstrings** for every function you have created. Explain what the function does, its parameters, and what it returns (if anything).
    *   Add inline comments (`#`) to explain any parts of your code that are particularly complex or clever.
*   [ ] **Code Refinement:**
    *   Read through your code. Is there any repetition? Could any part be made clearer or more efficient?
    *   This is a good time to get feedback from a classmate (peer review).

## Week 10: Final Testing, Polishing, and Submission

**Focus:** Rigorous testing and final preparations for submission. Your project should be complete, robust, and well-documented.

### This Week's Checklist:
*   [ ] **Final Testing Plan:**
    *   Go through the official marking schedule for AS92004 one last time.
    *   Create a testing plan. Write down exactly what you will test for each criterion (Achieved, Merit, and Excellence).
    *   **Test for invalid cases:** What happens if the user enters a blank name? What if they enter a phone number with letters? Your program should not crash.
*   [ ] **Code Review and Cleanup:**
    *   Read through your entire project one last time.
    *   Check for any spelling mistakes in your comments, docstrings, or printed messages.
    *   Ensure your indentation is consistent and correct everywhere.
*   [ ] **Prepare for Submission:**
    *   Make sure your Python file is named correctly.
    *   Prepare any required supporting evidence (e.g., screenshots of your testing, a brief written report if required).
*   [ ] **Submit Your Work:** Hand in your completed project with confidence.
