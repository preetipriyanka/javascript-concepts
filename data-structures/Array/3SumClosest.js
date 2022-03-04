function solution(arr, x)
{
    let closestSum = 1000000000;
    // Sort the array
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++)
    {
        let ptr1 = i + 1, ptr2 = arr.length - 1;
 
        while (ptr1 < ptr2) {
 
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
 
            // If the sum is more closer than
            // the current closest sum
            if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))
            {
                closestSum = sum;
            }
 
            // If sum is greater then x then decrement
            // the second pointer to get a smaller sum
            if (sum > x) {
                ptr2--;
            }
 
            // Else increment the first pointer
            // to get a larger sum
            else {
                ptr1++;
            }
        }
    }
    return closestSum;
}
 
// Driver code
    let arr = [ -1, 2, 1, -4 ];
    let x = -6;
    console.log(solution(arr, x));