// Given a string str and an integer K, the 
// task is to reduce the string by applying the following operation any number of t
// imes until it is no longer possible:

class Pair
{
    constructor(c,ctr)
    {
        this.c = c;
            this.ctr = ctr;
    }
}
 
// Function to find the reduced string
function reduced_String(k,s)
{
    // Base Case
        if (k == 1) {
            let ans = "";
            return ans;
        }
  
        // Creating a stack of type Pair
        let st = [];
  
        // Length of the string S
        let l = s.length;
        let ctr = 0;
  
        // iterate through the string
        for (let i = 0; i < l; i++) {
  
            // if stack is empty then simply add the
            // character with count 1 else check if
            // character is same as top of stack
            if (st.length == 0) {
                st.push(new Pair(s[i], 1));
                continue;
            }
  
            // if character at top of stack is same as
            // current character increase the number of
            // repetitions in the top of stack by 1
            if (st[st.length-1].c == s[i]) {
                let p = st[st.length-1];
                st.pop();
                p.ctr += 1;
                if (p.ctr == k) {
                    continue;
                }
                else {
                    st.push(p);
                }
            }
            else {
  
                // if character at top of stack is not
                // same as current character push the
                // character along with count 1 into the
                // top of stack
                st.push(new Pair(s[i], 1));
            }
        }
  
        // iterate through the stack
        // Use string(int,char) in order to replicate the
        // character multiple times and convert into string
        // then add in front of output string
        let ans = "";
        while (st.length > 0) {
            let c = st[st.length-1].c;
            let cnt = st[st.length-1].ctr;
            while (cnt-- > 0)
                ans = c + ans;
            st.pop();
        }
        return ans;
}
 
// Driver code
let k = 2;
let st = "geeksforgeeks";
let ans = reduced_String(k, st);
console.log(ans);