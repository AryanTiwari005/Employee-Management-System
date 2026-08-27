const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create the login page using React and Tailwind CSS.",
        taskDate: "2026-08-26",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the responsive navbar issue on mobile devices.",
        taskDate: "2026-08-27",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Design and implement the main employee dashboard.",
        taskDate: "2026-08-24",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect the frontend dashboard with the employee API.",
        taskDate: "2026-08-28",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate the old employee records to the new database.",
        taskDate: "2026-08-23",
        category: "Database"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User API",
        taskDescription: "Develop REST API endpoints for managing users.",
        taskDate: "2026-08-26",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Database",
        taskDescription: "Create the required tables and relationships.",
        taskDate: "2026-08-22",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement authentication for employee accounts.",
        taskDate: "2026-08-29",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the newly created API endpoints.",
        taskDate: "2026-08-25",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Validation",
        taskDescription: "Add request validation to the user registration API.",
        taskDate: "2026-08-30",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a modern and responsive homepage design.",
        taskDate: "2026-08-26",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Build the responsive footer component.",
        taskDate: "2026-08-23",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize images used throughout the website.",
        taskDate: "2026-08-27",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Mobile Layout",
        taskDescription: "Fix layout issues appearing on smaller screens.",
        taskDate: "2026-08-21",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Build the employee profile page with editable information.",
        taskDate: "2026-08-31",
        category: "Frontend"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the authentication module.",
        taskDate: "2026-08-26",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix API Errors",
        taskDescription: "Resolve unexpected 500 errors from the API.",
        taskDate: "2026-08-24",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Test the application performance under heavy load.",
        taskDate: "2026-08-28",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Error Handling",
        taskDescription: "Implement proper error handling throughout the backend.",
        taskDate: "2026-08-29",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server Deployment",
        taskDescription: "Deploy the latest backend version to the server.",
        taskDate: "2026-08-20",
        category: "DevOps"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Build a report generation feature for administrators.",
        taskDate: "2026-08-26",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Search",
        taskDescription: "Implement search functionality for employees.",
        taskDate: "2026-08-23",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Pagination",
        taskDescription: "Add pagination to the employee listing page.",
        taskDate: "2026-08-27",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Update outdated project dependencies to their latest stable versions.",
        taskDate: "2026-08-25",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Admin Notifications",
        taskDescription: "Implement notifications for important admin events.",
        taskDate: "2026-09-01",
        category: "Frontend"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

/**
 * Seeds localStorage with employees and admin data.
 * Only writes if the keys don't already exist (avoids overwriting user edits).
 */
export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

/**
 * Reads and returns the current employees and admin arrays from localStorage.
 */
export const getLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem('employees') || '[]');
  const storedAdmin = JSON.parse(localStorage.getItem('admin') || '[]');
  return { employees: storedEmployees, admin: storedAdmin };
};
