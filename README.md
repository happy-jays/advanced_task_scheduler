# Advanced Todo List Web Application

  A to-do application built using React and ant design with features to add, delete, and update tasks.



## Tech Stack

**Client:** React, HTML, CSS,  Ant Design Pro v4+




## Installation

To run this Project

```bash
  1. Clone the repository to your local machine.
       git clone https://github.com/happy-jays/advanced_task_scheduler.git
  2. Navigate to the project directory
  3. Install the dependencies
       npm install
       or
       yarn install
  4. Start the development server
      npm start
      or
      yarn start
  5. Open your browser and navigate to http://localhost:3000
```
## Features
    1. Tasks should be displayed in a Tabular format, using the Ant Pro table component.
    2. The table should have the following columns:
      a. Timestamp created: Timestamp at which a task was created.
      Should be auto set when creating a new entry. A user should not be able to
      edit this.
      b. Title: Title of the task to be done.
          i. A user can set this while creating a new entry. A user can also change
          this updating existing entry.
          ii. Max length: 100 characters.
          iii. Mandatory field
      c. Description: Description of the task to be done.
          i. A user can add details about this task.
          ii. Max length: 1000 characters
          iii. Mandatory field
      d. Due Date: Expected due date to finish the task
          i. A user can set this while creating a new entry. A user can also change
          this updating existing entry.
          ii. Optional field
      e. Tag: One or more tags which user can add to the entry
          i. A user can set this while creating a new entry. A user can also change
          this updating existing entry. Multiple tags can be added to the same
          entry
          ii. Optional field
          iii. Multiple tags with the same value should be saved only once.
      f. Status: Shows status of a task
          i. Should be one of these values.
              1. OPEN (Default value)
              2. WORKING
              3. DONE
              4. OVERDUE
          ii. Mandatory field
    3. The table should support pagination.
    4. User should be able to perform the following operations:
        a. ADD a new to-do entry
        b. MODIFY an existing to-do entry
        c. DELETE an existing to-do entry
        d. SORT the table using columns a., b., c. and d. given above in both ascending
        and descending formats
        e. FILTER the table using e. and f. Columns.
    5. Provide a search bar on the top where a user can perform a case-insensitive search
    for any task based on the data in any of the above-mentioned columns.

## Screenshots

   
![localhost_3000_ (2)](https://user-images.githubusercontent.com/56588611/219413473-b2108bc3-0167-45a3-af05-c423f86ddc74.png)
![localhost_3000_ (3)](https://user-images.githubusercontent.com/56588611/219413564-06d3effa-f830-4bcb-98f4-73a3c7c8efbc.png)
![localhost_3000_ (4)](https://user-images.githubusercontent.com/56588611/219413649-99a95617-5388-496b-91ba-5700d835c693.png)
