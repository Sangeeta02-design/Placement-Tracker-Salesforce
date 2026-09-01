# 🚀 Placement Tracker System Using Salesforce CRM

> A cloud-based Salesforce application designed to simplify and automate campus placement management through centralized data, business logic, and interactive dashboards.

---

## 📌 Project Overview

The **Placement Tracker System** is a cloud-based application developed using **Salesforce CRM** to manage and monitor campus placement activities.

The system provides a centralized platform for managing:

- 👨‍🎓 Student information
- 🏢 Company information
- 📝 Job applications
- 🏆 Placement records
- 📊 Reports and dashboards
- 🔍 Search and filtering
- ⚡ Business logic and automation

The application helps placement officers reduce manual work, maintain accurate records, and monitor placement activities efficiently.

---

## 🎯 Objectives

- Develop a centralized placement management system.
- Digitally manage student and company information.
- Track student applications and placement status.
- Reduce manual data entry and repetitive work.
- Provide search and filtering functionality.
- Generate placement reports and statistics.
- Provide an interactive dashboard for quick analysis.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 👨‍🎓 Student Management | Manage student academic and personal information |
| 🏢 Company Management | Maintain company and recruitment details |
| 📝 Application Tracking | Track student applications and their status |
| 🏆 Placement Management | Maintain final placement records |
| 🔍 Search & Filtering | Search and filter student records |
| ⚡ Apex Business Logic | Process placement-related operations |
| 🔎 SOQL Data Retrieval | Retrieve required Salesforce records |
| 💻 LWC Dashboard | Interactive placement dashboard |
| 📊 Reports | Generate placement-related reports |
| 📈 Dashboard | Visualize placement statistics |
| ✅ Validation | Maintain data accuracy and consistency |

---

## 🛠️ Technologies Used

- **Salesforce CRM**
- **Apex**
- **SOQL**
- **Lightning Web Components (LWC)**
- **Salesforce Custom Objects**
- **Lookup Relationships**
- **Validation Rules**
- **Formula Fields**
- **Salesforce Reports & Dashboards**
- **Salesforce CLI / SFDX**
- **Visual Studio Code**

---

## 🏗️ System Architecture

