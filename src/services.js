export function getStudentsByCampus(arr, id) {
  var filteredStudents = [];

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].CampusId == id) filteredStudents.push(arr[i]);
    }

    return filteredStudents;
  }

  return filteredStudents;
}
