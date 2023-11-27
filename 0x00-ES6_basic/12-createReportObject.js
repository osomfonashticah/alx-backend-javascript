export default function createReportObject(employeesList) {
  const allEmployees = {
    getNumberOfDepartments: (employeesList) =>
      Object.keys(employeesList).length,
  };

  return { allEmployees };
}
