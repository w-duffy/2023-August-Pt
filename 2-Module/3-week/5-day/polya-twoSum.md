# Polya’s Problem Solving Process

Polya’s Problem Solving Process has four steps:

1. **Understand the Problem**
2. **Make a plan**
3. **Carry Out the Plan**
4. **Look back and improve your solution**

Let's use Polya's Problem Solving to help us with `twoSum`.

### 1. Understand the Problem
Restate the problem in your own words:
"We need to find out if there are two numbers in our list that, when added together, give a specific target number."

### 2. Make a plan
Consider simpler scenarios:
- If you had just 2 numbers, you'd simply add them and check against the target.
- If you had 3 numbers (say A, B, and C), you'd check the pairs A+B, A+C, and B+C.

From this, you may see you need to add every combination. But how can we do this in code?

**Brainstorming and Pseudo-coding**:

- Think about how you'd do this manually. You'd pick the first number, then pair it with every other number. Then, you'd move to the second number and pair it with every subsequent number (because you already paired it with the first number).

Pseudo-code might look like:
```
For every number in the array:
let num = arr[i]

For every other number in the array that comes AFTER num:
let nextNum = arr[i + 1]

We need to check if 'num' + 'nextNum' equals the target.
```

### 3. Carry Out the Plan
Once you have a basic pseudo-code or plan, translate it into actual code:

```javascript
function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return true;
            }
        }
    }
    return false;
}
```

---

It's totally okay if you don't instantly see the solution. Problem-solving is a skill, and like any skill, it gets better with practice and time. Using systematic approaches, like Polya’s process, is a great way to grow this skill so that you can tackle a variety of problems. Sometimes, breaking a problem down into its simplest form or visualizing it with drawings or diagrams can also help in understanding it better.

This is why Instructors will often draw things out like we did during Recursion week


### 4. Look back and improve your solution
The brute force approach has a time complexity of O(n^2) due to the nested loops. While this method will certainly solve the problem, it might not be the most efficient for large arrays.

With that being said, our objective was to solve the problem and there weren't any
requirements for a specific time complexity like O(n), therefore our solution is sufficient.