```text
                    👤 USER
                      │
                      ▼
             ┌─────────────────┐
             │    LWC UI       │
             │   Dashboard     │
             │ Search / Filter │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │   APEX CLASS    │
             │ Business Logic  │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │      SOQL       │
             │  Data Retrieval │
             └────────┬────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │    SALESFORCE OBJECTS       │
        │                             │
        │ Student | Company           │
        │ Application | Placement     │
        └─────────────────────────────┘
                      │
                      ▼
             📊 Reports & Dashboard

🗂️ Salesforce Data Model

The project uses the following custom objects:

👨‍🎓 Student

Stores student-related information such as:

Student ID
Student Name
Email
Phone
Branch
CGPA
Skills
Placement Status
🏢 Company

Stores company and recruitment information such as:

Company Name
Package Offered
Job Location
Eligibility CGPA
Required Skills
HR Name
HR Email
Application Deadline
📝 Application

Stores student application information such as:

Application ID
Student
Company
Job Role
Applied Date
Application Status
🏆 Placement

Stores final placement information such as:

Placement ID
Student
Company
Offered Package
Joining Date
Placement Status
🔗 Object Relationships

The system uses Lookup Relationships to connect related records.

Student ───────────► Application ◄────────── Company
   │                                             │
   │                                             │
   └──────────────► Placement ◄────────────────┘
Relationships Used
Student → Application
Company → Application
Student → Placement
Company → Placement

These relationships help connect related records and reduce unnecessary data duplication.

🔄 Project Workflow
Student Information
        ↓
Company Information
        ↓
Job Opportunity
        ↓
Student Applies
        ↓
Application Created
        ↓
Application Status Updated
        ↓
Student Selected
        ↓
Placement Record Created
        ↓
Reports & Dashboard
💻 Lightning Web Component

The project includes an interactive Lightning Web Component (LWC) dashboard.

The LWC uses:

HTML for structure
JavaScript for functionality
CSS for styling
XML for component configuration
Apex for server-side data retrieval
Data Flow
LWC
 ↓
Apex Controller
 ↓
SOQL Query
 ↓
Salesforce Objects
 ↓
Apex Response
 ↓
LWC Dashboard
📊 Placement Tracker Dashboard

The dashboard provides an organized view of placement activities.

Dashboard Features
👨‍🎓 Total Students
🏢 Total Companies
📝 Total Applications
🏆 Total Placements
🔍 Student Search
🎯 Branch Filtering
📌 Placement Status Filtering
📋 Student Records Table
📊 Company Statistics
📈 Placement Analytics
Dashboard Preview

Add your actual Salesforce dashboard screenshot here.

![Placement Tracker Dashboard](screenshots/dashboard.png)
📑 Salesforce Reports

The project includes reports for analyzing placement information:

Student Report
Company Report
Application Report
Placement Report

Reports help placement officers organize, filter, and analyze placement-related records.

⚡ Apex

Apex is used to implement the application's business logic.

The project includes Apex controllers for handling placement-related data and operations.

Main Apex Components
StudentController
PlacementDashboardController

Apex communicates with Salesforce objects through SOQL queries and provides the required information to the Lightning Web Component.

🔎 SOQL

SOQL — Salesforce Object Query Language

SOQL is used to retrieve required records from Salesforce objects.

Example:

SELECT Id, Name, Branch__c, CGPA__c
FROM Student__c

SOQL supports filtering, sorting, limiting records, and retrieving related information.

⚙️ Automation & Data Validation

The system uses Salesforce platform features to maintain data quality and automate placement-related operations.

Validation Rules

Used to prevent incorrect or inconsistent data from being saved.

Formula Fields

Used to calculate values automatically based on predefined formulas.

Apex Triggers

Used to execute automated processing when records are created, updated, or otherwise modified according to the trigger logic.

🗃️ Project Structure
PlacementTracker/
│
├── force-app/
│   └── main/
│       └── default/
│           │
│           ├── classes/
│           │   ├── StudentController.cls
│           │   └── PlacementDashboardController.cls
│           │
│           ├── lwc/
│           │   └── studentDashboard/
│           │       ├── studentDashboard.html
│           │       ├── studentDashboard.js
│           │       ├── studentDashboard.css
│           │       └── studentDashboard.js-meta.xml
│           │
│           ├── objects/
│           │   ├── Student/
│           │   ├── Company/
│           │   ├── Application/
│           │   └── Placement/
│           │
│           └── triggers/
│
├── config/
├── scripts/
├── .gitignore
├── package.json
├── README.md
└── sfdx-project.json
🧰 Development Tools
Salesforce CLI / SFDX

Used for:

Salesforce project management
Authentication
Metadata management
Deployment
Source retrieval
Visual Studio Code

Used for:

Apex development
LWC development
SOQL
Salesforce project management
Source-driven development
📈 Benefits of the System
Centralized placement data
Reduced manual effort
Better data accuracy
Faster record retrieval
Improved application tracking
Easy placement analysis
Interactive dashboard
Cloud-based accessibility
Scalable Salesforce platform
Improved decision-making
🎓 Learning Outcomes

Through this project, I gained practical experience in:

Salesforce CRM
Salesforce Custom Objects
Object Relationships
Apex Programming
SOQL
Lightning Web Components
Reports & Dashboards
Validation Rules
Formula Fields
Apex Triggers
Salesforce CLI / SFDX
Visual Studio Code
Cloud-based application development
🚀 Future Enhancements

Possible future improvements include:

🤖 AI-based job recommendations
📧 Email and SMS notifications
📄 Resume upload and management
📅 Interview scheduling
🌐 Job portal integration
📱 Mobile application
📊 Advanced analytics
👨‍🎓 Student self-service portal
🤝 Alumni integration
👩‍💻 Project Information

Project: Placement Tracker System Using Salesforce CRM

Platform: Salesforce CRM

Domain: Campus Placement Management

Type: Cloud-Based Application

Developer: Sangeeta Kumari
