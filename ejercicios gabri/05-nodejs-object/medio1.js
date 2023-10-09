function getStudentsWithNamesAndTopNotes(students) {
    return students.map(student => {
      const { name, notes } = student;
      const topNote = notes.length > 0 ? Math.max(...notes) : 0;
      return { name, topNote };
    });
  }
  
  // Example of usage
  const students = [
    { name: "John", notes: [3, 5, 4] },
    { name: "Alice", notes: [5, 5, 5] },
    { name: "Bob", notes: [] }, // Student with no notes
  ];
  
  const studentsWithTopNotes = getStudentsWithNamesAndTopNotes(students);
  console.log(studentsWithTopNotes);