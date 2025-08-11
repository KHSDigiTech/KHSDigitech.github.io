# Testing Table Template and Guide

**Purpose:** A testing table is a crucial tool for proving that your program works as expected. It helps you think systematically about what to test and provides clear evidence of your program's functionality, robustness, and handling of edge cases. You should fill this out as you develop and test your program.

---

## How to Use This Table

* **Test Case ID:** A unique number for each test (e.g., 1, 2, 3...).
* **Feature Being Tested:** What part of your program are you testing? (e.g., "Add Contact", "Main Menu Choice").
* **Test Type:** What kind of input are you testing?
  * **Expected:** The program is working under normal, expected conditions.
  * **Boundary:** The program is working at the limits of its conditions (e.g., an empty list, the highest valid menu option).
  * **Invalid:** The program is being tested with input it should reject (e.g., text instead of a number, a menu option that doesn't exist).
* **Input Data:** Exactly what you will type into the program for this test.
* **Expected Outcome:** What *should* happen when you provide the input?
* **Actual Outcome:** What *actually* happened when you ran the test?
* **Pass/Fail:** Did the actual outcome match the expected outcome?
* **Action Taken (if Fail):** If the test failed, what did you do to fix it? (e.g., "Fixed the `if` statement to correctly check for the number 3.", "Added a `try-except` block to handle text input.")

---

## Testing Table Template

| Test Case ID | Feature Being Tested | Test Type | Input Data                                    | Expected Outcome                                                          | Actual Outcome                                    | Pass/Fail | Action Taken (if Fail)                                             |
|:------------ |:-------------------- |:--------- |:--------------------------------------------- |:------------------------------------------------------------------------- |:------------------------------------------------- |:--------- |:------------------------------------------------------------------ |
| 1            | Main Menu Choice     | Expected  | `1`                                           | The "Add Contact" function runs.                                          | The "Add Contact" function runs.                  | Pass      | -                                                                  |
| 2            | Main Menu Choice     | Boundary  | `3`                                           | The program exits cleanly.                                                | The program exits cleanly.                        | Pass      | -                                                                  |
| 3            | Main Menu Choice     | Invalid   | `hello`                                       | An error message like "Invalid input" is shown, and the menu reappears.   | An error message is shown and the menu reappears. | Pass      | -                                                                  |
| 4            | Main Menu Choice     | Invalid   | `5`                                           | An error message is shown, and the menu reappears.                        | The program crashed.                              | **Fail**  | Added an `if` statement to check if the choice is between 1 and 3. |
| 5            | View Contacts        | Boundary  | Choose "View" when the contact list is empty. | A message like "Your contact book is empty" is shown.                     | A message is shown.                               | Pass      | -                                                                  |
| 6            | Add Contact          | Expected  | Name: `Test`, Phone: `123`                    | The contact is added to the list. Viewing contacts shows the new contact. | The contact was added and is visible.             | Pass      | -                                                                  |
| 7            | Add Contact          | Invalid   | Name: `(blank)`, Phone: `(blank)`             | The program should ask for the name again or show an error.               | The program accepted a blank contact.             | **Fail**  | Added a check to ensure the name is not empty before adding.       |
