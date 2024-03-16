// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
    let count = 0;
    for (let k = 0; k <= n; k++) {
        let square = (k * k).toString();
        count += square.split(d.toString()).length - 1;
    }
    return count;
}