// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'




function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    
    switch (true) {
      case average >= 90:
        return 'A';
      case average >= 80:
        return 'B';
      case average >= 70:
        return 'C';
      case average >= 60:
        return 'D';
      default:
        return 'F';
    }
  }