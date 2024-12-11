const Course = ({ parts = [] }) => {
  if (parts.length === 0) {
    return <p>No parts available</p>;
  }

  // Calculate the total exercises for the parts array
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};

export default Course;
