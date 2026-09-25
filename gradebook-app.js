function getAverage (arrTestScores) {
  let sum = 0;
  for (let i = 0; i < arrTestScores.length; i++) {
    sum += arrTestScores[i];
  }
  const averageScore = sum/arrTestScores.length;

  return averageScore;
}

function getGrade (score) {
  if (score === 100) {
    return "A+";
  } else if (score < 100 && score >= 90 ) {
    return "A";
  } else if (score < 90 && score >= 80) {
    return "B";
  } else if (score < 80 && score >= 70) {
    return "C";
  } else if (score < 70 && score >= 60) {
    return "D";
  } else if (score < 60 && score >= 0) {
    return "F";
  }
}

function hasPassingGrade (score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

function studentMsg (arrScores, score) {
  const average = getAverage (arrScores);
  const grade = getGrade(score);

  if (hasPassingGrade(score)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}