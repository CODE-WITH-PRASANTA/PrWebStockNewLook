import React, { useState, ChangeEvent, FormEvent } from "react";
import "./TeamMembers.css";

type MonthName =
  | "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun"
  | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";

const MONTHS: MonthName[] = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

interface Employee {
  id: number;
  name: string;
  designation: string;
  salary: string;
  imageUrl: string;
  published: boolean;
  monthStatus: Record<MonthName, boolean>;
}

const emptyMonthStatus = (): Record<MonthName, boolean> =>
  MONTHS.reduce((acc, m) => {
    acc[m] = false;
    return acc;
  }, {} as Record<MonthName, boolean>);

const TeamMembers: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<MonthName | "">("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [newEmployee, setNewEmployee] = useState<Omit<Employee, "id">>({
    name: "",
    designation: "",
    salary: "",
    imageUrl: "",
    published: false,
    monthStatus: emptyMonthStatus(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file" && files && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setNewEmployee((prev) => ({ ...prev, imageUrl: url }));
      return;
    }

    if (type === "checkbox" && name === "published") {
      setNewEmployee((prev) => ({ ...prev, published: checked }));
      return;
    }

    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleMonthToggle = (month: MonthName) => {
    setNewEmployee((prev) => ({
      ...prev,
      monthStatus: {
        ...prev.monthStatus,
        [month]: !(prev.monthStatus[month] ?? false),
      },
    }));
    setSelectedMonth(month);
  };

  const handleAddEmployee = (e: FormEvent) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.designation || !newEmployee.salary) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingId ? { ...emp, ...newEmployee } : emp
        )
      );
      setEditingId(null);
    } else {
      const emp: Employee = { id: Date.now(), ...newEmployee };
      setEmployees((prev) => [...prev, emp]);
    }

    setNewEmployee({
      name: "",
      designation: "",
      salary: "",
      imageUrl: "",
      published: false,
      monthStatus: emptyMonthStatus(),
    });
    setSelectedMonth("");
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const handleEdit = (id: number) => {
    const emp = employees.find((e) => e.id === id);
    if (!emp) return;
    setEditingId(id);
    setNewEmployee({ ...emp });
  };

  const handleTogglePublishOnCard = (id: number) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, published: !e.published } : e))
    );
  };

  return (
    <div className="team-members-container">
      {/* LEFT SIDE FORM */}
      <div className="team-members-left">
        <h2>{editingId ? "✏️ Edit Employee" : "➕ Add Employee"}</h2>
        <form onSubmit={handleAddEmployee}>
          <div className="form-group">
            <label>Employee Name *</label>
            <input
              name="name"
              type="text"
              value={newEmployee.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label>Designation *</label>
            <input
              name="designation"
              type="text"
              value={newEmployee.designation}
              onChange={handleChange}
              placeholder="Enter designation"
            />
          </div>

          <div className="form-group">
            <label>Salary (₹) *</label>
            <input
              name="salary"
              type="text"
              value={newEmployee.salary}
              onChange={handleChange}
              placeholder="Enter salary"
            />
          </div>

          <div className="form-group">
            <label>Employee Photo</label>
            <input name="image" type="file" accept="image/*" onChange={handleChange} />
            {newEmployee.imageUrl && (
              <img src={newEmployee.imageUrl} alt="preview" className="preview-img" />
            )}
          </div>

          <div className="form-group">
            <label>Monthly Payment Status</label>
            <div className="months-grid">
              {MONTHS.map((m) => (
                <span
                  key={m}
                  className={`month-item ${newEmployee.monthStatus[m] ? "paid" : ""}`}
                  onClick={() => handleMonthToggle(m)}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="form-toggle">
            <label>Publish / Unpublish</label>
            <label className="switch">
              <input
                type="checkbox"
                name="published"
                checked={newEmployee.published}
                onChange={handleChange}
              />
              <span className="slider round" />
            </label>
          </div>

          <button type="submit" className="add-btn">
            {editingId ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="team-members-right">
        <h2>👥 Employee Records {selectedMonth ? `— ${selectedMonth}` : ""}</h2>

        {employees.length === 0 ? (
          <p className="noData">No employees yet. Add one to get started!</p>
        ) : (
          <div className="employee-card-grid">
            {employees.map((emp) => (
              <div key={emp.id} className="employee-card enhanced-card">
                <div className="emp-photo">
                  {emp.imageUrl ? (
                    <img src={emp.imageUrl} alt={emp.name} />
                  ) : (
                    <div className="photo-placeholder">👤</div>
                  )}
                </div>
                <div className="emp-details">
                  <h3>{emp.name}</h3>
                  <p className="emp-role">{emp.designation}</p>
                  <p className="emp-salary">💰 Salary: ₹{emp.salary}</p>

                  <div className="emp-months">
                    {Object.entries(emp.monthStatus)
                      .filter(([_, paid]) => paid)
                      .map(([m]) => (
                        <span key={m} className="mini-month paid">
                          {m}
                        </span>
                      ))}
                  </div>

                  <div className="emp-actions">
                    <button className="edit-btn" onClick={() => handleEdit(emp.id)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(emp.id)}>
                      Delete
                    </button>
                    <button
                      className={`publish-btn ${emp.published ? "published" : "unpublished"}`}
                      onClick={() => handleTogglePublishOnCard(emp.id)}
                    >
                      {emp.published ? "Published" : "Unpublished"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
