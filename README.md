# Employee Management System (EMS)

A modern, responsive, and role-based Employee Management System built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router**. This application features role-based authentication, real-time task creation and assignment, interactive task lifecycle tracking (New, Accepted, Completed, Failed), and client-side data persistence with responsive layouts tailored for mobile, tablet, and desktop viewports.

---

## 🚀 Live Demo

🔗 **Live Application**: [https://your-deployment-url.vercel.app](https://your-deployment-url.vercel.app)  
*(Replace with your live deployment URL on Vercel or Netlify)*

---

## 📸 Screenshots

> *Add your application screenshots in the `/public` or `assets` folder and update the links below.*

| Admin Dashboard | Employee Dashboard |
| :---: | :---: |
| ![Admin Dashboard](https://via.placeholder.com/600x350/18181b/ffffff?text=Admin+Dashboard+Preview) | ![Employee Dashboard](https://via.placeholder.com/600x350/18181b/ffffff?text=Employee+Dashboard+Preview) |

| Role-Based Login | Mobile View |
| :---: | :---: |
| ![Login Page](https://via.placeholder.com/600x350/18181b/ffffff?text=Login+View) | ![Mobile View](https://via.placeholder.com/300x500/18181b/ffffff?text=Mobile+Responsive) |

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 19](https://react.dev/) & [Vite](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (with `ProtectedRoute` guards and automatic redirects)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: React Context API (`AuthContext` & `TaskContext`)
- **Persistence**: `localStorage` (seeds default admin and employee tasks on initial visit)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

---

## ✨ Key Features

- 🔐 **Role-Based Authentication & Guarded Routes**:
  - Separate roles: **Admin** and **Employee**.
  - Protected routes (`/admin`, `/employee`) with automatic cross-role redirects and fallback routing.
  - Session routing preserving browser history and direct URL bookmarking.
- 📋 **Admin Panel**:
  - Assign new tasks to specific employees with dates, categories, titles, and descriptions.
  - View all employee tasks with real-time status badges (`New`, `Accepted`, `Completed`, `Failed`).
  - Filter tasks by employee assignee and completion status.
  - Delete tasks with confirmation modal dialogs.
- 👷 **Employee Workspace**:
  - Live metric stat cards (New, Accepted, Completed, Failed task counts).
  - Horizontal swipe-and-scroll task list with touch snap support.
  - Change task status dynamically (Accept new tasks, mark as Completed, or flag as Failed).
- 📱 **Fully Mobile-Responsive**:
  - Adaptive grids, responsive typography, and touch-friendly controls tested across 375px (mobile), 768px (tablet), and 1024px+ (desktop) screens.
- 🔔 **Interactive Feedback**:
  - Rich toast notifications for login, logout, task creations, status updates, and errors.

---

## 🔑 Demo Credentials

The application automatically seeds `localStorage` on first load with the following test accounts:

### 👑 Admin Account
- **Email**: `admin@example.com`
- **Password**: `123`
- **Access Route**: `/admin`

### 👷 Employee Accounts
- **Password for all employees**: `123`
- **Access Route**: `/employee`

| Employee | Email | Initial Tasks |
| :--- | :--- | :--- |
| **Employee 1** | `employee1@example.com` | 5 tasks |
| **Employee 2** | `employee2@example.com` | 5 tasks |
| **Employee 3** | `employee3@example.com` | 5 tasks |
| **Employee 4** | `employee4@example.com` | 5 tasks |
| **Employee 5** | `employee5@example.com` | 5 tasks |

---

## 🏗️ Architecture & State Management

```
                   ┌───────────────────────────────────┐
                   │           BrowserRouter           │
                   └─────────────────┬─────────────────┘
                                     │
                 ┌───────────────────┴───────────────────┐
                 │          AuthContextProvider          │
                 │      (user, login, logout state)      │
                 └───────────────────┬───────────────────┘
                                     │
                 ┌───────────────────┴───────────────────┐
                 │          TaskContextProvider          │
                 │    (tasks, addTask, update, delete)   │
                 └───────────────────┬───────────────────┘
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
  [/login]                        [/admin]                    [/employee]
  <Login />                 <ProtectedRoute:admin>      <ProtectedRoute:employee>
                              <AdminDashBoard />          <EmployeeDashBoard />
```

- **`AuthContext` (`src/context/AuthContext.jsx`)**:
  - Manages active user authentication state (`user: { email, role }`).
  - Verifies credentials against `localStorage` (`admin` and `employees` tables).
- **`TaskContext` (`src/context/TaskContext.jsx`)**:
  - Aggregates task arrays and exposes global mutation functions: `addTask`, `updateTaskStatus`, `deleteTask`.
  - Automatically synchronizes all changes with `localStorage` so data persists across page refreshes.
- **`ProtectedRoute` (`src/components/Auth/ProtectedRoute.jsx`)**:
  - Intercepts navigation attempts.
  - Redirects unauthenticated traffic to `/login`.
  - Redirects users attempting to view unauthorized role pages back to their designated dashboard.

---

## 💻 Local Setup & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### Step-by-Step

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Guide

### Option 1: Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `ems` GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
   > *Note: The included `vercel.json` already contains SPA rewrite rules to ensure routes like `/admin` and `/employee` work on direct reload.*

### Option 2: Deploying to Netlify

1. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
2. Connect your GitHub repository.
3. Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.
   > *Note: The included `public/_redirects` file automatically handles SPA routing.*

---

## 📁 Project Structure

```
employee-management-system/
├── public/
│   └── _redirects              # Netlify SPA routing redirects
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx        # Login page with input validation
│   │   │   └── ProtectedRoute.jsx # Role-based route guard
│   │   ├── DashBoard/
│   │   │   ├── AdminDashBoard.jsx    # Task creator & overview table
│   │   │   └── EmployeeDashBoard.jsx # Employee workspace
│   │   ├── other/
│   │   │   ├── Header.jsx            # User welcome banner & logout
│   │   │   └── TaskListNumbers.jsx   # Task metric stat cards
│   │   └── TaskList/
│   │       ├── TaskList.jsx          # Horizontal scrollable card container
│   │       ├── NewTask.jsx           # Unaccepted new task card
│   │       ├── AcceptTask.jsx        # Active task action card
│   │       ├── CompleteTask.jsx      # Completed badge card
│   │       └── FailedTask.jsx        # Failed badge card
│   ├── context/
│   │   ├── AuthContext.jsx     # User session provider
│   │   ├── auth-context.js     # AuthContext hook
│   │   ├── TaskContext.jsx     # Global task state provider
│   │   └── task-context.js     # TaskContext hook
│   ├── utils/
│   │   └── localStorage.jsx    # Seed mock data and storage helpers
│   ├── App.jsx                 # App routes and Toaster configuration
│   ├── main.jsx                # React root mount
│   └── index.css               # Global styles & Tailwind
├── .env.example                # Example environment file
├── vercel.json                 # Vercel SPA rewrite configuration
├── package.json
└── vite.config.js
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
